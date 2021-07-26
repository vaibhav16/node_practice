const fs = require('fs');

const dataBuffer = fs.readFileSync('1-json.json');
const dataJSON = dataBuffer.toString();
const data = JSON.parse(dataJSON);

data.name = "vaibhav";
data.age = 101;

fs.writeFileSync("1-json.json",JSON.stringify(data));


const fileAfterChanges = fs.readFileSync('1-json.json');
console.log("fileAfterChanges: ",fileAfterChanges.toString())