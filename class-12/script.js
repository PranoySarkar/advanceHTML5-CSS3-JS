console.log('Hello world')

function init(){

    let textArea= document.querySelector('#reviewTextArea');
    textArea.addEventListener('keyup',textEntered)
    let userText=localStorage.getItem('userReview');
    textArea.value=userText;
}

function textEntered(){
    let textArea= document.querySelector('#reviewTextArea');

    localStorage.setItem('userReview',textArea.value);
}



window.addEventListener('load',init)