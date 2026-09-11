const readlineSync = require('readline-sync');
const num = parseFloat(readlineSync.question('Enter the num: '));

if (num>0){
    console.log(1);
}else if (num<0) {
    console.log(-1);    
}else{
    console.log(0);
}

// output
// Enter the num: 0956
// 1