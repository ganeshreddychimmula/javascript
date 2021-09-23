// console.log("hi there");
const mssg = document.querySelector("#mssg");
mssg.style.display = "block"; 
mssg.style.width ="90%" ;
let encryp ;
document.querySelector("form").addEventListener("submit", function(event){
    event.preventDefault();
    /*
    By default, when form is submitted it trys to send data to server and refreshes the page
    to prevent that we use above line of code
    */
});
const button = document.querySelector("button");
const link = document.querySelector("#sharedlink");
button.onclick = function(){
    // coverting mssg to base64 format
    encryp = btoa(mssg.value);
    link.value = window.location.href +"#"+ encryp;
    // link.focus();
    document.querySelector("#linkpage").style.display="block";
    document.querySelector("#firstpage").style.display="none";
    
    //console.log(encryp);
};
