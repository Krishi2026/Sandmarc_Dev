/*  const video = document.querySelector('video');
    const intro = document.querySelector('.intro');
  
    //const section = document.querySelector('section');
    //scroll magic
    const controller = new ScrollMagic.Controller();
        const scene = new ScrollMagic.Scene({
        duration: 13000,  // Duration of the scroll effect
        triggerElement: intro,
        triggerHook: 0
    })
    .setPin(intro)
    .addTo(controller)
 //video animation
 let accelamount = 50;
 let scrollpos = 0;
 let delay = 0;
 scene.on("update", e => {
    scrollpos = e.scrollPos/1000;
 });
setInterval(() => {
    delay += (scrollpos - delay) * accelamount;
    //console.log(scrollPos, delay);
    video.currentTime = scrollpos;
},33.3)
*/

//chat code

document.addEventListener('DOMContentLoaded', function() {
    const video = document.querySelector('video'); // Define video element
    const intro = document.querySelector('.intro'); // Define intro section
    const shoton = document.querySelector('.shoton'); // Define shoton section

    const controller = new ScrollMagic.Controller();

    // Create ScrollMagic scene to pin the intro section
    const scene = new ScrollMagic.Scene({
        duration: 13000,  // Duration of the scroll effect
        triggerElement: intro,
        triggerHook: 0
    })
    .setPin(intro)
    //.addIndicators()
    .addTo(controller);



 //video animation
 let accelamount = 50;
 let scrollpos = 0;
 let delay = 0;
 scene.on("update", e => {
    scrollpos = e.scrollPos/1000;

 });
setInterval(() => {
    delay += (scrollpos - delay) * accelamount;
    //console.log(scrollPos, delay);
    video.currentTime = scrollpos;
},33.3)






//scale animation

const scenezoom = new ScrollMagic.Scene({
    triggerElement: shoton,
    triggerHook: 0,
    duration: 3000
})
.setPin(shoton)
.setTween(TweenMax.fromTo(shoton, 3, { scale: 4 }, { scale: .94 }))
.addTo(controller);

/*let scaleamount = 50;
let newscrollpos = 0;
let newdelay = 0;
scenezoom.on("update", e => {
   newscrollpos = e.scrollPos/800;
});
setInterval(() => {
    newdelay += (newscrollpos - newdelay) * scaleamount;
    // Scale the video based on scroll position
    const scale = 1/ (newscrollpos * 0.01); // Adjust the scale factor as needed
    shoton.style.transform = `scale(${scale})`;
}, 33.3);*/

});