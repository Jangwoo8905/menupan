

function change_img(){
    var before = document.querySelector(".before");
    var after = document.querySelector(".after");

    var detail_page = document.getElementsByClassName("detail_page");

    let i=0;

    after.onclick = function () {
        for (let i = 0; i < 3; i++) {
            detail_page[i].style.display = 'none';
        }
        if(i<2){
            detail_page[i+1].style.display = 'block';
            i++;
        }
        else{
            detail_page[i].style.display = 'block'
        }

    }

    before.onclick = function () {
        for (let i = 0; i < 3; i++) {
            detail_page[i].style.display = 'none';
        }

        if(i>0){
            detail_page[i-1].style.display = 'block';
            i--;
        }
        else{
            detail_page[i].style.display = 'block'
        }

    }
}

function pay(){

    var price = document.querySelector(".price").value;

    var btn = document.querySelector(".buy")
    btn.onclick = function (){
        alert(price);
        movePage();
    }

}

function movePage(){

    var btn = document.querySelector(".first_page");
    btn.onclick = function(){
        window.open("../html/giyong.html");
    }

}

window.onload = function () {
    change_img();
    pay();
    movePage();
}