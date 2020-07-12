let x=1;
let y ='hello'
let arr=[];
//object
let person={
    firstName:'pranoy',
    lastName:'sarkar',
    age:28,
    educations:['masters', 'xyz','abc'],

    address:{
        country:'india',
        state:'xyz'
    },
    getFullName:function(){
        return this.firstName+' '+this.lastName;
    }
}
//console.log(person.getFullName());

/*
Function declaration
// style 1
function printMyName(){
    console.log('Pranoy Sarkar');
}

// style 2
let printMyName = function(){
    console.log('Pranoy Sarkar');
}


//style 3
let printMyName = ()=>{
    //arrow
    console.log('Pranoy Sarkar');
}
printMyName();

*/

/*
//diff between var and let
const siteName='abc.com';

function scope(){

    for(let i=0;i<100;i++){
         temp=10;
        {
            console.log(temp)
        }
    }
    console.log(temp);
}*/

/*
//template string
let firstName='Pranoy';
let lastName='Sarkar';
let middleName='Chandra'
//let fullName=firstName+' ('+middleName+')  '+lastName;
let fullName=`${firstName} ${middleName} ${lastName} ${1*2}`;
console.log(fullName);
*/

/*
// for of loop
let fruits=['apple','mango','banana'];

for(let i=0;i<fruits.length;i++){
    let fruitName=fruits[i];
    console.log(fruitName);
}

for(let fruitName of fruits){
    console.log(fruitName);
}
*/

/*
let fruits=['apple','mango','Xbanana'];

fruits.includes('banana') // true or false

if(fruits.includes('banana')){
    console.log('banana is included');
}else{
    console.log('banana is not included');
}
*/

/*
Dynamically adding elements to an array 
let fruits =[];
fruits.push('mango');
fruits.push('apple');
fruits.push('banana');
console.log(fruits)

fruits.pop()
fruits.pop()
console.log(fruits)
*/

let fruits=[1,3,5];

let result=fruits.find(finder)
console.log(result);


function finder(x){
 if(x>2 && x<4){
     return true
 }
 else{
     return false
 }
}
















