//Object property shorthand

const userName = 'Bruce Wayne';
const userAge = 99;

const user = {
    userName,
    userAge,
    location:'New York'
}

console.log(user);

//Object Destructuring

const product = {
    label:"77519",
    productName:'Coca Cola',
    price:50,
    origin:'Mexico'
}

const {origin:countryOfOrigin,label,price,discount="15%"} = product;

//console.log(origin); 
//Above command will be undefined, because we are consuming it as 'countryOfOrigin'

console.log(countryOfOrigin,label,price);
//Here we have consumed 'origin' as 'countryOfOrigin'

console.log(discount)