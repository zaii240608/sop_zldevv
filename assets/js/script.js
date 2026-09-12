document.addEventListener("DOMContentLoaded", function () {
    gsap.set([".hero-header", ".sop-card"], { autoAlpha: 0, y: 50, scale: 0.95 });

    const tl = gsap.timeline({ defaults: { ease: "back.out(1.4)" } });

    tl.to(".hero-header", {
        duration: 1,
        autoAlpha: 1,
        y: 0,
        scale: 1
    })
    .to(".sop-card", {
        duration: 0.8,
        autoAlpha: 1,
        y: 0,
        scale: 1,
        stagger: 0.15
    }, "-=0.5");

    const part1 = "zl";
    const part2 = "thf";
    const part3 = "ii";
    
    const realUsername = part1 + part2 + part3;
    
    const igButton = document.getElementById("ig-link");
    if (igButton) {
        igButton.href = `https://instagram.com/${realUsername}`;
    }
});