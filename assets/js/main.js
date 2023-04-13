//header $(document).ready(function(){
//   $('.fashion-slider').slick({
//     dots: true,
//   infinite: true,
//   speed: 300,
//   autoplay: true,
//   autoplaySpeed: 3500,
//   slidesToShow: 1,
//   slidesToScroll: 1,
//   cssEase: 'linear'
//   });
//   });

// $(document).ready(function(){

//   $('.slider').slick({
//     dots: true,
//   infinite: true,
//   speed: 500,
//   fade: true,
//   cssEase: 'linear'
//   })
// });
//shop details
// $(document).ready(function(){
//   $('.shop-detail-slider').slick({
//     infinite: true,
//     speed: 300,
//     slidesToShow: 1,
//     adaptiveHeight: true,
//     fade: true,
//     cssEase: 'linear'
//   });
//   });

//shopdetails
  // function openTab(evt, cityName) {
  //   var tabcontent, tablinks;
  //   tabcontent = document.getElementsByClassName("tab-context");
  //   tabbtn = document.getElementsByClassName("tab-btn");
  //   for (let i = 0; i < tabcontent.length; i++) {
  //     tabcontent[i].style.display = "none";
  //     // tabbtn[i].style.color = "black";
  
  //   }
  //   tablinks = document.getElementsByClassName("tab-btn");
  //   for (let i = 0; i < tablinks.length; i++) {
  //     tablinks[i].className = tablinks[i].className.replace(" active", "");
  //     tablinks[i].className = tablinks[i].className.replace(" bggrey", "");
  
  //   }
  //   document.getElementById(cityName).style.display = "block";
  //   evt.currentTarget.className += " active" ;
  //   evt.currentTarget.className += " bggrey" ;
  
  //   console.log(evt.currentTarget)
  //   // evt.style.color ='red'
  // }

//shopdetails
  // $(document).ready(function(){
  //   $('.product-item-slider').slick({
  //     dots: false,
  //     infinite: false,
  //     speed: 300,
  //     autoplay: true,
  //     autoplaySpeed: 4000,
  //     slidesToShow: 4,
  //     slidesToScroll: 4,
  //     responsive: [
  //       {
  //         dots: true,
  //         breakpoint: 1024,
  //         settings: {
  //           slidesToShow: 3,
  //           slidesToScroll: 3,
  //           infinite: true
  //         }
  //       },
  //       {
  //         dots: true,
  //         breakpoint: 700,
  //         settings: {
  //           slidesToShow: 2,
  //           slidesToScroll: 2
  //         }
  //       },
  //       {
  //         dots: true,
  //         breakpoint: 580,
  //         settings: {
  //           slidesToShow: 1,
  //           slidesToScroll: 1
  //         }
  //       }
  //       // You can unslick at a given breakpoint now by adding:
  //       // settings: "unslick"
  //       // instead of a settings object
  //     ]
  //   });
  // });
//------------------------------------------------------------------------------------------


// shop
// $(document).ready(function(){

 
  // let filters=document.querySelectorAll(".filter")
  //   for(filter of filters){

  //     if(filter.lastElementChild.classList.contains('active'))
  //     filter.lastElementChild.classList.remove('active')

  //     filter.addEventListener("click", (event) => {
  //         event.preventDefault()


  //         let element=event.target.nextElementSibling.classList;
  //         element.toggle('active')
          // if(!element.contains('active')){
          //     element.add('active')
          // }
          // else{
          //     element.remove('active')
          // }
  
  
         // toggle("active");
    //  });
  
 

//shop var filtername;
//   function filterclick(name) {  
//     var tabcontent;
    
//     tabcontent = document.getElementsByClassName("sort-item");
//     for (let i = 0; i < tabcontent.length; i++) {
//       tabcontent[i].style.display = "none";
//     }
//     if(filtername==name){
//       document.getElementById(name).style.display = "none";
//       filtername=''
//     }
//     else{
//        document.getElementById(name).style.display = "block";
//        filtername=name
//     }
   
//   }

  //header var a;
  // function customCombobox(name) {  
  //   var tabcontent;
    
  //   if(a==name){
  //     document.getElementById(name).style.display = "none";
  //     a=''
  //   }
  //   else{ 
  //   tabcontent = document.getElementsByClassName("topBtn");
  //   for (let i = 0; i < tabcontent.length; i++) {
  //     tabcontent[i].style.display = "none";
  //   }
    
  //   document.getElementById(name).style.display = "block";
  //   document.getElementById(name).style.zIndex = "9";
  //   a=name;
  // }
  // }




//   $(document).ready(function(){
//     $("#customComboBox").click(function(){
//         $("#top-btn li").toggle("active");
//     });
// });
// function categoryMenuLists(name) {  
//   var tabcontent;
//   tabcontent = document.getElementById(name);
//   if(tabcontent.style.display=='none')
//     tabcontent.style.display = "block";
//   else
//     tabcontent.style.display = "none";
// }


// function categoryMenu(name) {  
//   var tabcontent;
//   tabcontent = document.getElementById(name);
//   if(tabcontent.style.display=='none')
//     tabcontent.style.display = "block";
//   else
//     tabcontent.style.display = "none";
// }



//shop
//   window.onclick = function(event) {
//     event.preventDefault();
//     if (!event.target.matches('.filter')) {
//       var dropdowns1 = document.getElementsByClassName("sort-item");
//         // console.log(dropdowns)
//       for (let i = 0; i < dropdowns1.length; i++) {
//         var openDropdown1 = dropdowns1[i];
// // console.log(dropdowns[i])
//         if (openDropdown1.style.display=='block') {
//             // console.log(openDropdown.classList.contains('active'))
//             openDropdown1.style.display='none';
//         };
//       };
//     };

// console.log(event.target.className)
//header
//     if (!event.target.matches('.top-btn-name')) {
//       // alert(1)
//       var dropdowns2 = document.getElementsByClassName("topBtn");
//         // console.log(dropdowns)
//       for (let i = 0; i < dropdowns2.length; i++) {
//         var openDropdown2 = dropdowns2[i];
// // console.log(dropdowns[i])
//         if (openDropdown2.style.display=='block') {
//             // console.log(openDropdown.classList.contains('active'))
//             openDropdown2.style.display='none';
//         };
//       };
//     };
  // };
  function queryClickOpenClose(name) {  
    console.log(1);
    var content;
    content = document.querySelector(name);
    console.log(content.style.display);
    if(content.style.display=='none' || content.style.display=='')
      content.style.display = "block";
    else
      content.style.display = "none";
  }


  //shoppingcart
//   var btnMinus=document.querySelectorAll('.table-body-item .minus-count-btn')
//   var btnPlus=document.querySelectorAll('.table-body-item .plus-count-btn')
//   var shopCounter=document.querySelectorAll('.table-body-item .shop-counter')


// for (let i = 0; i < btnMinus.length; i++) {
//   btnMinus[i].addEventListener('click',function(){
//     if(shopCounter[i].innerHTML>0){
//       let a=Number(shopCounter[i].innerHTML);
//       a--;
//       shopCounter[i].innerHTML=a;
//     }
//   })  
// }
// for (let i = 0; i < btnPlus.length; i++) {
//   btnPlus[i].addEventListener('click',function(){
//       let a=Number(shopCounter[i].innerHTML);
//       a++;
//       shopCounter[i].innerHTML=a;
    
//   })  
// }


//shopdetails
// var btnMinus=document.querySelectorAll('.shop-product-detail .minus-count-btn')
// var btnPlus=document.querySelectorAll('.shop-product-detail .plus-count-btn')
// var shopCounter=document.querySelectorAll('.shop-product-detail .shop-counter')


// for (let i = 0; i < btnMinus.length; i++) {
// btnMinus[i].addEventListener('click',function(){
//   if(shopCounter[i].innerHTML>0){
//     let a=Number(shopCounter[i].innerHTML);
//     a--;
//     shopCounter[i].innerHTML=a;
//   }
// })  
// }
// for (let i = 0; i < btnPlus.length; i++) {
// btnPlus[i].addEventListener('click',function(){
//     let a=Number(shopCounter[i].innerHTML);
//     a++;
//     shopCounter[i].innerHTML=a;
  
// })  
// }
  //plus minus

  // var plusBtn=document.getElementById('plus-count-btn')
  // var minusBtn=document.getElementById('minus-count-btn')

  // var productCount=document.getElementById('shop-counter')

  // let countNum = 0;
  // productCount.innerHTML = countNum;
  
  // minusBtn.addEventListener("click", () => {
  //   if(countNum>0){
  //   countNum -= 1;
  //   productCount.innerHTML = countNum;
  //   }
  // });
  
  // plusBtn.addEventListener("click", () => {
  //   if(countNum>=0){
  //   countNum += 1;
  //   productCount.innerHTML = countNum;
  //   }
  // });
  
  // var categorymenulists=document.getElementById('category-menu-lists')
  
  // categorymenulists.addEventListener('click', function(){
  //   let categorymenulist= document.getElementById('category-menu-list')
  //   categorymenulist.classList.toggle('active')
  // })


  // var categorymenu=document.getElementById('category-menu')
  
  // categorymenu.addEventListener('click', function(){
  //   let categories= document.getElementById('categories')
  //   categories.classList.toggle('active')
  // })
//==========================================================================
// $( ".product-item" ).hover(
//     function(){
//     $('this .product-act').css({
//         display:'flex'
//     })
//     },
// function(){
//     $('this .product-act').css({
//         display:'none'
//     })
// }
// )




// $(".product-item").hover(function () {
//     $(".product-act").toggleClass('.flex');
// })





// $(document).ready(function(){
// var differentAddress=document.getElementById("different-address");
// let checkboxs=document.querySelector("input[id=different-address-check]")
// checkboxs.addEventListener('change',function() {
//   if (this.checked) {
//     // differentAddress.style.display='block'
//     console.log(this)

//   } else {
//     differentAddress.style.display='none'
//     // console.log(this)

//   }
// });
// });









// shopdetails-----------------------------------------------------------
// $(document).ready(function(){
//   $('.shop-detail-slider').slick({
//     infinite: true,
//     speed: 300,
//     slidesToShow: 1,
//     adaptiveHeight: true,
//     fade: true,
//     cssEase: 'linear'
//   });
//   });







