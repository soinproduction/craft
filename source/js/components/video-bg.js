import vidbg from '../vendor/vidbg';

let mainVideo  = new vidbg(
  ".bg-video",
  {
    mp4: 'img/video.mp4',
    webm: 'img/video.webm',
    poster: 'img/video-poster.png'
  },
  {
    autoplay: true,
    controls: false,
    loop: false,
    muted: true,
    playsInline: true
  }
);

