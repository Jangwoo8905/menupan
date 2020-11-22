/**
 * 
 */

var m1 = 0;
var m2 = 0;
var m3 = 0;
var m4 = 0;


window.onload = function(){
	var menu = document.querySelectorAll('.menu');
	for(var i=0; i<menu.length; i++){
		menu[i].onclick = function(){
// 			alert(this.innerHTML + ":" +this.getAttribute('price')+"원" );
			if((this.getAttribute('id')=='fridehot' || this.getAttribute('id')=='fridehot2') && m1 ==0){
// 				this.style.backgroundColor = 'red';
				document.getElementById('fridehot').style.backgroundColor='red';
				document.getElementById('fridehot2').style.backgroundColor='red';
				m1++;
			}else if((this.getAttribute('id')=='fridehot' || this.getAttribute('id')=='fridehot2') && m1 ==1){
// 				this.style.backgroundColor = 'white';
				document.getElementById('fridehot').style.backgroundColor='white';
				document.getElementById('fridehot2').style.backgroundColor='white';
				m1--;
			}else if((this.getAttribute('id')=='banbanchicken' || this.getAttribute('id')=='banbanchicken2') && m2 ==0){
// 				this.style.backgroundColor = 'red';
				document.getElementById('banbanchicken').style.backgroundColor='red';
				document.getElementById('banbanchicken2').style.backgroundColor='red';
				m2++;
			}else if((this.getAttribute('id')=='banbanchicken' || this.getAttribute('id')=='banbanchicken2') && m2 ==1){
// 				this.style.backgroundColor = 'white';
				document.getElementById('banbanchicken').style.backgroundColor='white';
				document.getElementById('banbanchicken2').style.backgroundColor='white';
				m2--;
			}else if((this.getAttribute('id')=='bannoodle' || this.getAttribute('id')=='bannoodle2') && m3 ==0){
// 				this.style.backgroundColor = 'red';
				document.getElementById('bannoodle').style.backgroundColor='red';
				document.getElementById('bannoodle2').style.backgroundColor='red';
				m3++;
			}else if((this.getAttribute('id')=='bannoodle' || this.getAttribute('id')=='bannoodle2') && m3 ==1){
// 				this.style.backgroundColor = 'white';
				document.getElementById('bannoodle').style.backgroundColor='white';
				document.getElementById('bannoodle2').style.backgroundColor='white';
				m3--;
			}else if((this.getAttribute('id')=='tang' || this.getAttribute('id')=='tang2') && m4 ==0){
// 				this.style.backgroundColor = 'red';
				document.getElementById('tang').style.backgroundColor='red';
				document.getElementById('tang2').style.backgroundColor='red';
				m4++;
			}else if((this.getAttribute('id')=='tang' || this.getAttribute('id')=='tang2') && m4 ==1){
// 				this.style.backgroundColor = 'white';
				document.getElementById('tang').style.backgroundColor='white';
				document.getElementById('tang2').style.backgroundColor='white';
				m4--;
			}
		};
	};
	
	document.getElementById('buy').onclick = function(){
	var mbuy = new Array();
	var price = new Array();
		//클릭된 애들의 값을 배열에 넣고 얼럿창에 for문으로 나열 출력?
				
		if(m1 ==1){
			var m1f = document.getElementById('fridehot2').childNodes[0].nodeValue;
// 			mbuy[0] = m1f;
			mbuy.push(m1f)
			var price1 = parseInt(document.getElementById('fridehot2').getAttribute('price'));
			price.push(price1)
		}
		if(m2 ==1){
			var m2f = document.getElementById('banbanchicken2').childNodes[0].nodeValue;
// 			mbuy[1] = m2f;
			mbuy.push(m2f)
			var price2 = parseInt(document.getElementById('banbanchicken2').getAttribute('price'));
			price.push(price2)
		}
		if(m3 ==1){
			var m3f = document.getElementById('bannoodle2').childNodes[0].nodeValue;
// 			mbuy[2] = m3f;
			mbuy.push(m3f)
			var price3 = parseInt(document.getElementById('bannoodle2').getAttribute('price'));
			price.push(price3)
		}
		if(m4 ==1){
			var m4f = document.getElementById('tang2').childNodes[0].nodeValue;
// 			mbuy[3] = m4f;
			mbuy.push(m4f)
			var price4 = parseInt(document.getElementById('tang2').getAttribute('price'));
			price.push(price4)
		}
				
		var total = mbuy.join(' / ');
		var result = price.reduce(function add(sum, currValue){
			return sum + currValue;
		}, 0);
		if (result != 0){
			
		alert(total + ' 총 : ' + result + '원');
		}else{
			alert('메뉴를 한개 이상 선택해주세요')
		}
		
	
		total=null;
		result=null;
	};
	
};


