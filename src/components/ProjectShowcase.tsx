import { useMemo, useState } from "react";
import type { CSSProperties } from "react";
import type { Project } from "../data/site";

type Filter = {
  value: string;
  label: string;
};

type Props = {
  filters: Filter[];
  projects: Project[];
};

export default function ProjectShowcase({ filters, projects }: Props) {
  const [activeFilter, setActiveFilter] = useState("all");
  const visibleProjects = useMemo(
    () =>
      projects.map((project) => ({
        ...project,
        isVisible: activeFilter === "all" || project.filter === activeFilter,
      })),
    [activeFilter, projects],
  );

  return (
    <>
      <div className="filter-bar" aria-label="Project filters">
        {filters.map((filter) => (
          <button
            key={filter.value}
            className={filter.value === activeFilter ? "filter-button active" : "filter-button"}
            type="button"
            onClick={() => setActiveFilter(filter.value)}
          >
            {filter.label}
          </button>
        ))}
      </div>

      <div className="project-grid" data-project-grid>
        {visibleProjects.map((project) => (
          <SpotlightProjectCard key={project.title} project={project} />
        ))}
      </div>
    </>
  );
}

function SpotlightProjectCard({ project }: { project: Project & { isVisible: boolean } }) {
  const [style, setStyle] = useState<CSSProperties>({
    "--spotlight-x": "50%",
    "--spotlight-y": "50%",
    "--tilt-x": "0deg",
    "--tilt-y": "0deg",
  } as CSSProperties);

  function handlePointerMove(event: React.PointerEvent<HTMLElement>) {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    const px = x / rect.width;
    const py = y / rect.height;

    setStyle({
      "--spotlight-x": `${px * 100}%`,
      "--spotlight-y": `${py * 100}%`,
      "--tilt-x": `${(0.5 - py) * 5}deg`,
      "--tilt-y": `${(px - 0.5) * 6}deg`,
    } as CSSProperties);
  }

  function resetTilt() {
    setStyle({
      "--spotlight-x": "50%",
      "--spotlight-y": "50%",
      "--tilt-x": "0deg",
      "--tilt-y": "0deg",
    } as CSSProperties);
  }

  return (
    <a
      href={`/work/${project.slug}/`}
      className={`project-card spotlight-card ${project.size}${project.isVisible ? "" : " is-hidden"}`}
      data-category={project.filter}
      onPointerMove={handlePointerMove}
      onPointerLeave={resetTilt}
      style={style}
    >
      <div className="project-texture" aria-hidden="true"></div>
      <div className="project-topline">
        <span>{project.category}</span>
        <span>{project.meta}</span>
      </div>
      <h3>{project.title}</h3>
      <p>{project.description}</p>
      <span className="project-link">View Case Study</span>
    </a>
  );
}
