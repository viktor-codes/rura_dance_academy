const VIDEO_SRC = "/hero-video.mp4";

export function HeroVideoCard() {
  return (
    <div className="relative w-full overflow-hidden px-2 md:px-16 mt-16 sm:mt-32 2xl:mt-96 ">
      <div className="relative mx-auto max-w-6xl overflow-hidden rounded-4xl bg-sense-light/70 p-0.5">
        <video
          src={VIDEO_SRC}
          autoPlay
          loop
          muted
          playsInline
          aria-hidden
          className="relative w-full aspect-[13/6.5] rounded-4xl object-cover bg-background"
        />
      </div>
      
    </div>
  );
}
