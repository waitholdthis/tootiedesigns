import { useEffect, useState } from "react";

export default function LaserIntro() {
  const [isVisible, setIsVisible] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const hasPlayed = window.sessionStorage.getItem("tootie-laser-intro-played");

    if (reducedMotion || hasPlayed || window.location.hash) return;

    const originalOverflow = document.body.style.overflow;
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    document.body.style.overflow = "hidden";

    setIsVisible(true);
    window.sessionStorage.setItem("tootie-laser-intro-played", "true");

    const closingTimer = window.setTimeout(() => setIsClosing(true), 4500);
    const hiddenTimer = window.setTimeout(() => {
      setIsVisible(false);
      document.body.style.overflow = originalOverflow;
    }, 5200);

    return () => {
      window.clearTimeout(closingTimer);
      window.clearTimeout(hiddenTimer);
      document.body.style.overflow = originalOverflow;
    };
  }, []);

  function skipIntro() {
    setIsClosing(true);
    window.setTimeout(() => {
      setIsVisible(false);
      document.body.style.overflow = "";
    }, 420);
  }

  if (!isVisible) return null;

  return (
    <div className={isClosing ? "laser-intro closing" : "laser-intro"} aria-label="Tootie Designs intro animation">
      <div className="laser-flow-stage" aria-hidden="true">
        <span className="laser-beam horizontal"></span>
        <span className="laser-beam vertical"></span>
        <span className="laser-core"></span>
        <span className="laser-fog"></span>
        {Array.from({ length: 18 }).map((_, index) => (
          <span key={index} className="laser-wisp" style={{ "--i": index } as React.CSSProperties}></span>
        ))}
      </div>
      <div className="laser-intro-copy">
        <span>Tootie Designs</span>
        <strong>Precision / Texture / Innovation</strong>
      </div>
      <button type="button" onClick={skipIntro}>
        Skip
      </button>
    </div>
  );
}
