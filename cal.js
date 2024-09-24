let display = document.querySelector("#display");
let numbers= document.querySelectorAll(".number");
let ac = document.querySelector("#ac");
let c = document.querySelector("#c");
let equal = document.querySelector(".equal");
let operators = document.querySelectorAll(".operator");
let decimal= document.querySelector(".decimal");
let hasDecimal1 = false;
let hasDecimal2= false;
let num1 = "";
let num2 = "";
let currentoperator = "";
let op = document.querySelector("#opera");




// for getting all the number 
numbers.forEach((number) => {
    number.addEventListener(("click"),(e)=>{
      if(currentoperator== ""){
        num1 += e.target.innerText;
        display.innerText = num1;
      }else{
        num2 += e.target.innerText;
        display.innerText = num2;
      }
    });
})



ac.addEventListener(("click"),()=>{
    num1 = "";
    num2 = "";
    currentoperator = "";
    result = "";
    display.innerHTML= "";
    hasDecimal1 = false;
    hasDecimal2= false;
    op.innerHTML = "";


});

operators.forEach((operator) => {
    operator.addEventListener(("click"),(e)=>{
        if(num1!==""){
            if(num2!= ""){
                num1 = operate(num1,currentoperator,num2);
                display.innerText = num1;
            }
        currentoperator = e.target.innerText;
        op.innerText = currentoperator;
        num2 ="";

        hasDecimal2 = false; 
        }
        
    });
    
});


c.addEventListener(("click"),()=>{
    if(currentoperator== ""){
        num1 =  num1.slice(0,-1);
        display.innerText = num1;
      }else{
        num2 =  num2.slice(0,-1);
        display.innerText = num2;
      }

      if(!display.innerText.includes(".")){
        hasDecimal1 = false;
        hasDecimal2= false;
      }

    
});


decimal.addEventListener(("click"),()=>{
   
        if (currentoperator === "") {
            if (!hasDecimal1){
            num1 += ".";
           display.innerText = num1;
           hasDecimal1 = true;
            }
        } else {
            if (!hasDecimal2){
            num2 += ".";
           display.innerText = num2;
           hasDecimal2 = true;
        }
    }
        
    
});

equal.addEventListener(("click"),()=>{
    let result = operate(num1,currentoperator,num2);
    let resultstr = result.toString();

    if(resultstr.length > 7){
    display.innerText = resultstr.toString().slice(0, 7)+"..";
    num1 = resultstr.toString().slice(0, 7)+"..";
    }
    else{
        display.innerText = result;
        num1 = result;
    }
   
    num2 = "";
    currentoperator = "";

})






function sum(num1,num2){
    return parseFloat(num1) + parseFloat(num2);

}
function sub(num1,num2){
    return parseFloat(num1) - parseFloat(num2);

}

function product(num1,num2){
    return parseFloat(num1) * parseFloat(num2);

}

function divide(num1,num2){
    if( num2 == 0 ){
        return NaN;

    }
    return parseFloat(num1) / parseFloat(num2);

}


function operate(num1,operator,num2){
if(operator == "+"){
   return sum(num1,num2);

} else if(operator == "-"){
    return sub(num1,num2);

}
else if(operator == "*"){
    return product(num1,num2);

}
else if(operator == "/"){
    return divide(num1,num2);

}
else{
    return null;
    
}
}












