const loginBtn = document.getElementById("loginBtn");

loginBtn.addEventListener("click", function () {

    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();

    if (username === "rahim" && password === "123456") {

        alert("Login Successful ✅");

        window.location.href = "dashboard.html";

    } else {

        alert("Wrong Username or Password ❌");

    }

});
