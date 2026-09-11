document.addEventListener("DOMContentLoaded", function () {
    // Sembunyikan elemen secara aman sebelum GSAP berjalan
    gsap.set([".hero-header", ".sop-card"], { autoAlpha: 0, y: 50, scale: 0.95 });

    // Timeline GSAP untuk animasi masuk yang memantul ceria (bouncing effect)
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
        stagger: 0.15 // Efek muncul berurutan satu per satu dengan asyik
    }, "-=0.5");
});