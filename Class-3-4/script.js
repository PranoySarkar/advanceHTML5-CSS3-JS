console.log('hello');

/*
// for id 
let myDiv = document.querySelector('#secondDiv');
console.log(myDiv)
 */
/* //class
let myDiv = document.querySelector('.thirdDiv');
console.log(myDiv) */

/* let body = document.querySelector('body');
console.log(body) */

/* //inner html
let nameArea= document.querySelector('#nameArea');
nameArea.innerHTML='<b>Pranoy</b>'
nameArea.classList.add('success')
//nameArea.classList.remove('success') */


/*
//creating an element in js 
let li = document.createElement('li');// <li></li>
li.innerHTML='Apple';//<li>Apple</li>

//appending and element in html form js 
let fruitsUl = document.querySelector('#fruitsUl');
fruitsUl.append(li);

//creating an element
let div = document.createElement('div');
div.innerHTML='This div is created form JS';

let body = document.querySelector('body');
body.append(div);
*/


/* let button = document.querySelector('button');
button.addEventListener('click', showPwdButtonClicked)

function showPwdButtonClicked() {
    let input = document.querySelector('input');
    let currentValue = input.getAttribute('type');// get the current value of an attribute 
    if(currentValue=='password'){
        input.setAttribute('type', 'text')
    }
    else{
        input.setAttribute('type', 'password'); // set (or add new) a value of an attribute
    }
   
} */

//document location details 
console.log(document.location.href)

//document.location.reload()

// Get element location details 
let button= document.querySelector('button');
let rect= button.getBoundingClientRect();
console.log(rect)

//get window size details 
console.log(window.innerWidth,window.innerHeight)