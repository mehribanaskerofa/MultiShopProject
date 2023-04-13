var filtername;
  function filterclick(name) {  
    var tabcontent;
    
    tabcontent = document.getElementsByClassName("sort-item");
    for (let i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    if(filtername==name){
      document.getElementById(name).style.display = "none";
      filtername=''
    }
    else{
       document.getElementById(name).style.display = "block";
       filtername=name
    }
   
  }

  window.onclick = function(event) {
    if (!event.target.matches('.filter')) {
      var dropdowns1 = document.getElementsByClassName("sort-item");
        // console.log(dropdowns)
      for (let i = 0; i < dropdowns1.length; i++) {
        var openDropdown1 = dropdowns1[i];
// console.log(dropdowns[i])
        if (openDropdown1.style.display=='block') {
            // console.log(openDropdown.classList.contains('active'))
            openDropdown1.style.display='none';
        };
      };
    };
}
