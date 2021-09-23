if(!(window.location.hash === "")){
    let message = window.location.hash
    message = atob(message.substring(1))
    document.querySelector("#linkpage").style.display="none";
    document.querySelector("#firstpage").style.display="none";
    document.querySelector("#lastpage").style.display="block";
    document.querySelector("#lastpage h3").innerHTML = message; 
}
