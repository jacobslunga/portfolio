const listenings = [
  {
    artist: "Olivia Dean",
    track: "So Easy",
    image: "/images/artists/so-easy.webp",
  },
  {
    artist: "Leisure",
    track: "One In A Million",
    image: "/images/artists/leisure.webp",
  },
  {
    artist: "Harry Styles",
    track: "Aperture",
    image: "/images/artists/aperture.webp",
  },
];

export const RecentListenings = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-y-10 md:gap-x-12 mt-12 mb-60">
      {listenings.map((item, index) => (
        <div key={index} className="group relative w-48 h-48 mx-auto md:mx-0">
          <div className="absolute inset-0 bg-[#121212] rounded-full shadow-lg transition-all duration-500 ease-in-out group-hover:-translate-y-10 flex items-center justify-center border-[6px] border-neutral-900">
            <div className="absolute inset-2 rounded-full border border-white/5 opacity-20" />

            <div className="w-14 h-14 rounded-full bg-primary/20 border-2 border-primary/40 flex items-center justify-center">
              <div className="w-3 h-3 bg-background rounded-full shadow-inner" />
            </div>
          </div>

          <div className="relative z-10 w-full h-full shadow-xl transition-transform duration-500 ease-in-out group-hover:translate-y-5">
            <img
              src={item.image}
              alt={item.track}
              className="w-full h-full object-cover rounded-xs border border-white/10"
            />
            <div className="absolute inset-0 bg-linear-to-tr from-black/20 via-transparent to-white/5 pointer-events-none" />

            <div className="absolute hidden md:flex flex-col top-full left-0 w-[140%] translate-y-2 transition-all duration-500 ease-in-out pointer-events-none">
              <p className="text-[10px] font-mono uppercase tracking-[0.2em] text-primary">
                Now Playing
              </p>
              <h4 className="text-sm font-bold truncate tracking-tight">
                {item.track}
              </h4>
              <p className="text-xs text-foreground/50 truncate italic">
                {item.artist}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
