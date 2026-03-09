import { useEffect, useRef, useState } from 'react';
import PaletteRoundedIcon from '@mui/icons-material/PaletteRounded';
import { Button } from './ui/button';

const DEFAULT_HUE = 4;
const HUE_STORAGE_KEY = 'theme-hue';
const MIN_HUE = 0;
const MAX_HUE = 345;
const markerCount = 6;

const applyHue = (hue: number) => {
  document.documentElement.style.setProperty('--theme-hue', String(hue));
};

export const HueSlider = () => {
  const getInitialHue = () => {
    const storedHue = Number(localStorage.getItem(HUE_STORAGE_KEY));
    return Number.isFinite(storedHue)
      ? Math.min(MAX_HUE, Math.max(MIN_HUE, storedHue))
      : DEFAULT_HUE;
  };

  const [hue, setHue] = useState(() => {
    const initialHue = getInitialHue();
    applyHue(initialHue);
    return initialHue;
  });
  const [isOpen, setIsOpen] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const closeIfOutside = (target: EventTarget | null) => {
      const wrapper = wrapperRef.current;

      if (!wrapper || wrapper.contains(target as Node)) {
        return;
      }

      setIsOpen(false);
    };

    const handlePointerDown = (event: MouseEvent) => {
      if (!isDragging) {
        closeIfOutside(event.target);
      }
    };

    const handlePointerUp = (event: PointerEvent) => {
      setIsDragging(false);

      const wrapper = wrapperRef.current;

      if (!wrapper) {
        setIsOpen(false);
        return;
      }

      const hovered = wrapper.matches(':hover');
      const focused = wrapper.contains(document.activeElement);

      if (!hovered && !focused && !wrapper.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handlePointerDown);
    document.addEventListener('pointerup', handlePointerUp);
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('mousedown', handlePointerDown);
      document.removeEventListener('pointerup', handlePointerUp);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isDragging]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const nextHue = Number(event.target.value);

    setHue(nextHue);
    applyHue(nextHue);
    localStorage.setItem(HUE_STORAGE_KEY, String(nextHue));
  };

  const showSlider = () => setIsOpen(true);

  const hideSlider = () => {
    if (!isDragging) {
      setIsOpen(false);
    }
  };

  return (
    <div
      ref={wrapperRef}
      className='relative'
      onMouseEnter={showSlider}
      onMouseLeave={hideSlider}
      onFocusCapture={showSlider}
      onBlurCapture={() => {
        requestAnimationFrame(() => {
          const wrapper = wrapperRef.current;

          if (
            wrapper &&
            !wrapper.contains(document.activeElement) &&
            !wrapper.matches(':hover') &&
            !isDragging
          ) {
            setIsOpen(false);
          }
        });
      }}
    >
      <div
        className={[
          'absolute left-1/2 top-full z-20 flex h-44 w-12 -translate-x-1/2 flex-col items-center transition-all duration-300 ease-out',
          isOpen
            ? 'pointer-events-auto translate-y-0 opacity-100'
            : 'pointer-events-none -translate-y-2 opacity-0',
        ].join(' ')}
      >
        <div className='h-3 w-px bg-foreground/10' />
        <div className='relative h-[calc(100%-0.75rem)] w-full rounded-full border border-foreground/10 bg-background/80 shadow-[0_14px_34px_rgba(0,0,0,0.08)] backdrop-blur-xl'>
          <div className='pointer-events-none absolute bottom-4 left-1/2 top-4 w-px -translate-x-1/2 bg-foreground/12' />
          <div className='pointer-events-none absolute bottom-4 left-1/2 top-4 flex -translate-x-1/2 flex-col items-center justify-between'>
            {Array.from({ length: markerCount }).map((_, index) => (
              <span
                key={index}
                className='h-1.5 w-1.5 rounded-full bg-foreground/18'
              />
            ))}
          </div>

          <div className='absolute left-1/2 top-1/2 h-7 w-34 -translate-x-1/2 -translate-y-1/2 -rotate-90'>
            <input
              aria-label='Adjust site tint'
              className='theme-hue-slider h-7 w-34'
              type='range'
              min={MIN_HUE}
              max={MAX_HUE}
              step='1'
              value={hue}
              onChange={handleChange}
              onPointerDown={() => {
                setIsDragging(true);
                setIsOpen(true);
              }}
            />
          </div>
        </div>
      </div>

      <Button
        type='button'
        variant='outline'
        size='sm'
        aria-label='Adjust site tint'
        aria-expanded={isOpen}
        className='p-2 min-w-0 rounded-full border-none hover:bg-primary/10'
      >
        <PaletteRoundedIcon className='text-primary' fontSize='small' />
      </Button>
    </div>
  );
};
