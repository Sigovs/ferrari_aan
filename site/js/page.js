/* Two behaviours only. Everything else on this page is static by decision:
   the composition has to hold as a screenshot, so nothing here creates
   meaning that is absent without it. */

(function () {
  'use strict';

  /* 1 · The masthead ground.
     It stays scrimmed while it is still travelling over the cover, and only
     takes an opaque ground once its bottom edge has cleared the cover's.
     Going solid earlier draws a hard horizontal line across the headline for
     the whole length of the scroll. */
  var head = document.getElementById('masthead');
  var cover = document.getElementById('top');
  if (head && cover) {
    var threshold = 0;
    var measure = function () {
      threshold = Math.max(0, cover.offsetHeight - head.offsetHeight);
    };
    var apply = function () {
      head.classList.toggle('masthead--solid', window.scrollY >= threshold);
    };
    var frame = null;
    var onScroll = function () {
      if (frame) return;
      frame = requestAnimationFrame(function () { frame = null; apply(); });
    };
    measure(); apply();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', function () { measure(); apply(); });
    if (document.fonts && document.fonts.ready) {
      document.fonts.ready.then(function () { measure(); apply(); });
    }
  }

  /* 2 · The enquiry form has no endpoint yet. It says so on the page and it
     says so again here, rather than pretending to have sent anything. */
  var form = document.getElementById('enquiry-form');
  var status = document.getElementById('form-status');
  if (form && status) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      status.textContent =
        'Not sent — this form is a sample. Connect it to the retailer enquiry endpoint before launch.';
    });
  }
})();
