 document.querySelector('.buttom').onclick = fr



function fr(){
let cost = document.querySelector('.costt').value
let cost1 = document.querySelector('.costt2').value
let radio = document.querySelectorAll('.forme')

for (let i = 0; i < radio.length; i++){
	if (radio[i].checked){
		radioValue = radio[i].value
		break
	}
	
}
let res = document.querySelector('.result__item2').innerHTML = (cost /radioValue) + +cost1

}


