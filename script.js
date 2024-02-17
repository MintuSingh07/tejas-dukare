// ON-SCROLL TEXT OPACITY EFFECT
gsap.registerPlugin(ScrollTrigger);

const splitTypes = document.querySelectorAll(".story-text");

splitTypes.forEach((char, i) => {
  const text = new SplitType(char, {
    types: 'chars'
  });

  gsap.from(text.chars, {
    opacity: 0.2,
    stagger: 0.1,
    scrollTrigger: {
      trigger: char,
      start: 'top 80%',
      end: 'top 20%',
      scrub: true,
      markers: false,
    }
  });
});

const lenis = new Lenis();
lenis.on('scroll', (e) => {
  console.log(e);
});
function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}
requestAnimationFrame(raf);

gsap.from("#line", {
  width: 0,
  delay: 1
});
gsap.to("#hero-arrow", {
  rotate: 60,
  stagger: 0.1,
  scrollTrigger: {
    trigger: "#hero-arrow",
    start: 'top 75%',
    end: 'top 45%',
    scrub: true,
    markers: false,
  }
});
gsap.from(".frames", {
  borderRadius: 1000,
  duration: 1,
  stagger: 0.1
});
document.addEventListener("DOMContentLoaded", function () {
  const images = document.querySelectorAll("#services .imgages");
  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        gsap.to(entry.target, {
          duration: 2, // adjust the duration as needed
          y: 10, // adjust the vertical movement distance
          ease: "power1.inOut", // easing function for smooth acceleration and deceleration
          yoyo: true, // yoyo makes the animation play in reverse after completing
          repeat: -1 // repeat indefinitely
        });
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 }); // Change the threshold as needed

  images.forEach(image => {
    observer.observe(image);
  });
});

document.querySelector('#contact-form').addEventListener('submit', (e) => {
  e.preventDefault();
  e.target.elements.name.value = '';
  e.target.elements.email.value = '';
  e.target.elements.message.value = '';
});


// Form Subit
// const button = document.getElementById("button");
// button.addEventListener('click', ()=> {
//   document.getElementById("name").value = "";
//   document.getElementById("email").value = "";
//   document.getElementById("message").value = "";
//   document.getElementById("phone").value = "";
// })