const display=document.querySelector("#display");
const buttons=document.querySelectorAll(".btn");

let input="";
let result;
buttons.forEach((btn)=>{
    btn.addEventListener("click",(e)=>{
        if(e.target.value==="="){
            result=eval(input);
            display.value=result;
        }
        else if(e.target.value==="AC"){
            input="";
            display.value=input;
        }
        else if(e.target.value==="DE"){
            input=input.substring(0,input.length-1);
            display.value=input;
        }
        else{
            input +=e.target.value;
            display.value=input;
        }
    });

});