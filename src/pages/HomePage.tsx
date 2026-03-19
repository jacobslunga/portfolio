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
    company: "WeKnowIT",
    role: "Full Stack Engineer",
    period: "2026 - present",
  },
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
    <div className="relative min-h-screen flex flex-col justify-between px-5 sm:px-12 lg:px-24 py-6 sm:py-8">
      <header className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <a
            href="https://www.linkedin.com/in/jacob-slunga-9121131a2/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="text-foreground/40 hover:text-foreground transition-colors"
          >
            <LinkedInIcon fontSize="small" />
          </a>
          <a
            href="https://github.com/jacobslunga"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="text-foreground/40 hover:text-foreground transition-colors"
          >
            <GitHubIcon fontSize="small" />
          </a>
          <a
            href="mailto:jacobslunga21@yahoo.se"
            target="_blank"
            rel="noreferrer"
            aria-label="Email"
            className="text-foreground/40 hover:text-foreground transition-colors"
          >
            <EmailRoundedIcon fontSize="small" />
          </a>
        </div>
        <div className="flex items-start gap-2">
          <ThemeToggle />
        </div>
      </header>

      <main className="flex-1 flex flex-col justify-center max-w-5xl w-full mx-auto py-8 sm:py-0">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-10 sm:gap-12 md:gap-20 items-end">
          <div className="flex flex-col gap-4 sm:gap-6">
            <p className="text-[10px] sm:text-xs tracking-widest uppercase text-foreground/40 font-mono">
              Software Engineer
            </p>
            <h1 className="text-5xl sm:text-7xl md:text-8xl font-medium! leading-[0.9] tracking-tight text-foreground">
              Jacob Slunga
            </h1>
            <p className="text-foreground-muted text-sm sm:text-base md:text-lg max-w-md leading-relaxed">
              Building clean, functional interfaces;
            </p>
            <div className="flex items-center gap-3 sm:gap-4 mt-1 sm:mt-2">
              <Link to="/about" viewTransition>
                {/* Mobile */}
                <Button
                  size="sm"
                  variant="secondary"
                  className="flex md:hidden"
                >
                  About me
                  <ArrowForwardRoundedIcon fontSize="small" />
                </Button>

                {/* Medium */}
                <Button
                  size="md"
                  variant="secondary"
                  className="hidden md:flex lg:hidden"
                >
                  About me
                  <ArrowForwardRoundedIcon fontSize="small" />
                </Button>

                {/* Desktop */}
                <Button
                  size="lg"
                  variant="secondary"
                  className="hidden lg:flex"
                >
                  About me
                  <ArrowForwardRoundedIcon fontSize="small" />
                </Button>
              </Link>
              <a
                href="/documents/Jacob_Slunga_CV.pdf"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 text-sm text-foreground/40 hover:text-foreground transition-colors"
              >
                <DescriptionRoundedIcon fontSize="small" />
                Resume
              </a>
            </div>
          </div>

          {/* Right column — experience */}
          <div className="flex flex-col gap-0 w-full max-w-xs md:pb-2">
            <p className="text-[10px] sm:text-xs tracking-widest uppercase text-foreground/40 font-mono mb-3 sm:mb-4">
              Experience
            </p>
            {experience.map((job, i) => (
              <div key={i} className="flex items-start gap-4">
                <div className="flex flex-col items-center">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 sm:mt-2 shrink-0" />
                  {i < experience.length - 1 && (
                    <div className="w-px flex-1 bg-foreground/10 my-1 min-h-7" />
                  )}
                </div>
                <div className="pb-5">
                  <p className="text-sm font-medium leading-tight">
                    {job.company}
                  </p>
                  <p className="text-xs text-foreground/40">
                    {job.role} · {job.period}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="pt-6 sm:pt-8 text-[10px] sm:text-xs text-foreground/30">
        © {new Date().getFullYear()} Jacob Slunga
      </footer>
    </div>
  );
}

export default HomePage;
