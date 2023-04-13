

$(document).ready(function(){
  $('.fashion-slider').slick({
    dots: true,
  infinite: true,
  speed: 300,
  autoplay: true,
  autoplaySpeed: 3500,
  slidesToShow: 1,
  slidesToScroll: 1,
  cssEase: 'linear'
  });
  
  })


  var a;
  function customCombobox(name) {  
    var tabcontent;
    
    if(a==name){
      document.getElementById(name).style.display = "none";
      a=''
    }
    else{ 
    tabcontent = document.getElementsByClassName("topBtn");
    for (let i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    
    document.getElementById(name).style.display = "block";
    document.getElementById(name).style.zIndex = "9";
    a=name;
  }
  }

  function queryClickOpenClose(name) {  
    var content;
    content = document.querySelector(name);
    console.log(content.style.display)
    if(content.style.display=='none' || content.style.display=='')
      content.style.display = "block";
    else
      content.style.display = "none";
  }

  window.onclick = function(event) {

    if (!event.target.matches('.top-btn-name')) {
      var dropdowns2 = document.getElementsByClassName("topBtn");

      for (let i = 0; i < dropdowns2.length; i++) {
        var openDropdown2 = dropdowns2[i];

        if (openDropdown2.style.display=='block') {
            openDropdown2.style.display='none';
        };
      };






    };
    if (!event.target.matches('.header-bottom-under-list')) {
      var dropdowns2 = document.getElementsByClassName("header-bottom-under-list")[0];

        if (dropdowns2.style.display=='block') {
          dropdowns2.style.display='none';
        }
      }
    }


  