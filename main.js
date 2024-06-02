var splide = new Splide(".splide", {
  type: "loop",
  perPage: 3,
  gap: "2.2rem",
  breakpoints: {
    640: {
      perPage: 2,
      gap: ".7rem",
    },
    480: {
      perPage: 1,
      gap: "1.4rem",
    },
  },
});

splide.mount();
