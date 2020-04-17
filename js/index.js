const navSlide = function () {
  var burger = document.querySelector('.burger');
  var nav = document.querySelector('.nav-links');
  var navLinksArray = document.querySelectorAll('.nav-links li');

  //Toggle the navbar
  burger.addEventListener('click', function () {
    nav.style.transition = 'transform 0.7s ease';
    nav.classList.toggle('nav-active');

    //Animate the individual links
    navLinksArray.forEach(function (link, index) {
      //If the animation doesn't exist already add it
      //This is used to make sure the animation works everytime
      if (link.style.animation) {
        link.style.animation = '';
      } else {
        link.style.animation = `navLinksFade 0.5s ease forwards ${index / 5 + 0.6}s`;
        //very important to use 'animation-fill-mode:forwards' because this ensures that the animated element retains the transformation
        //of the last keyframe rather than go back to it's CSS, in this case opacity : 1; and translateX(0);
      }
    });

    //Animate the burger icon
    burger.classList.toggle('toggle');
  });
}

navSlide();

// adds box-shadow to nav-bar on scroll
window.addEventListener('scroll', () => {
  const nav = document.querySelector('nav');
  if (window.scrollY > 60) {
    nav.classList.add('scrolled');   
  } else {
    nav.classList.remove('scrolled')
  }

  // for side-navigation
  const sides = document.querySelectorAll('.parallax');
  sides.forEach( (side, index) => {
    let topScroller = (-0.095 * window.scrollY) / ((index + 1))
    side.style.transform = `rotate(-90deg) translate3d(${topScroller}px, 0px, 0px)`;
  })
});

