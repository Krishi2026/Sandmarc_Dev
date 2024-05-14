document.addEventListener('DOMContentLoaded', function() {
    const video1 = document.getElementById('video1');
    const video2 = document.getElementById('video2');
    const intro = document.querySelector('.intro');
    const shoton = document.querySelector('.shoton');
    const controller = new ScrollMagic.Controller();

    // Video control setup
    video1.play();
    video1.addEventListener('ended', () => {
        video1.style.display = 'none';
        video2.style.display = 'block';
        video2.currentTime = 0;
        video2.play();
        video2.pause(); // Start paused for scroll control
    });

    // Improved throttle function for smoother updates
    const throttle = (func, limit) => {
        let lastFunc;
        let lastRan;
        return function() {
            const context = this;
            const args = arguments;
            if (!lastRan) {
                func.apply(context, args);
                lastRan = Date.now();
            } else {
                clearTimeout(lastFunc);
                lastFunc = setTimeout(function() {
                    func.apply(context, args);
                    lastRan = Date.now();
                }, Math.max(limit - (Date.now() - lastRan), 0));
            }
        }
    };

    // Scroll control for video2 with throttling
    const updateVideoTime = throttle(function(progress) {
        const targetTime = progress * video2.duration;
        if (Math.abs(video2.currentTime - targetTime) > 0.1) {
            video2.currentTime = targetTime;
        }
    }, 50); // Throttle updates to every 50 ms for smoother updates

    const sceneVideo2 = new ScrollMagic.Scene({
        duration: window.innerHeight * 3, // Adjusted for longer scroll duration
        triggerElement: intro,
        triggerHook: 0
    })
    .setPin(intro)
    .on("progress", e => updateVideoTime(e.progress))
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