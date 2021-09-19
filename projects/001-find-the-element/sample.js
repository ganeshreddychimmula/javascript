const random = Math.floor((Math.random() * 100) + 1);
// document.getElementById("target").innerHTML = random;
// let event = document.getElementById("submit");
let count = 1;
let previous = "";
function outp(){
    // we get input in text format so we convert into integer
    let inp = parseInt(document.getElementById("inp").value); 
    if(count === 11){// if number of attempt are greater than 9 we dont allow any more inputs
        document.getElementById("output").innerHTML = "You are out of chances";
        document.getElementById("previous").innerHTML = inp;
        document.getElementById("inp").value = "";
        document.getElementById("attempts").innerHTML = "";
        return; 
    }
    if(inp === random){
        document.getElementById("output").innerHTML = "Congrats! you won!";
        document.getElementById("previous").innerHTML = inp;
        document.getElementById("inp").value = "";
        document.getElementById("attempts").innerHTML = "";
        return;
    }
    else if(inp > random){
        document.getElementById("output").innerHTML = "too big";
    }
    else{
        document.getElementById("output").innerHTML = "too small";
    }
    
    previous = document.getElementById("previous").innerHTML = inp + "  " + previous;
    document.getElementById("inp").value = "";
    document.getElementById("attempts").innerHTML = 10 - count;
    count++;
}


