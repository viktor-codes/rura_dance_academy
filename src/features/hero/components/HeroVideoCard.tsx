const VIDEO_SRC = "/hero-video.mp4";

export function HeroVideoCard() {
  return (
    <div className="relative w-2/3 mx-auto overflow-hidden px-2 sm:mt-12 md:mt-16">
      <div className="relative mx-auto my-16 max-w-6xl overflow-hidden rounded-2xl bg-sense-light p-1 shadow-lg shadow-sense-dark/15 ring-1 ring-sense-dark/10">
        <video
          src={VIDEO_SRC}
          autoPlay
          loop
          muted
          playsInline
          aria-hidden
          className="relative w-full aspect-[15/8] rounded-2xl object-cover bg-background"
        />
      </div>
    </div>
  );
}
