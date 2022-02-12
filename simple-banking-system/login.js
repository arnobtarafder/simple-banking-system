document.getElementById("login-submit").addEventListener("click", function(){
    // get user email 
    const emailField = document.getElementById("user-email");
    const userEmail = emailField.value;
    // get user password 
    const passwordField = document.getElementById("user-password").value;

    // check email and pasword 
    if (userEmail == "rmtarnob@gmail.com" && passwordField == "Bangladesh 71 War") {
        // console.log("valid user");
        window.location.href = "banking.html"
    }
    else {
        alert("are you real?");
    }

})
