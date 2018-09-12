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








// $(function() {
//     $('a[href*="#"]:not([href="#"])').click(function() {
//         var target = $(this.hash);
//         $('html, body').animate({
//             scrollTop: target.offset().top - 90
//         }, 1000);
//     });
// });
// 錨點滑動
function myScroll(scrollTo, time) {
    var scrollFrom = parseInt(window.pageYOffset),
        i = 0,
        runEvery = 5; // run every 5ms
    scrollTo = parseInt(scrollTo);
    time /= runEvery;
    var interval = setInterval(function() {
        i++;
        window.scroll(0, (scrollTo - scrollFrom) / time * i + scrollFrom);
        if (i >= time) {
            clearInterval(interval);
        }
    }, runEvery);
}

const aList = document.querySelectorAll('a[href*="#"]:not([href="#"])');
aList.forEach(item => {
    item.addEventListener('click', function() {
        myScroll(document.querySelector(this.hash).offsetTop, 500);
    })
})







//FB小工具
import { addLoadEvent, openFb } from './fbTool.js'

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