const chalk = require('chalk');

console.log(chalk.green.bold.inverse("dfdf"));

console.log(process.argv)

const command = process.argv[2];

if(command === 'add'){
    console.log('adding note');
}
else if(command == 'remove'){
    console.log('removing note');
}
