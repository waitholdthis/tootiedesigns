import { useEffect, useRef, useState } from "react";

type RevealDirection = "start" | "end" | "center";

type DecryptedHeroTitleProps = {
  text: string;
  id?: string;
  speed?: number;
  revealDirection?: RevealDirection;
  characters?: string;
};

const defaultCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%^&*()_+{}[]<>?";

export default function DecryptedHeroTitle({
  text,
  id,
  speed = 36,
  revealDirection = "start",
  characters = defaultCharacters,
}: DecryptedHeroTitleProps) {
  const headingRef = useRef<HTMLHeadingElement>(null);
  const intervalRef = useRef<number | undefined>(undefined);
  const hasAnimatedRef = useRef(false);
  const [displayText, setDisplayText] = useState(text);
  const [scramblingIndices, setScramblingIndices] = useState<Set<number>>(new Set());

  useEffect(() => {
    return () => {
      if (intervalRef.current) window.clearInterval(intervalRef.current);
    };
  }, []);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting && !hasAnimatedRef.current) {
          hasAnimatedRef.current = true;
          play();
          observer.disconnect();
        }
      },
      { threshold: 0.55 },
    );

    if (headingRef.current) observer.observe(headingRef.current);
    return () => observer.disconnect();
  }, [text]);

  function getNextIndex(revealed: Set<number>) {
    if (revealDirection === "end") return text.length - 1 - revealed.size;

    if (revealDirection === "center") {
      const middle = Math.floor(text.length / 2);
      const offset = Math.floor(revealed.size / 2);
      const nextIndex = revealed.size % 2 === 0 ? middle + offset : middle - offset - 1;
      if (nextIndex >= 0 && nextIndex < text.length && !revealed.has(nextIndex)) return nextIndex;
    }

    return revealed.size;
  }

  function shuffleText(revealed: Set<number>) {
    return text
      .split("")
      .map((char, index) => {
        if (char === " " || revealed.has(index)) return char;
        return characters[Math.floor(Math.random() * characters.length)];
      })
      .join("");
  }

  function play() {
    if (intervalRef.current) window.clearInterval(intervalRef.current);

    const revealed = new Set<number>();
    setScramblingIndices(new Set(text.split("").map((_, index) => index)));
    setDisplayText(shuffleText(revealed));

    intervalRef.current = window.setInterval(() => {
      if (revealed.size >= text.length) {
        if (intervalRef.current) window.clearInterval(intervalRef.current);
        intervalRef.current = undefined;
        setDisplayText(text);
        setScramblingIndices(new Set());
        return;
      }

      revealed.add(getNextIndex(revealed));
      setDisplayText(shuffleText(revealed));
      setScramblingIndices(new Set(text.split("").map((_, index) => index).filter((index) => !revealed.has(index))));
    }, speed);
  }

  return (
    <h1 id={id} ref={headingRef} className="decrypted-title" aria-label={text} onMouseEnter={play}>
      <span aria-hidden="true">
        {displayText.split("").map((char, index) => (
          <span
            key={`${char}-${index}`}
            className={scramblingIndices.has(index) && char !== " " ? "decrypted-char encrypted" : "decrypted-char"}
          >
            {char}
          </span>
        ))}
      </span>
    </h1>
  );
}
