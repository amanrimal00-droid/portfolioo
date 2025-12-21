console.log("script.js loaded");

/* =========================
   GSAP SETUP
========================= */
gsap.registerPlugin(ScrollTrigger);

/* =========================
   SCROLL ANIMATIONS
========================= */
gsap.utils
  .toArray(".section, .hero-card, .project-card, .skill-card")
  .forEach(el => {
    gsap.from(el, {
      scrollTrigger: {
        trigger: el,
        start: "top 85%"
      },
      opacity: 0,
      y: 40,
      duration: 1,
      ease: "power3.out"
    });
  });

/* =========================
   COUNTERS
========================= */
document.querySelectorAll(".stat h3").forEach(counter => {
  const target = parseInt(counter.dataset.count || counter.textContent);
  let count = 0;

  ScrollTrigger.create({
    trigger: counter,
    start: "top 90%",
    once: true,
    onEnter: () => {
      const update = () => {
        if (count < target) {
          count++;
          counter.textContent = count + "+";
          requestAnimationFrame(update);
        }
      };
      update();
    }
  });
});
