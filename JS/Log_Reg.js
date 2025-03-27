// Start motion blur
function go() {
    var move = document.getElementById("mo-blr")
    move.classList.toggle("move")
}
// End motion blur

// Start Togggle Log/Reg
var card1 = document.querySelector(".card1")
var loginLink = document.querySelector(".login-link")
var registerLink = document.querySelector(".register-link")

registerLink.addEventListener("click", () => {
    card1.classList.add("active")
})
loginLink.addEventListener("click", () => {
    card1.classList.remove("active")
})
// End Togggle Log/Reg

// Start Registeration LocalStorage
function userData() {
    // Get values from input fields
    let userName = document.getElementById("userName").value;
    let email = document.getElementById("reg_email").value;
    let pass = document.getElementById("reg_pass").value;

    // Retrieve userInfo from local storage or initialize as empty array if not found
    let userInfo = JSON.parse(localStorage.getItem("users")) || [];

    // Check if userName or email already exists
    if (userInfo.some(v => v.userName === userName || v.email === email)) {
        alert("The User-Name or Email You Entered Is Already Used, pls LogIn");
    } else {
        alert("Regitration Done!, Let's LogIn!")
        // Add new user information
        userInfo.push({
            userName: userName,
            email: email,
            pass: pass,
        });

        // Save updated userInfo to local storage
        localStorage.setItem("users", JSON.stringify(userInfo));

        // Redirect to another page
    }
}
// End Registeration LocalStorage

// Start Login LocalStorage
function login() {
    email = document.getElementById("logemail").value
    pass = document.getElementById("logpass").value
    let users_arr = new Array()
    users_arr = JSON.parse(localStorage.getItem("users"))
    ?JSON.parse(localStorage.getItem("users")):[];
    if (users_arr.some(v => v.email == email && v.pass == pass )) {
        alert("Login Success!")
        let currentUser = users_arr.filter(v => {
            return v.emil == email && v.pass == pass
        })[0]
         window.location.href="../Homepage.html"
    }else {
        alert("LogIn Failed")
    }

}
// End Login LocalStorage
