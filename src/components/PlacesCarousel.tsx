import React, { useEffect, useRef, useState } from "react";

const places = [
  {
    name: "Düsseldorf",
    country: "Germany",
    image: "/images/places/dusseldorf.webp",
  },
  {
    name: "Chennai",
    country: "India",
    image: "/images/places/chennai.webp",
  },
  {
    name: "Johannesburg",
    country: "South Africa",
    image: "/images/places/joburg.webp",
  },
];

const RADIUS = 200;
const AUTO_SPEED = 0.3;

export const PlacesCarousel = () => {
  const [rotY, setRotY] = useState(0);
  const isDragging = useRef(false);
  const lastX = useRef(0);
  const rotRef = useRef(0);
  const animRef = useRef<number>(0);

  useEffect(() => {
    const tick = () => {
      if (!isDragging.current) {
        rotRef.current += AUTO_SPEED;
      }
      setRotY(rotRef.current);
      animRef.current = requestAnimationFrame(tick);
    };
    animRef.current = requestAnimationFrame(tick);
    return () => {
      if (animRef.current) cancelAnimationFrame(animRef.current);
    };
  }, []);

  const onMouseDown = (e: React.MouseEvent) => {
    isDragging.current = true;
    lastX.current = e.clientX;
  };

  const onMouseMove = (e: React.MouseEvent) => {
    if (!isDragging.current) return;
    const dx = e.clientX - lastX.current;
    rotRef.current += dx * 0.2;
    lastX.current = e.clientX;
  };

  const onMouseUp = () => {
    isDragging.current = false;
  };

  const onTouchStart = (e: React.TouchEvent) => {
    isDragging.current = true;
    lastX.current = e.touches[0].clientX;
  };

  const onTouchMove = (e: React.TouchEvent) => {
    if (!isDragging.current) return;
    const dx = e.touches[0].clientX - lastX.current;
    rotRef.current += dx * 0.5;
    lastX.current = e.touches[0].clientX;
  };

  return (
    <div
      className="relative flex items-center justify-center select-none cursor-grab active:cursor-grabbing py-10"
      style={{ height: 480, perspective: 900, overflowX: "clip" }}
      onMouseDown={onMouseDown}
      onMouseMove={onMouseMove}
      onMouseUp={onMouseUp}
      onMouseLeave={onMouseUp}
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onMouseUp}
    >
      <div
        style={{
          position: "relative",
          width: 0,
          height: 0,
          transformStyle: "preserve-3d",
          transform: `rotateY(${rotY}deg)`,
        }}
      >
        {places.map((place, i) => {
          const angle = (360 / places.length) * i;
          return (
            <div
              key={i}
              className="absolute"
              style={{
                transform: `rotateY(${angle}deg) translateZ(${RADIUS}px)`,
                transformStyle: "preserve-3d",
                width: 220,
                marginLeft: -110,
                marginTop: -130,
              }}
            >
              <img
                src={place.image}
                alt={place.name}
                className="w-full h-44 object-cover rounded-xl border border-white/10"
                draggable={false}
              />
              <div className="mt-2 text-center">
                <p className="text-sm font-semibold text-foreground!">
                  {place.name}
                </p>
                <p className="text-xs text-foreground/50 italic">
                  {place.country}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
