import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";
import { Button } from "../components/ui/button";
import { Link } from "react-router-dom";
import { ThemeToggle } from "../components/ThemeToggle";
import { ProjectAccordion } from "../components/ProjectAccordion";
import { RecentListenings } from "../components/RecentListening";
import { PlacesCarousel } from "../components/PlacesCarousel";

const AboutHeader = () => {
  return (
    <div className="fixed bg-background/80 backdrop-blur-md top-0 h-16 w-full flex flex-row items-center justify-between px-4 md:px-8 lg:px-10 z-50">
      <Link to="/" viewTransition>
        <Button size="sm" variant="outline">
          <ArrowBackRoundedIcon fontSize="small" />
          Back to home
        </Button>
      </Link>

      <div className="flex items-center">
        <h2 className="text-md font-medium text-foreground/60">About me</h2>
        <ThemeToggle />
      </div>
    </div>
  );
};

function AboutPage() {
  return (
    <div className="flex flex-col items-center w-full min-h-screen pb-20">
      <AboutHeader />

      <main className="w-full max-w-3xl px-6 mt-24">
        <section className="mb-12 flex flex-col items-center justify-center">
          <img
            src="/images/me/Hay.webp"
            alt="Jacob Slunga at Hay in Copenhagen"
            className="max-w-[95%] sm:max-w-100 self-center object-cover rounded-xl transition-transform duration-500 group-hover:scale-105"
          />
          <p className="mt-3 text-sm text-foreground/50 italic text-center">
            Me at Hay in Copenhagen.
          </p>
        </section>

        <article className="prose prose-neutral lg:prose-lg dark:prose-invert max-w-none">
          <h1>Hi, I'm Jacob.</h1>
          <p>
            I'm a developer focused on building clean, functional interfaces.
            Currently, I'm working on designing a typography called{" "}
            <strong>Slib Sans</strong>
          </p>

          <p>
            Besides programming and designing, I really enjoy reading math
            research papers and dancing. And I absolutely loooove music!
          </p>

          <h2>My Design Philosophy</h2>
          <p>
            I think the best products we use everyday have one thing in common:{" "}
            <strong>they are custom designs</strong>. What I mean by this is
            that we can identify the brand with it's colors, fonts, layouts etc.
            With the rise of vibe-coding, this feels more important now than
            ever.
          </p>

          <h2>Some of the projects I've done</h2>
          <ProjectAccordion />

          <h2>Cool Places I've Lived In</h2>
          <PlacesCarousel />

          <h2>Recent Listenings</h2>
          <RecentListenings />

          <h3 className="font-serif italic border-b border-primary/20 pb-2">
            The Particulars
          </h3>
          <ul className="list-none pl-0">
            <li>📍 Based in Linköping, Sweden</li>
            <li>🎯 Quite good at Dart</li>
            <li>
              📚 Currently studying my 4th year of CS at{" "}
              <Link
                to="https://liu.se/"
                target="_blank"
                className="text-[#36968a]"
              >
                LiU
              </Link>
            </li>
          </ul>
        </article>
      </main>
    </div>
  );
}

export default AboutPage;
