(function($) {
  // JS code goes here
  const HTMLelements = {
    header: $("#header"),
    h1: $("h1"),
    intro: $(".intro"),
    firstItem: $("li:first-child"),
    secondItem: $("li:nth-child(2)"),
    lasttItem: $("li:last-child")
  };

  TweenLite.to(HTMLelements.h1, 1, { opacity: 0, y: 50 });
})(jQuery);
