(function($) {
  var img = $("img"),
    h2 = $("h2");

  // Simple Tween
  TweenLite.fromTo(img, 1, { x: -200, autoAlpha: 0 }, { x: 0, autoAlpha: 1 });
  TweenLite.from(h2, 1, { autoAlpha: 0, delay: 0.5 });
})(jQuery);
