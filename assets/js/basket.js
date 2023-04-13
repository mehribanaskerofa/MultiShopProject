$(document).ready(function(){     

    showBasketProducts();
    productCount();

});


async function showAllProducts(){
    const url='https://jsonplaceholder.typicode.com/photos?_start=0&_limit=12';

    var products=await fetch(url)
    .then(function(responce)
    {return responce.json();}) 

    products.forEach(function(product){
        $('#product-items').append(`    
        <div class="product-item">
        <div class="product-item-img">
            <img src="${product.thumbnailUrl}" alt="">    
            <div class="product-act">
                <a href="" data-id="${product.id}" class="add-basket" ><i class="fa-solid fa-basket-shopping" ></i></a>
                <a href=""><i class="fa-regular fa-heart"></i></a>
                <a href=""><i class="fa-solid fa-arrows-rotate"></i></a>
                <a href=""><i class="fa-solid fa-magnifying-glass"></i></a>
        </div>
        </div>
        <div class="product-item-context">
            <div class="product-item-title">${product.title}</div>
            <div class="product-item-text"><span>$123.00</span><span class="overline">$123.00</span></div>
        </div>
    </div>
        `);
    });
}


function getBasket(){
    let basket = localStorage.getItem('basket');
    return  basket == null ? {} : JSON.parse(basket);
}

function saveBasket(basket){
    localStorage.setItem('basket',JSON.stringify(basket));
}

function addProduct(){
    $(document).on('click','.add-basket',function(e){
        e.preventDefault();
        const productId = $(this).data('id');

        let basket = getBasket();

        console.log(basket);
        if(!basket[productId]){
            basket[productId] = 1;
            saveBasket(basket);
        }else{
            basket[productId]++;
            saveBasket(basket);
        }
        $(this).parent().find('.shop-counter').html(basket[productId]);
        productCount()

    });
}

function removeProduct(){
    $(document).on('click','.remove-basket',function(e){
        const productId = $(this).data('id');

        let basket = getBasket();

        if(basket[productId]){

            if(basket[productId] > 1){
                basket[productId]--;

                $(this).parent().find('.shop-counter').html(basket[productId]);
            }else{
                delete basket[productId];
                
                if($(this).hasClass('remove-element')){
                    $(this).parent().parent().parent().remove();
                }
                }
                
            saveBasket(basket);
            productCount()
        }
    });
}


async function showBasketProducts(){
    const url='https://jsonplaceholder.typicode.com/photos?_start=0&_limit=12';

    var products=await fetch(url)
    .then(function(responce)
    {return responce.json();}) 

    const basket = getBasket();
    
    const basketProducts = products.filter(function(product){
        return Object.keys(basket).includes(product.id.toString());
    });
    
    showAllBasketProducts(basketProducts,basket);

}


function showAllBasketProducts(products,basket){
    $('.table-body-item').remove();
    products.forEach(function(product){
        var pn=product['title'].slice(0,7);
        $('#table-body-items').append(`    
                                        <ul class="table-body-item">
                                        <li><img src="${product.thumbnailUrl}" alt=""><span>${pn}</span></li>
                                        <li>$150</li>
                                        <li>
                                            <div class="shop-count">                                          
                                                <div data-id="${product.id}" class="minus-count-btn count-btn remove-element remove-basket" id="minus-count-btn"><i class="fa-solid fa-minus"></i></div>
                                                <div class="shop-counter" id="shop-counter">${basket[product.id]}</div>
                                                <div data-id="${product.id}" class="plus-count-btn count-btn add-basket" id="plus-count-btn"><i class="fa-solid fa-plus"></i></div>
                                            </div>
                                        </li>
                                        <li>$150</li>
                                        <li><i class="fa-solid fa-xmark remove-from-basket" data-id="${product.id}"></i></li>
                                    </ul>                                  
        `);
    });
}

function removeFromBasket(){
    $(document).on('click','.remove-from-basket',function(){
        const productId = $(this).data('id');
        let basket = getBasket();
        delete basket[productId];

        saveBasket(basket);
        showBasketProducts();
        productCount();

    });
}

function productCount(){
    products=getBasket();
    count=Object.keys(products).length;
    $('.header-bottom-count-style:last').text(count); 
}