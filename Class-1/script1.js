


function pageLoaded(){

    var btn=document.querySelector('button');
    btn.addEventListener('mouseenter',mouseenter);
    btn.addEventListener('mouseleave',mouseleave);

}

function mouseenter(){
    console.log('mouse enter');
}


function mouseleave(){
    console.log('mouse leave');
}


window.addEventListener('load',pageLoaded)