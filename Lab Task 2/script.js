var wrongCount = 0;

var form = document.getElementById("loginForm");

form.addEventListener("submit", function(e) {

    e.preventDefault();

    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    var error = document.getElementById("error");
    var count = document.getElementById("count");

    if (email.indexOf("@") == -1) {
        error.innerHTML = "Email must contain @";
        wrongCount = wrongCount + 1;
    }

    else if (password.length < 6) {
        error.innerHTML = "Password must be at least 6 characters";
        wrongCount = wrongCount + 1;
    }

    else if (password.indexOf("#") == -1) {
        error.innerHTML = "Password must contain #";
        wrongCount = wrongCount + 1;
    }

    else {
        error.innerHTML = "Login Successful ✅";
    }

    count.innerHTML = "Wrong submit count: " + wrongCount;

});