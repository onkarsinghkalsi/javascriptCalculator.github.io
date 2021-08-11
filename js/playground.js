var x ="0124";

console.log(x.length);

var y="",l=x.length-1;

y=x.substr(0, l);

console.log(y);

// console.log(Math.pow(y,2));
var x = "458+11-1";
var op = x.indexOf('^');
var arr=[];
arr=x.split('^');
console.log(arr[0],arr[1]);
console.log('index: '+op);
