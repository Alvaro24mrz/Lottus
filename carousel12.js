$(document).ready(function() {
  $("#myCarousel").on("slide.bs.carousel", function(e) {
    var $e = $(e.relatedTarget);
    var idx = $e.index();
    var itemsPerSlide = 3;
    var totalItems = $("#myCarousel .carousel-item").length;

    if (idx >= totalItems - (itemsPerSlide - 1)) {
      var it = itemsPerSlide - (totalItems - idx);
      for (var i = 0; i < it; i++) {
        // añade cards al final
        if (e.direction == "left") {
          $("#myCarousel .carousel-item")
              .eq(i)
              .appendTo("#myCarousel .carousel-inner");
        } else {
          $("#myCarousel .carousel-item")
              .eq(0)
              .appendTo($(this).find(".carousel-inner"));
        }
      }
    }
  });
});


$(document).ready(function() {
  $("#myCarousel1").on("slide.bs.carousel", function(e) {
    var $e = $(e.relatedTarget);
    var idx = $e.index();
    var itemsPerSlide = 3;
    var totalItems = $("#myCarousel1 .carousel-item").length;

    if (idx >= totalItems - (itemsPerSlide - 1)) {
      var it = itemsPerSlide - (totalItems - idx);

      for (var i = 0; i < it; i++) {
        // append slides to end
        if (e.direction == "left") {
          $("#myCarousel1 .carousel-item")
              .eq(i)
              .appendTo("#myCarousel1 .carousel-inner");
        } else {
          $(".carousel-item")
              .eq(0)
              .appendTo($(this).find(".carousel-inner"));
        }

      }
    }
  });
});
