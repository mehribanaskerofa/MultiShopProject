var btnMinus=document.querySelectorAll('.table-body-item .minus-count-btn')
var btnPlus=document.querySelectorAll('.table-body-item .plus-count-btn')
var shopCounter=document.querySelectorAll('.table-body-item .shop-counter')


for (let i = 0; i < btnMinus.length; i++) {
btnMinus[i].addEventListener('click',function(){
  if(shopCounter[i].innerHTML>0){
    let a=Number(shopCounter[i].innerHTML);
    a--;
    shopCounter[i].innerHTML=a;
  }
})  
}
for (let i = 0; i < btnPlus.length; i++) {
btnPlus[i].addEventListener('click',function(){
    let a=Number(shopCounter[i].innerHTML);
    a++;
    shopCounter[i].innerHTML=a;
  
})  
}