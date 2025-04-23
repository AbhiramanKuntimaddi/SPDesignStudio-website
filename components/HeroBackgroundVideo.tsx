"use client";

const HeroBackgroundVideo = ({ src }: { src: string }) => {
  return (
    <div className="absolute inset-0 w-full h-full">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src={src} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-zinc-800 bg-opacity-80"></div>
    </div>
  );
};

export default HeroBackgroundVideo;