let arr_left=document.querySelector('.head_arrow_left');
let arr_right=document.querySelector('.head_arrow_right');
let back_head=document.querySelector('.big_main_head')

arr_left.onclick=function(){
	console.log("changed");
	back_head.style.backgroundImage='url(images/header/back1.png)';
	if (back_head.style.backgroundImage ='url(images/header/back1.png)') {
		arr_left.style.display='none';
		arr_right.onclick=function(){
			back_head.style.backgroundImage='url(images/header/Layer2.png)';
			arr_left.style.display='block';
			if (back_head.style.backgroundImage='url(images/header/Layer2.png)') {
				arr_right.onclick=function(){
					console.log('kek')
					back_head.style.backgroundImage='url(images/header/back2.png)';
					if (back_head.style.backgroundImage ='url(images/header/back2.png)') {
						arr_right.style.display='none';
						arr_left.onclick=function(){
							back_head.style.backgroundImage='url(images/header/Layer2.png)';
							arr_right.style.display='block';

						}
	}
}

			}
		}
	}
}


let arr1=document.querySelector('.offer_arr1');
let arr2=document.querySelector('.offer_arr2');
let arr3=document.querySelector('.offer_arr3');
let arr4=document.querySelector('.offer_arr4');
let arr5=document.querySelector('.offer_arr5');
let arr6=document.querySelector('.offer_arr6');

let big_block1=document.querySelector('.ofer1');
let big_block2=document.querySelector('.ofer2');
let big_block3=document.querySelector('.ofer3');
let big_block4=document.querySelector('.ofer4');
let big_block5=document.querySelector('.ofer5');
let big_block6=document.querySelector('.ofer6');

let hidden_block1=document.querySelector('.hidden_opt1');
let hidden_block2=document.querySelector('.hidden_opt2');
let hidden_block3=document.querySelector('.hidden_opt3');
let hidden_block4=document.querySelector('.hidden_opt4');
let hidden_block5=document.querySelector('.hidden_opt5');
let hidden_block6=document.querySelector('.hidden_opt6');

arr1.onclick=function(){
	big_block1.style.border='3px solid #eeeeee;'
	hidden_block1.style.display='block';
	arr1.style.transform='translateY(180px)rotate(225deg)'
}
hidden_block1.onclick=function(){
	hidden_block1.style.display='none';
	arr1.style.transform='translateY(0px)rotate(45deg)'
}

arr2.onclick=function(){
	big_block2.style.border='3px solid #eeeeee;'
	hidden_block2.style.display='block';
	arr2.style.transform='translateY(180px)rotate(225deg)'
}
hidden_block2.onclick=function(){
	hidden_block2.style.display='none';
	arr2.style.transform='translateY(0px)rotate(45deg)'
}

arr3.onclick=function(){
	big_block3.style.border='3px solid #eeeeee;'
	hidden_block3.style.display='block';
	arr3.style.transform='translateY(180px)rotate(225deg)'
}
hidden_block3.onclick=function(){
	hidden_block3.style.display='none';
	arr3.style.transform='translateY(0px)rotate(45deg)'
}

arr4.onclick=function(){
	big_block4.style.border='3px solid #eeeeee;'
	hidden_block4.style.display='block';
	arr4.style.transform='translateY(180px)rotate(225deg)'
}
hidden_block4.onclick=function(){
	hidden_block4.style.display='none';
	arr4.style.transform='translateY(0px)rotate(45deg)'
}

arr5.onclick=function(){
	big_block5.style.border='3px solid #eeeeee;'
	hidden_block5.style.display='block';
	arr5.style.transform='translateY(180px)rotate(225deg)'
}
hidden_block5.onclick=function(){
	hidden_block5.style.display='none';
	arr5.style.transform='translateY(0px)rotate(45deg)'
}

arr6.onclick=function(){
	big_block6.style.border='3px solid #eeeeee;'
	hidden_block6.style.display='block';
	arr6.style.transform='translateY(180px)rotate(225deg)'
}
hidden_block6.onclick=function(){
	hidden_block6.style.display='none';
	arr6.style.transform='translateY(0px)rotate(45deg)'
}