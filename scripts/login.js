let form = document.getElementById("form");
form.addEventListener("submit", function () {
  event.preventDefault();
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;

  if (email == "admin@empher.com" && password == "empher@123") {
    const loginData = {
      username: email,
      role: "admin",
    };
    localStorage.setItem("admin", JSON.stringify(loginData));
    // localStorage.clear();
    alert("Logged in as Admin.");
    window.location.href = "admin.html";
  } else if (email == "user@empher.com" && password == "user@123") {
    let loginData = {
      username: email,
      role: user,
    };
    localStorage.setItem("user", JSON.stringify(loginData));
    alert("Logged in as User.");
    window.location.href = "books.html";
  } else alert("Invalid login Details, please try again...");
});
