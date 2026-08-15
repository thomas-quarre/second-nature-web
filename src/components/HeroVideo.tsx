"use client";

import { useEffect, useRef, useState } from "react";

export function HeroVideo({
  src,
  poster,
  className = "",
  playbackRate = 1,
}: {
  src: string;
  poster?: string;
  className?: string;
  playbackRate?: number;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    video.playbackRate = playbackRate;
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const apply = () => {
      if (motion.matches) {
        video.pause();
        setPaused(true);
      }
    };
    apply();
    motion.addEventListener("change", apply);
    return () => motion.removeEventListener("change", apply);
  }, [playbackRate, src]);

  function togglePlayback() {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) {
      video.playbackRate = playbackRate;
      void video.play();
      setPaused(false);
    } else {
      video.pause();
      setPaused(true);
    }
  }

  return (
    <button
      type="button"
      onClick={togglePlayback}
      className="absolute inset-0 cursor-pointer overflow-hidden"
      aria-label={paused ? "Play background video" : "Pause background video"}
    >
      <video
        ref={videoRef}
        className={className}
        autoPlay
        muted
        loop
        playsInline
        poster={poster}
        aria-hidden
      >
        <source src={src} type="video/mp4" />
      </video>
    </button>
  );
}
