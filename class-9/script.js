let persons = [];


persons.push({
    fname: 'Pranoy',
    lname: 'sarkar',
});
persons.push({
    fname: 'ram',
    lname: 'sarkar',
});
persons.push({
    fname: 'Sham',
    lname: 'Nath',
});
persons.push({
    fname: 'Arun',
    lname: 'Das',
});


/* Find */
let result = persons.find((person) => {
    if (person.lname == 'Das') {
        return true;
    }
    else {
        return false;
    }
});

//console.log(result);

/**Find index */
let personIndex = persons.findIndex((person) => {
    if (person.fname == 'ram') {
        return true;
    }
    else {
        return false;
    }
});

//console.log(personIndex , persons[personIndex])
/** some */
let foundSome = persons.some((person) => {
    if (person.fname == 'Pranoy') {
        return true;
    }
    else {
        return false;
    }
});
//console.log(foundSome);

/** every */
let every = persons.every((person) => {
    if (person.fname == 'Pranoy') {
        return true;
    }
    else {
        return false;
    }
});
console.log(every);

/** fill */
let arr = [1, 2, 4]
arr = arr.fill(0);
//console.log(arr);

/**Concat */
let fruits=['apple','banana'];
let veg=['potato','brinjle'];
let together=veg.concat(fruits);
for(let eachElement of together){
  //  console.log(eachElement);
}

/** Map */
let simplePersonsList=persons.map((x)=>{
    return `${x.fname} ${x.lname}`;
});
//console.log(simplePersonsList);


/** filter */
let onlySarkars=persons.filter((x)=>{
   if(x.lname=='sarkar'){
       return true;
   }else{
       return false;
   }
});
console.log(onlySarkars);