import vidbg from '../vendor/vidbg';
const videoBlock = document.querySelector('.bg-video');

if (videoBlock) {
  document.addEventListener("DOMContentLoaded", function(){
    let mainVideo  = new vidbg(
      '.bg-video',
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
  });
}


