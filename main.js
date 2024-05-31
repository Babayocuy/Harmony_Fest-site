var multipleCardCarousel = document.querySelector("#carouselExampleControls");
$(multipleCardCarousel).addClass("slide");

var carouselWidth = $(".carousel-inner")[0].scrollWidth;
var cardWidth = $(".carousel-item").width();
var scrollPosition = 0;

$("#carouselExampleControls .carousel-control-next").on("click", function () {
  if (scrollPosition < carouselWidth - cardWidth * 3) {
    scrollPosition += cardWidth;
    $("#carouselExampleControls .carousel-inner").animate(
      { scrollLeft: scrollPosition },
      600
    );
  }
});

$("#carouselExampleControls .carousel-control-prev").on("click", function () {
  if (scrollPosition > 0) {
    scrollPosition -= cardWidth;
    $("#carouselExampleControls .carousel-inner").animate(
      { scrollLeft: scrollPosition },
      600
    );
  }
});
