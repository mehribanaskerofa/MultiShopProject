function searchItem() {
    document.getElementById("search-item-text").style.display="none";
    var goster=true;
    input = document.getElementById("search-item");
    filter = input.value.toLowerCase();
    for (i=0; i<document.getElementsByClassName('product-item').length; i++){
if(document.getElementsByClassName('product-item-title')[i].innerHTML.toLowerCase().indexOf(filter) > -1) {     
    document.getElementsByClassName("product-item")[i].style.display = "block";
    goster=false;
}
else{
    document.getElementsByClassName("product-item")[i].style.display = "none";
} 

if(goster){
    document.getElementById("search-item-text").style.display="block";
}
else{
    document.getElementById("search-item-text").style.display="none";
}
console.log(goster);
}
}
