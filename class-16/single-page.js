window.addEventListener('load',main);

let productId=null;

function main(){
 let url = document.location.href;
 url=url.replace(/.*\?/,'');//id=2;
 url=url.split('=');//[id,2];
 let id= url[1];
 productId=id;
 
 fetch('/products.json').then(function(response){
    response.json().then(function(responseBody){
        renderProductDetails(responseBody)
    })
 })
}

function renderProductDetails(productDetails){
    for(let eachProduct of productDetails.products){
        if(eachProduct.id==productId){
            document.querySelector('#productImage').src=eachProduct.img;
            document.querySelector('.descPara').innerHTML=eachProduct.desc;
            document.querySelector('#promoIframe').setAttribute('src',eachProduct.promo);
            document.querySelector('.productName').innerHTML=eachProduct.name;
            document.querySelector('.priceText').innerHTML=`${eachProduct.price} inr`;
        }
    }
}