/**
 * Full-viewport grain overlay using SVG feTurbulence.
 * Fixed, non-interactive, subtle noise for texture.
 */
export function GrainOverlay() {
  return (
    <div
      className="pointer-events-none fixed inset-0 z-[9999] opacity-[0.07] mix-blend-multiply" 
      aria-hidden
    >
      <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
        <filter id="grain">
          
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.8" 
            numOctaves="3"
            stitchTiles="stitch"
          />
          
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1.5 0" />
        </filter>
        <rect width="100%" height="100%" filter="url(#grain)" />
      </svg>
    </div>
  );
}
