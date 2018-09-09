const animated = document.querySelectorAll('.animated');
let pY = null;
const link = document.querySelectorAll('.nav-link[href*="#"]:not([href="#"])');
let activeNum = null;

window.addEventListener('scroll', () => {
  pY = window.pageYOffset / 7 - 200;

  document.querySelector('#warp').style.backgroundPositionY = pY + 'px';
  // banner視差滾動

  animated.forEach(item => {
      window.pageYOffset > item.offsetTop - window.innerHeight && window.pageYOffset < item.offsetTop + window.innerHeight ?
        item.classList.add('fadeIn') : item.classList.remove('fadeIn');
    })
    // 進場動畫

  window.pageYOffset > window.innerHeight / 5 ?
    document.getElementById('goTop').classList.add('fadeIn') :
    document.getElementById('goTop').classList.remove('fadeIn')
    // 回頂部按鈕顯示

  link.forEach((item, key) => {
      item.classList.remove('active');
      if (window.pageYOffset > document.querySelector(item.hash).offsetTop - 95) activeNum = key;
    }) //計算目前位置是第幾個連結的目標
  link[activeNum].classList.add('active');
})








$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    var target = $(this.hash);
    // link.forEach(item => item.classList.remove('active'));
    // this.classList.add('active');
    // if(this.hash=='#warp') document.querySelector('#warp').classList.add('active');
    $('html, body').animate({
      scrollTop: target.offset().top - 90
    }, 1000);
  });
});
// 錨點滑動



//FB小工具
function addLoadEvent(function2) {
  console.log('檢查onload');
  var oldonload = window.onload;
  if (typeof window.onload != 'function') {
      window.onload = function2;
  } else {
      window.onload = function() {
          if (oldonload) {
              oldonload();
          }
          function2();
      }
  }
  console.log(oldonload);
}

function openFb(fbLink) {
  console.log('檢查openFB');
  if (!fbLink) return;
  var headID = document.getElementsByTagName("head")[0];
  var newCss = document.createElement('link');
  newCss.type = 'text/css';
  newCss.rel = "stylesheet";
  newCss.href = "../scss/fbTool.css";
  headID.appendChild(newCss);

  var bodyID = document.getElementsByTagName("body")[0];
  var newDiv = document.createElement('div');
  newDiv.id = 'cus_ser';
  newDiv.innerHTML = '<div class="cus_ser_"><div class="fbTitle"></div><ul><li><iframe src="https://www.facebook.com/plugins/likebox.php?href=https://www.facebook.com/' + fbLink + '/&width=270&colorscheme=light&show_faces=true&stream=true&header=true&height=577" scrolling="no" frameborder="0" style="border:none; overflow:hidden; width:270px; height:577px;position: absolute;top: 0px;"allowTransparency="true"></iframe><div style="clear: both;"></div></li></ul><div id="copyright"><a href="https://www.half-straw.com/">小工具製作：半節吸管HalfStraw</a></div></div>';
  bodyID.appendChild(newDiv);

  var fbOpen = false;
  document.getElementById("cus_ser").onclick = function() {
      if (fbOpen === true) {
          document.getElementById("cus_ser").className = "";
          fbOpen = false;
      } else {
          document.getElementById("cus_ser").className = "isOpen";
          fbOpen = true;
      }
  };
}

addLoadEvent(function() {
  openFb('JingChaoTongPanKaoRou');
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