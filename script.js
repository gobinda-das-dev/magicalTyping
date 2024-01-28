let h5 = document.querySelector("h5");

document.addEventListener('keydown', function (event) {
    let x = Math.floor(Math.random() * 100);
    let y = Math.floor(Math.random() * 100);

    let xPositionIn = Math.floor((Math.random() * 80) - 20)
    let yPositionIn = Math.floor((Math.random() * 80) - 20)
    let xPositionOut = Math.floor((Math.random() * 80) - 20)
    let yPositionOut = Math.floor((Math.random() * 80) - 20)

    if (
        (event.key.length === 1 && event.key.match(/[a-zA-Z]/)) ||
        (event.key.length === 1 && event.key.match(/[0-9]/))
    ) {
        var span = document.createElement('span');
        span.textContent = event.key;

        span.style.top = x + '%';
        span.style.left = y + '%';

        // Create a new timeline for each span
        let tl = gsap.timeline();
        tl
            .from(span, {
                x: xPositionIn,
                y: yPositionIn,
                rotate: xPositionIn + yPositionIn,
                opacity: 0,
            })
            .to(span, {
                x: xPositionOut,
                y: yPositionOut,
                rotate: xPositionIn + xPositionOut,
                opacity: 0,
                delay: .5,
            });

        document.body.appendChild(span);
        h5.remove();
    }
});

// setTimeout(() => {
//     let h5 = document.querySelector("h5");
//     gsap.timeline()
//         .to("h5", {
//             top: "100%",
//             onComplete: () => {
//                 h5.remove();
//             }
//         })
// }, 2000);

Shery.mouseFollower();
Shery.makeMagnet("svg text");
gsap.set(".mousefollower", {
    height: 0,
    width: 0,
})
