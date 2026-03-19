import { FaSpotify } from "react-icons/fa";
import { Link } from "react-router-dom";

const listenings = [
  {
    artist: "Olivia Dean",
    track: "So Easy",
    image: "/images/artists/so-easy.webp",
    spotifyLink: "https://open.spotify.com/track/6sGIMrtIzQjdzNndVxe397",
  },
  {
    artist: "Leisure",
    track: "One In A Million",
    image: "/images/artists/one-in-a-million.webp",
    spotifyLink: "https://open.spotify.com/track/3KduRAJlBZlOU8tsc9JdNC",
  },
  {
    artist: "Harry Styles",
    track: "Aperture",
    image: "/images/artists/aperture.webp",
    spotifyLink: "https://open.spotify.com/track/45Z3m6yazmAi4jZuW0tzW0",
  },
];

export const RecentListenings = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 items-start gap-y-10 md:gap-x-12 mt-12 mb-12 px-4 md:px-0">
      {listenings.map((item, index) => (
        <div
          key={index}
          className="flex flex-col items-start gap-2 w-full md:w-auto md:mx-0"
        >
          <div className="w-full md:w-48 h-auto md:h-48">
            <img
              src={item.image}
              alt={item.track}
              className="w-full h-full object-cover rounded-xs border border-white/10"
            />
          </div>

          {item.spotifyLink && (
            <Link
              to={item.spotifyLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center no-underline gap-2 px-4 py-2 bg-[#1DD660] rounded-full text-black! font-semibold text-xs hover:scale-105 transition-transform"
            >
              <FaSpotify size={16} />
              Listen on Spotify
            </Link>
          )}

          <div className="flex flex-col w-full md:w-48 text-left items-start justify-start gap-2">
            <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-primary">
              Now Playing
            </span>
            <span className="text-sm font-bold truncate tracking-tight">
              {item.track}
            </span>
            <span className="text-xs text-foreground/50 truncate italic">
              {item.artist}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};
