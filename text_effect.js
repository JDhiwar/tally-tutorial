// Wrap every letter in a span
var textWrapper = document.querySelector('.ml11 .letters');
textWrapper.innerHTML = textWrapper.textContent.replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>");

anime.timeline({loop: true})
.add({
  targets: '.ml11 .line',
  scaleY: [0,1],
  opacity: [0.5,1],
  easing: "easeOutExpo",
  duration: 900
})
.add({
  targets: '.ml11 .line',
  translateX: [0, document.querySelector('.ml11 .letters').getBoundingClientRect().width + 10],
  easing: "easeOutExpo",
  duration: 900,
  delay: 100
}).add({
  targets: '.ml11 .letter',
  opacity: [0,1],
  easing: "easeOutExpo",
  duration: 800,
  offset: '-=775',
  delay: (el, i) => 34 * (i+1)
}).add({
  targets: '.ml11',
  opacity: 0,
  duration: 1000,
  easing: "easeOutExpo",
  delay: 2000
});

// ----------------------------------------
var textWrapper = document.querySelector('.ml10 .letters');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: true})
  .add({
    targets: '.ml10 .letter',
    rotateY: [-90, 0],
    duration: 1300,
    delay: (el, i) => 45 * i
  }).add({
    targets: '.ml10',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });