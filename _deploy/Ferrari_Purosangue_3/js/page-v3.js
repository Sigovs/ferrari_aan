/* v2 only. Two behaviours, both additive — the page is complete and correct
   with this file absent, which is the test each of them has to pass. */

(function () {
  'use strict';

  /* 1 · The pinned navigation band.

     Measured on cauleyferrari.com: their header sits absolute over the hero,
     the 40px contact bar scrolls away with the page, and the 96px navigation
     band — black at 60% — stays at the top of the viewport, on the way down
     and on the way up alike. It is done there with a JS transform; done here
     by pinning the band once the contact bar has passed, which is the same
     result with nothing to keep in sync per frame.

     The header is absolutely positioned, so taking the band out of its flow
     shifts nothing: no reflow, no jump in the content underneath. Below the
     band's own breakpoint the contact bar is already hidden, so there is
     nothing to scroll away and the whole header pins instead. */
  var bar = document.querySelector('.header__top-bar');
  var wide = window.matchMedia('(min-width: 64.0625rem)');

  function syncPin() {
    var threshold = wide.matches && bar ? bar.offsetHeight : 0;
    document.body.classList.toggle('nav-pinned', window.scrollY > threshold);
  }
  var ticking = false;
  function onScroll() {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(function () { syncPin(); ticking = false; });
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  wide.addEventListener('change', syncPin);
  syncPin();

  /* 2 · The gallery pairs arrive one at a time.

     The hidden state is applied here rather than in the stylesheet, so a
     failure to load this file, or a reduced-motion setting, leaves every frame
     visible exactly where it belongs — the static page is the correct page and
     the motion is only how it assembles.

     Each image is observed on its own. Both halves of a pair are top-aligned
     and would otherwise cross the line together, so the interior carries a
     delay: the exterior lands, then the interior follows it. Nothing arrives
     as a group. */
  var reveal = document.querySelectorAll('.pairs .pair img');
  if (!reveal.length) return;
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  if (!('IntersectionObserver' in window)) return;

  Array.prototype.forEach.call(reveal, function (img) {
    img.classList.add('is-waiting');
  });

  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (!e.isIntersecting) return;
      e.target.classList.add('is-in');
      io.unobserve(e.target);          /* arrives once; scrolling back does not replay it */
    });
  }, { rootMargin: '0px 0px -12% 0px', threshold: 0.15 });

  Array.prototype.forEach.call(reveal, function (img) { io.observe(img); });
}());
