import { useEffect, useRef } from 'react';

export function VideoBackground() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.75;
    }
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 via-black/50 to-black z-10" />
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        className="absolute w-full h-full object-cover scale-110"
      >
        <source
          src="https://cdn.pixabay.com/vimeo/328035527/space-24363.mp4?width=1280&hash=e94dd801e89c3068c10a89a982e00f3b5a61d4c8"
          type="video/mp4"
        />
      </video>
    </div>
  );
}