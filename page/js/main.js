var img=new Array();

for(var i=1; i<=10; i++){
    img[i]=new Image(); img[i].src="../images/conversion/"+i+".png";
}

var interval=1000;
var n=0;
var imgs = new Array("../images/test/1.png","../images/test/2.png","../images/test/3.png", "../images/test/4.png", "../images/test/5.png", "../images/test/6.png", "../images/test/7.png", "../images/test/8.png", "../images/test/9.png", "../images/test/10.png" );
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
}

