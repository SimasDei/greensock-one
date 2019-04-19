(function($) {
  const img = $("img"),
    h2 = $("h2");

  // Simple Callback Functions
  TweenLite.from(img, 1, {
    x: -200,
    ease: Power1.easeInOut,
    onStart,
    onUpdate,
    onComplete
  });

  function onStart() {
    console.log("Animation Start Function");
  }
  function onUpdate() {
    console.log("Animation In Progress Function");
  }
  function onComplete() {
    console.log("Animation Completed Function");
  }
})(jQuery);
