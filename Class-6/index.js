/*function foo(){

    document.querySelector('div').style.display='block';
 
}

foo();

setTimeout(foo, 1000)
setInterval(foo, 1000)*/
/*
function executeMyWork(wk){
    setTimeout(wk, 1000);
}

function work(){
    console.log('Doing work')
}


executeMyWork(work)*/

function afterButtonClicked(){
    console.log('after Button clicked');
}

function buttonClicked(){
    console.log('Button clicked');
   
}

let btn = document.querySelector('button');

btn.addEventListener('click',buttonClicked)


