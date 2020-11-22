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
    }, 3000) // 1500 = 1500ms = 1.5sec. 즉, 1.5초 마다 실행
}


function change_img(){
    var btn = document.querySelectorAll(".btn_p");
    var product = document.getElementsByClassName("product");

    for(let i=0; i<5; i++){
        btn[i].onclick = function (){
            for(let i=0; i<5; i++){
                product[i].style.display='none';
            }
            product[i].style.display='block';
        }
    }
}

function go_link(){

    var top = document.getElementsByClassName("top");
    var shoes = document.getElementsByClassName("shoes");
    var pant = document.getElementsByClassName("pant");
    var outer = document.getElementsByClassName("outer");
    var dress = document.getElementsByClassName("dress");


    for(let i=0; i<shoes.length; i++){
        shoes[i].onclick = function(){
            window.open("./detailPage.html");
        }
        top[i].onclick = function(){
            window.open("./detailPage.html");
        }
        pant[i].onclick = function(){
            window.open("./detailPage.html");
        }
        outer[i].onclick = function(){
            window.open("./detailPage.html");
        }
        dress[i].onclick = function(){
            window.open("./detailPage.html");
        }
    }


}


window.onload = function () {
    slide();
    change_img();
    go_link();
}


/*
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

