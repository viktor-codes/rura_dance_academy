type HeroVideoBackgroundProps = {
  videoSrc: string;
};

export function HeroVideoBackground({ videoSrc }: HeroVideoBackgroundProps) {
  return (
    <>
      <video
        autoPlay
        muted
        loop
        playsInline
        aria-hidden
        className="absolute inset-0 h-full w-full object-cover"
        src={videoSrc}
      />
      <div
        className="pointer-events-none absolute inset-0 [background:radial-gradient(ellipse_80%_80%_at_50%_50%,color-mix(in_srgb,var(--color-sense-dark)_85%,transparent),color-mix(in_srgb,var(--color-sense-dark)_98%,transparent))]"
        aria-hidden
      />
    </>
  );
}
