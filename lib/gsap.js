import gsap from "gsap";

export const animateOnLoad = () => {
  var tl = gsap.timeline();
  tl.from(".layer-3, .layer-4", {
    y: 200,
    opacity: 0,
    stagger: -0.25,
    duration: 0.5,
  });
  tl.from(".layer-2, .layer-1", {
    y: -200,
    opacity: 0,
    stagger: 0.25,
    duration: 0.5,
  });
  tl.from(
    ".next-img",
    {
      x: 1000,
      opcity: 0,
      duration: 0.5,
    },
    "1"
  );
  tl.from(".calories", {
    y: 100,
    opacity: 0,
    stagger: 0.2,
  });
  var tl2 = gsap.timeline();
  tl2.from(".badge, h1 span", {
    y: 100,
    opacity: 0,
    stagger: 0.1,
  });
  tl2.from(".ingredients .icons > *", {
    x: -100,
    opacity: 0,
    stagger: 0.1,
  });
};
