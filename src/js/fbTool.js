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