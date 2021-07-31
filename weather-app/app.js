console.log('Starting');

setTimeout(() => {
    console.log("2 Second Timeout");    
}, 2000);

setTimeout(() => {
    console.log("0 second Timeout");
}, 0);


console.log('Stopping');

/*
Output Will be: 
Starting
Stopping
0 second Timeout
2 Second Timeout
*/

