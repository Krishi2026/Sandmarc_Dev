// Create a video element for the flash video
const flashVideo = document.createElement('video');
flashVideo.src = 'flash-video.mp4'; // Set the video source
flashVideo.autoplay = true;
flashVideo.muted = true;
flashVideo.style.position = 'fixed'; // Position the video fixed to cover the entire viewport
flashVideo.style.top = '0';
flashVideo.style.left = '0';
flashVideo.style.width = '100vw';
flashVideo.style.height = '100vh';
flashVideo.style.objectFit = 'cover'; // Cover the entire area of the viewport

// Append the flash video to the body
document.body.appendChild(flashVideo);

// Remove the flash video after 2 seconds
setTimeout(function() {
    flashVideo.parentNode.removeChild(flashVideo);
}, 2000);