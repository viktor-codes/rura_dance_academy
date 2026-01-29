import Image from "next/image";

type HeroImageBackgroundProps = {
  imageSrc: string;
};

export function HeroImageBackground({ imageSrc }: HeroImageBackgroundProps) {
  return (
    <div className="absolute inset-0" aria-hidden>
      <Image
        src={imageSrc}
        alt=""
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />
      <div
        className="pointer-events-none absolute inset-0 [background:radial-gradient(ellipse_80%_80%_at_50%_50%,color-mix(in_srgb,var(--color-sense-dark)_85%,transparent),color-mix(in_srgb,var(--color-sense-dark)_98%,transparent))]"
      />
    </div>
  );
}
