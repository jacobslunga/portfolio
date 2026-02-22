import { Link } from "react-router-dom";
import { Button } from "../components/ui/button";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailRoundedIcon from "@mui/icons-material/EmailRounded";
import DescriptionRoundedIcon from "@mui/icons-material/DescriptionRounded";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import { ThemeToggle } from "../components/ThemeToggle";

const experience = [
  {
    company: "Axis Communications",
    role: "Software Engineer Intern",
    period: "2025",
  },
  {
    company: "Dyno Robotics",
    role: "Frontend Developer",
    period: "2023",
  },
  {
    company: "Skill",
    role: "Programming Coach",
    period: "2023",
  },
];

function HomePage() {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center px-6 py-16">
      <div className="absolute top-4 right-4">
        <ThemeToggle />
      </div>

      <div className="flex flex-col items-center text-center gap-3 mb-10">
        <h1 className="text-6xl sm:text-8xl font-bold tracking-tighter">
          Jacob Slunga
        </h1>
        <p className="text-foreground/50 text-base sm:text-lg max-w-sm">
          Software engineer building clean, functional interfaces.
        </p>
      </div>

      <Link to="/about" viewTransition>
        <Button size="lg" className="mb-12" variant="outline">
          About me
          <ArrowForwardRoundedIcon fontSize="small" />
        </Button>
      </Link>

      <div className="flex items-center gap-4 mb-16">
        <a
          href="https://www.linkedin.com/in/jacob-slunga-9121131a2/"
          target="_blank"
          rel="noreferrer"
          aria-label="LinkedIn"
          className="text-foreground/50 hover:text-foreground transition-colors"
        >
          <LinkedInIcon fontSize="medium" />
        </a>
        <a
          href="https://github.com/jacobslunga"
          target="_blank"
          rel="noreferrer"
          aria-label="GitHub"
          className="text-foreground/50 hover:text-foreground transition-colors"
        >
          <GitHubIcon fontSize="medium" />
        </a>
        <a
          href="mailto:jacobslunga21@yahoo.se"
          target="_blank"
          rel="noreferrer"
          aria-label="Email"
          className="text-foreground/50 hover:text-foreground transition-colors"
        >
          <EmailRoundedIcon fontSize="medium" />
        </a>
        <div className="w-px h-5 bg-foreground/20" />
        <a
          href="/documents/Jacob_Slunga_CV.pdf"
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-1.5 text-sm text-foreground/50 hover:text-foreground transition-colors"
        >
          <DescriptionRoundedIcon fontSize="small" />
          Resume
        </a>
      </div>

      <div className="flex flex-col gap-0 w-full max-w-xs">
        {experience.map((job, i) => (
          <div key={i} className="flex items-start gap-4">
            <div className="flex flex-col items-center">
              <div className="w-2 h-2 rounded-full bg-foreground/30 mt-1.5 shrink-0" />
              {i < experience.length - 1 && (
                <div className="w-px flex-1 bg-foreground/10 my-1 min-h-7" />
              )}
            </div>
            <div className="pb-5">
              <p className="text-sm font-medium leading-tight">{job.company}</p>
              <p className="text-xs text-foreground/40">
                {job.role} · {job.period}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HomePage;
