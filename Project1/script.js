let email = document.querySelector(".email_input");
let cutbutton = document.querySelector(".cut");
let message = document.querySelector(".message");
email.addEventListener("input",() =>{
    const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if(regex.test(String(email.value).toLowerCase())){
            cutbutton.innerHTML= "&#10003;";
            cutbutton.style.backgroundColor = "green";
            message.innerHTML = "Email is valid";
            message.style.color = "green"
        }else{
            cutbutton.innerText = "X";
            cutbutton.style.backgroundColor = "red";
            message.innerHTML = "Email is not valid"
            message.style.color = "red"
        }
        if (email.value === "") {
            cutbutton.innerHTML= "";
            cutbutton.style.backgroundColor = "";
            message.innerHTML = ""
        }
        
})
cutbutton.addEventListener('click',()=>{
    email.value = "";
    cutbutton.innerHTML= "";
    cutbutton.style.backgroundColor = "";
    message.innerHTML = ""
})