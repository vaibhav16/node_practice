//
// Goal: Mess around with the callback pattern
//
// 1. Define an add function that accepts the correct arguments
// 2. Use setTimeout to simulate a 2 second delay
// 3. After 2 seconds are up, call the callback function with the sum
// 4. Test your work!


const add = (x,y,cb) =>{
    setTimeout(() => {
        cb(x+y);
    }, 2000);
}

add(4,1,(sum)=>{
    console.log("This is the sum: ",sum)
})