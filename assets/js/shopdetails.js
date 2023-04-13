$(document).ready(function(){
    $('.shop-detail-slider').slick({
      infinite: true,
      speed: 300,
      slidesToShow: 1,
      adaptiveHeight: true,
      fade: true,
      cssEase: 'linear'
    });
    });


var btnMinus=document.querySelectorAll('.shop-product-detail .minus-count-btn')
var btnPlus=document.querySelectorAll('.shop-product-detail .plus-count-btn')
var shopCounter=document.querySelectorAll('.shop-product-detail .shop-counter')


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

function openTab(evt, cityName) {
    var tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tab-context");
    tabbtn = document.getElementsByClassName("tab-btn");
    for (let i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
      // tabbtn[i].style.color = "black";
  
    }
    tablinks = document.getElementsByClassName("tab-btn");
    for (let i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
      tablinks[i].className = tablinks[i].className.replace(" bggrey", "");
  
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active" ;
    evt.currentTarget.className += " bggrey" ;
  
    console.log(evt.currentTarget)
    // evt.style.color ='red'
  }


  $(document).ready(function(){
    $('.product-item-slider').slick({
      dots: false,
      infinite: false,
      speed: 300,
      autoplay: true,
      autoplaySpeed: 4000,
      slidesToShow: 4,
      slidesToScroll: 4,
      responsive: [
        {
          dots: true,
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true
          }
        },
        {
          dots: true,
          breakpoint: 700,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
        {
          dots: true,
          breakpoint: 580,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ]
    });
  });