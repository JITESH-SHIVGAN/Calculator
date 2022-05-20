
var outputBox=document.getElementById('output');
var input=null;

function numeric(value){
    if(parseFloat(outputBox.textContent)==""){
        outputBox.innerText=value;
        input=outputBox.innerText;
    }
    else if(value== '1' || value== '2' || value== '3' || value== '4' || value== '5' || value== '6' || value=='7' || value=='8' || value =='9'){
        if(outputBox.textContent=='+' || outputBox.textContent=='-' || outputBox.textContent=='/' || outputBox.textContent=='*' || outputBox.textContent=='%'){
            outputBox.innerText=value;
            input=input+value;    
        }
        else{
            outputBox.innerText=outputBox.innerText+value;   
            input=input+value; 
        }
    }

    if(value=='+'){
        outputBox.innerText=value;
        input=input+value;
        console.log(input);
    }

    if(value=='-'){
       
        outputBox.innerText=value;
        input=input+value;
    }

    if(value=='*'){
        outputBox.innerText=value;
        input=input+value;
    }

    if(value=='/'){
        outputBox.innerText=value;
        input=input+value;
    }

    if(value=='%'){
        outputBox.innerText=value;
        input=input+value;
    }   

    if(value=='='){
        console.log(input);
        var result=eval(input);
        outputBox.innerText=result;
    }

    if(value=='AC'){
        outputBox.innerText="";
        input='';
    }
}

