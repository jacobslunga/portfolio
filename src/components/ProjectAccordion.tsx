import { useState } from "react";
import ArrowOutwardRoundedIcon from "@mui/icons-material/ArrowOutwardRounded";
import GitHubIcon from "@mui/icons-material/GitHub";
import { cn } from "../lib/utils";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";

type Project = {
  id: number;
  title: string;
  description: string;
  logoLink: string;
  link?: string;
  githubLink?: string;
  reportLink?: string;
  year: string;
};

const projects: Project[] = [
  {
    id: 0,
    title: "Mejra",
    year: "2025",
    description:
      "Bachelor's thesis project at Linkoping University. We developed a visual requirements management tool as a web application to help companies handle complex requirement dependencies interactively.",
    reportLink:
      "https://liu.diva-portal.org/smash/get/diva2:1972576/FULLTEXT01.pdf",
    logoLink: "/images/projects/Mejra.webp",
  },
  {
    id: 1,
    title: "LiU Tentor",
    year: "2024 - Today",
    description:
      "A specialized search engine designed to help students at Linkoping University find and archive past examination papers with ease.",
    link: "https://liutentor.se",
    githubLink: "https://github.com/jacobslunga/liu-tentor-radix",
    logoLink: "/images/projects/liutentor.webp",
  },
];

export function ProjectAccordion() {
  const [expandedId, setExpandedId] = useState<number | null>(0);

  const handleToggle = (id: number) => {
    setExpandedId((prevId) => (prevId === id ? null : id));
  };

  return (
    <section className="w-full max-w-5xl px-6">
      <div className="flex flex-col gap-2">
        {projects.map((project) => (
          <div
            key={project.id}
            onClick={() => handleToggle(project.id)}
            onMouseEnter={() => setExpandedId(project.id)}
            className={cn(
              "group relative overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)]",
              "border-b border-black/5 dark:border-white/5",
              expandedId === project.id ? "pb-12 pt-8" : "py-6",
            )}
          >
            <div className="flex items-center justify-between cursor-pointer">
              <div className="flex items-baseline gap-6">
                <span className="text-xs font-mono text-neutral-400 uppercase tracking-widest">
                  {project.year}
                </span>
                <h3 className="text-2xl md:text-4xl font-medium">
                  {project.title}
                </h3>
              </div>

              <div
                className={cn(
                  "transition-transform duration-500",
                  expandedId === project.id
                    ? "rotate-45 text-primary"
                    : "rotate-0",
                )}
              >
                <ArrowOutwardRoundedIcon />
              </div>
            </div>

            <div
              className={cn(
                "grid transition-all duration-500 ease-in-out",
                expandedId === project.id
                  ? "grid-rows-[1fr] opacity-100 mt-8"
                  : "grid-rows-[0fr] opacity-0",
              )}
            >
              <div className="overflow-hidden">
                <div className="flex flex-col md:flex-row gap-12 items-center md:items-start">
                  <div className="shrink-0">
                    <img
                      src={project.logoLink}
                      alt={project.title}
                      className="w-32 h-32 md:w-40 md:h-40 rounded-full object-contain transition-all duration-700"
                    />
                  </div>

                  <div className="flex-1 max-w-xl text-center md:text-left">
                    <p className="text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed mb-6">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap justify-center md:justify-start gap-6">
                      {project.link && (
                        <Link to={project.link} target="_blank">
                          <Button size="sm" variant="link">
                            Live Site
                            <ArrowOutwardRoundedIcon fontSize="small" />
                          </Button>
                        </Link>
                      )}
                      {project.reportLink && (
                        <Link to={project.reportLink} target="_blank">
                          <Button size="sm" variant="link">
                            Read Report (PDF)
                          </Button>
                        </Link>
                      )}
                      {project.githubLink && (
                        <Link to={project.githubLink} target="_blank">
                          <Button size="sm" variant="link">
                            Source Code
                            <GitHubIcon fontSize="small" />
                          </Button>
                        </Link>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
