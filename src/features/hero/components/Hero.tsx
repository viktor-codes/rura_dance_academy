import type { HeroProps } from "../types";
import { AnimatedGroup } from "./AnimatedGroup";
import { HeroImageBackground } from "./HeroImageBackground";
import { TextEffect } from "./TextEffect";

export function Hero({ title, description, imageSrc, ctaText }: HeroProps) {
  return (
    <section className="relative min-h-screen overflow-hidden">
      <HeroImageBackground imageSrc={imageSrc} />
      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-6 py-20">
        <div className="mx-auto w-full max-w-[1200px] flex flex-col items-center gap-8 text-center">
          <h1 className="font-angst font-bold text-sense-light text-[40px] leading-tight md:text-[64px]">
            <TextEffect>{title}</TextEffect>
          </h1>
          <AnimatedGroup>
            <p className="font-sans text-sense-light text-lg max-w-2xl">
              {description}
            </p>
            <a
              href="#trial"
              className="inline-block rounded-full bg-sense-rose px-8 py-4 font-sans text-sense-dark uppercase tracking-wide transition-transform focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sense-rose hover:scale-105"
            >
              {ctaText}
            </a>
          </AnimatedGroup>
        </div>
      </div>
    </section>
  );
}
