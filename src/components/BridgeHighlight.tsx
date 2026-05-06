import { useEffect, useRef, useState } from "react";

const segments = [
  { text: "Applying the ", highlight: false },
  { text: "precision", highlight: true },
  { text: " of military planning and the logic of ", highlight: false },
  { text: "full-stack engineering", highlight: true },
  { text: " to every medium, from digital interfaces to ", highlight: false },
  { text: "physical fabrication", highlight: true },
  { text: ".", highlight: false },
];

export default function BridgeHighlight() {
  const ref = useRef<HTMLParagraphElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.45 },
    );

    observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <p ref={ref} className={isVisible ? "bridge-highlight active" : "bridge-highlight"}>
      {segments.map((segment, index) => (
        <span
          key={`${segment.text}-${index}`}
          className={segment.highlight ? "highlight-bit" : undefined}
          style={{ transitionDelay: `${index * 90}ms` }}
        >
          {segment.text}
        </span>
      ))}
    </p>
  );
}
