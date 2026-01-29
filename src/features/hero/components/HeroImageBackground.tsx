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
        className="object-cover object-center"
        sizes="100vw"
      />
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-t from-sense-dark to-sense-dark/60"
      />
    </div>
  );
}
