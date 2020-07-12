function responseCameBack(response){
    response.json().then(handleBody)
}

function handleBody(body){
    
    let imgTag=document.querySelector('#dynamicImage');
    let imagePath=body.message;
    imgTag.setAttribute('src',imagePath)
}



function loadImage(){
    fetch('https://dog.ceo/api/breeds/image/random').then(responseCameBack)
}


setInterval(loadImage, 5*1000)
