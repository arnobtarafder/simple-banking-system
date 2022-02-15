let changeColor   = document.getElementById('Color'),
      colors      = ['#000048', '#B5C7A4', '#DCAFDE', '#A4DADA', '#B79F9F'];
let   colorIndex  = 0;

changeColor.addEventListener('click', () => {
  document.body.style.backgroundColor = colors[colorIndex];      
  colorIndex = (colorIndex + 1) % colors.length
});
document.getElementById("Village").addEventListener("mousemove", function() {
    // document.body.style.color = "#198E1E";
})

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
