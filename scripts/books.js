const loginData = JSON.parse(localStorage.getItem("user"));

if (loginData) {
  if (loginData.email != "user@empher.com") {
    alert("User not logged in");
    window.location.href = "index.html";
  }
}
