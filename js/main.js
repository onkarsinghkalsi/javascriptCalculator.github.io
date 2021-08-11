const pi = 3.14159265;  // 8 decimal points

//functions---
var $ = (arg) => document.getElementById(arg);

function addChar(arg) {
    var x = $('display').value;
    if(x.length==2 && x[1]=='0'){
        if(x[0]=='+')
            $('display').value = "+"+arg;
        else if(x[0]=='-')
            $('display').value = "-"+arg;
    }else if($('display').value == '0')
        $('display').value = arg;
    else
        $('display').value += arg;
}

function addOpr(arg) {
    var x = $('display').value;
    var opr = x[x.length-1];
    var n_Str;
    if(opr=='%' || opr == '+' || opr=='-' || opr=='*' || opr=='/' || opr=='^'){
        n_Str=x.slice(0, x.length-1);
        //console.log(n_Str, arg);
        $('display').value = n_Str+arg;
    }else
        $('display').value += arg;
}

function mathFunc(arg) {
    var x = $('display').value;
    switch(arg) {
        case 'sin':
            $('display2').value = 'sin('+ x + ') =';
            checkError(Math.sin(x));
            break;
        case 'cos':
            $('display2').value = 'cos('+ x + ') =';
            checkError(Math.cos(x));
            break;
        case 'tan':
            $('display2').value = 'tan('+ x + ') =';
            checkError(Math.tan(x));
            break;
        case 'sqrt':
            $('display2').value = 'sqrt('+ x + ') =';
            checkError(Math.sqrt(x));
            break;
        case 'log':
            $('display2').value = 'log('+ x + ') =';
            checkError(Math.log10(x));
            break;
        case 'square':
            $('display2').value = x + '^2 =';
            checkError(Math.pow(x,2));
            break;
    }
}

function addPi() {
    var x = $('display').value;
    var opr = x[x.length-1];
    if(x=="0"){
        $('display').value = pi;
    }else if(opr=='%' || opr == '+' || opr=='-' || opr=='*' || opr=='/' || opr=='^'){
        $('display').value += pi;
    }else{
        $('display').value +="*"+ pi;
    }
}

function addDot() {
    var x = $('display').value;
    var opr=-1;
    for (const char of x) {
        if(char=='%' || char == '+' || char=='-' || char=='*' || char=='/' || char=='^'){
            opr=char;
        }
    }
    var res = x.substring(x.lastIndexOf(opr)+1, x.length);
    //console.log(res);
    if(res.indexOf('.') == -1){
        if(res.length==0)
            $('display').value += '0.';
        else
            $('display').value += '.';
    }
}

function toggleSign() {
    var x = $('display').value;
    if(x[0] == '+')
        $('display').value = x.replace('+','-');
    else if(x[0] == '-')
        $('display').value = x.replace('-','+');
    else
        $('display').value = "+"+x;
}

function checkError(result) {
    //error checking
    if(result=='Infinity' || result=='-Infinity'){
        $('display').value = 'Invalid Input';
    }else if(isNaN(result)){
        $('display').value = 'Invalid Input';
    }else{
        $('display').value = result;
    }
}
//-------Click Event Handlers--------

$("CE").onclick = () => {
    $("display").value="0";
    $("display2").value="";
}
$("Del").onclick = () => {
    var d = $("display").value, n="";
    if(d.length>1){
        n =d.length-1;
        y=d.substr(0, n);
       $("display").value = y;
    }else if(d.length==1){
        $("display").value=0;
    }
    $('display2').value = "";
}
$("Eval").onclick = () => {
    var se = $("display").value;
    var result=0;
    var arr=[];
    var opr = se.indexOf('^');
    if(opr != '-1'){
        arr = se.split('^');
        result = Math.pow(arr[0], arr[1]); 
    }else{
        try{
            result =eval(se);
        }catch(e){
            $('display').value = 'Invalid Input';
            return;
        } 
    }  
    $("display2").value = $("display").value +" = "; 
    checkError(result);
}

$("num0").onclick = () => {
    if($("display").value != "0")
        $("display").value+=0;
}
// --------Numbers 

$("num1").onclick = () => addChar(1);
$("num2").onclick = () => addChar(2);
$("num3").onclick = () => addChar(3);
$("num4").onclick = () => addChar(4);
$("num5").onclick = () => addChar(5);
$("num6").onclick = () => addChar(6);
$("num7").onclick = () => addChar(7);
$("num8").onclick = () => addChar(8);
$("num9").onclick = () => addChar(9);

//---------- Mathematical Operations

$("Add").onclick = () => addOpr('+');
$("Sub").onclick = () => addOpr('-');
$("Mul").onclick = () => addOpr('*');
$("Div").onclick = () => addOpr('/');
$("Mod").onclick = () => addOpr('%');
$('pow').onclick = () => addOpr('^');

$("b_st").onclick = () => addChar('(');
$("b_cl").onclick = () => addChar(')');

$("dot").onclick = () => addDot();

$("sign").onclick = () => toggleSign();

$("pie").onclick = () => addPi();

$("square").onclick = () => mathFunc('square');
$('sqrt').onclick = () => mathFunc('sqrt');
$('log').onclick = () => mathFunc('log');
$('sin').onclick = () => mathFunc('sin');
$('cos').onclick = () => mathFunc('cos');
$('tan').onclick = () => mathFunc('tan');
//----------------