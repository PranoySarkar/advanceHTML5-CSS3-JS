window.addEventListener('load',main);
function main(){
    fetch('/products.json').then(responseReceived)
}

function responseReceived(response){
    response.json().then(bodyParsed)
}

function bodyParsed(productData){
    populateProducts(productData);
}

/**
 * 
 * <li> 
        <div class="product">

                       <div class="imgContainer">
                           <img src="/images/book.jpg" alt="A image of a book">
                       </div>
                       <div class="price">100 inr</div>

                       <div class="butNowBtnContainer">
                           <button class="buyNowBtn">Buy Now</button>
                       </div>
                   </div>
  </li>
 */
function populateProducts(productsData){

    for(let eachProduct of productsData.products){

        let li = document.createElement('li');

        let productDiv= document.createElement('div');
        productDiv.classList.add('product');
        li.appendChild(productDiv);
    
        let imgContainer = document.createElement('div');
        imgContainer.classList.add('imgContainer');
    
        let  img = document.createElement('img');
        img.src=eachProduct.img;
        imgContainer.appendChild(img);
        productDiv.appendChild(imgContainer);
    
        let priceDiv= document.createElement('div');
        priceDiv.classList.add('price');
        priceDiv.innerHTML=`${eachProduct.price} inr`;
        productDiv.appendChild(priceDiv);
    
        let butNowBtnContainer= document.createElement('div');
        butNowBtnContainer.classList.add('butNowBtnContainer');
    
        let buyNowBtn= document.createElement('button');
        buyNowBtn.classList.add('buyNowBtn');
        buyNowBtn.innerHTML='Buy Now';
        butNowBtnContainer.appendChild(buyNowBtn)
    
        productDiv.appendChild(butNowBtnContainer);
    
        document.querySelector('#productsUl').appendChild(li);
    }

   


}
