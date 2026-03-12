document.getElementById("btn-sign")
.addEventListener("click",function(){
    const userNameInput = document.getElementById("users");
    const userName = userNameInput.value;
    

    const passwordInput = document.getElementById("password");
    const password = passwordInput.value;


    if(userName == "admin" && password == "admin123"){
        alert("Longin success");
        window.location.assign("./home.html")
    }

   
    else{
        alert("Please Enter valid username or password");
        return;

    }


})