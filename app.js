const animated = document.querySelectorAll('.animated');
let pY = null;
// const link = document.querySelectorAll('.nav-link[href*="#"]:not([href="#"])');

window.addEventListener('scroll', () => {
  pY = window.pageYOffset / 7 - 200;
  document.querySelector('#warp').style.backgroundPositionY = pY + 'px';
  // banner視差滾動

  animated.forEach(item => {
      window.pageYOffset > item.offsetTop - window.innerHeight && window.pageYOffset < item.offsetTop + window.innerHeight ?
        item.classList.add('fadeIn') : item.classList.remove('fadeIn');
    })
    // 進場動畫
})

$(document).ready(function() {
  $(function() {
    $('a[href*="#"]:not([href="#"])').click(function() {
      var target = $(this.hash);
      $('html, body').animate({
        scrollTop: target.offset().top
      }, 1000);
    });
  });
});

// link.forEach(function(link) {
//   link.addEventListener('click', function(e) {
//     e.preventDefault();
//     let objY = document.querySelector(this.hash).offsetTop - 90;
//     let slideY = objY - window.pageYOffset;
//     console.log(objY,slideY);
//     for (let i = window.pageYOffset; i < slideY; i += slideY / 30) {
//       console.log(i)
//       (window.scroll(0, i))();
//     }
//   })
// })
