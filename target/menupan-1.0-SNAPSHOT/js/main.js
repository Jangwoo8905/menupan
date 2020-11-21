const all = ele => document.querySelectorAll(ele)
const one = ele => document.querySelector(ele)
const slide = _ => {
    const wrap = one('.slide') // .slide 선택
    const target = wrap.children[0] // .slide ul 선택
    const len = target.children.length // .slide li 갯수
    // .slide ul의 너비 조정
    target.style.cssText = `width:calc(100% * ${len});display:flex;transition:1s`
    // .slide li의 너비 조정
    Array.from(target.children)
        .forEach(ele => ele.style.cssText = `width:calc(100% / ${len});`)
    // 화면 전환 실행
    let pos = 0
    setInterval(() => {
        pos = (pos + 1) % len // 장면 선택
        target.style.marginLeft = `${-pos * 100}%`
    }, 1000) // 1500 = 1500ms = 1.5sec. 즉, 1.5초 마다 실행
}
window.onload = function () {
    slide()
}

/*var img=new Array();


var interval=1000;
var n=0;
var imgs = new Array("../images/conversion/1.png","../images/conversion/2.png","../images/conversion/3.png", "../images/conversion/4.png", "../images/conversion/5.png", "../images/conversion/6.png", "../images/conversion/7.png", "../images/conversion/8.png", "../images/conversion/9.png", "../images/conversion/10.png" );
function rotate()
{
    if(navigator.appName=="Netscape" && document.getElementById)
    {
        document.getElementById("slide").src=imgs[n];
    }
    else document.images.slide.src=imgs[n];
    (n==(imgs.length-1))?n=0:n++;
    setTimeout("rotate()",interval);
}

function getdate(){
    document.write('test');

    var today = new Date();
    console.log(today.getDate() + parseInt(2));
    var date = today.getDate() + parseInt(2);
    today.getMonth();
    var result = today.getMonth() + "월" + " " + date + "일" + " " + "배송";

    console.log(result);
    div.innerHTML = result;
}*/

