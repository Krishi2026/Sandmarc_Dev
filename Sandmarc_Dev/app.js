document.addEventListener('DOMContentLoaded', function() {
    const video1 = document.getElementById('video1');
    const video2 = document.getElementById('video2');
    const intro = document.querySelector('.intro');
    const shoton = document.querySelector('.shoton');
    const controller = new ScrollMagic.Controller();
    let lastScrollPos = 0;
    let scrollVelocity = 0;

    // Video control setup
    video1.play();
    video1.addEventListener('ended', () => {
        video1.style.display = 'none';
        video2.style.display = 'block';
        video2.currentTime = 0;
        video2.play();
        video2.pause(); // Start paused for scroll control
    });

    const updateVideoTime = (progress) => {
        const targetTime = progress * video2.duration;
        if (Math.abs(video2.currentTime - targetTime) > 0.05) { // Adjust threshold for smoother playback
            video2.currentTime = targetTime;
        }
    };

    const scrollHandler = () => {
        const currentScrollPos = controller.scrollPos();
        const delta = currentScrollPos - lastScrollPos;
        lastScrollPos = currentScrollPos;
        scrollVelocity = 0.00000001 * delta + 0.001 * scrollVelocity; // Adjusted decay factor for longer deceleration
        const progress = (currentScrollPos + scrollVelocity) / (window.innerHeight * 10); // Adjusted duration
        updateVideoTime(progress);
        requestAnimationFrame(scrollHandler); // Use requestAnimationFrame for smoother animation
    };

    window.addEventListener('scroll', scrollHandler);

    const sceneVideo2 = new ScrollMagic.Scene({
        duration: window.innerHeight * 10, // Adjusted for longer scroll duration
        triggerElement: intro,
        triggerHook: 0
    })
    .setPin(intro)
    .addTo(controller);

    // Scale animation for the shoton section without visual indicators
    const sceneShoton = new ScrollMagic.Scene({
        triggerElement: shoton,
        triggerHook: 0,
        duration: 3000
    })
    .setPin(shoton)
    .setTween(TweenMax.fromTo(shoton, 3, { scale: 4 }, { scale: 0.94 }))
    //.addIndicators({name: "Scale Animation"}) // Remove indicators for production use
    .addTo(controller);
});