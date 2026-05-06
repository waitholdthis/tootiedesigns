import type { CSSProperties } from "react";

export default function PerspectiveBlueprint() {
  return (
    <div className="blueprint-visual perspective-visual" aria-hidden="true">
      <div className="perspective-grid">
        {Array.from({ length: 18 }).map((_, index) => (
          <span key={`h-${index}`} className="grid-line horizontal" style={{ "--i": index } as CSSProperties} />
        ))}
        {Array.from({ length: 15 }).map((_, index) => (
          <span key={`v-${index}`} className="grid-line vertical" style={{ "--i": index } as CSSProperties} />
        ))}
      </div>
      <div className="vector-card">
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div className="material-card"></div>
    </div>
  );
}
