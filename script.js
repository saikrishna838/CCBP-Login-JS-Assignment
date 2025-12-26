document.getElementById('name').addEventListener("blur", function() {
    let nameInput = document.getElementById("name").value.trim();
    let nameErrMsg = document.getElementById("nameErrMsg");
    
    if (nameInput === ""){
        nameErrMsg.textContent = "Required*";
    }else {
        nameErrMsg.textContent = "";
        
    }
    
});

document.getElementById("password").addEventListener("blur", function () {
    let passwordInput = document.getElementById("password").value.trim();
    let passwordErrMsg = document.getElementById("passwordErrMsg");
    
    if(passwordInput === "") {
        passwordErrMsg.textContent = "Required*";
        
    }else {
        passwordErrMsg.textContent = "";
        
    }
});

document.getElementById("myForm").addEventListener("submit", function (event){
    event.preventDefault();
    
    let nameInput = document.getElementById("name").value.trim();
    let passwordInput = document.getElementById("password").value.trim();
    let nameErrMsg = document.getElementById("nameErrMsg");
    let passwordErrMsg = document.getElementById("passwordErrMsg");
    let resultMsg = document.getElementById("resultMsg");
    
    let isValid = true;
    
    if (nameInput === "" ) {
        nameErrMsg.textContent = "Required*";
        isValid = false;
    } else {
        nameErrMsg.textContent = "";
    }
    
    if (passwordInput === "" ) {
        passwordErrMsg.textContent = "Required*";
        isValid = false;
    } else {
        passwordErrMsg.textContent = "";
    }
    
    if (isValid) {
        resultMsg.textContent = "Login Success";
   
    } else {
        resultMsg.textContent = "Fill in the required details";
    }
      

    
});