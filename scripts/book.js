const loginData = JSON.parse(localStorage.getItem("admin"));

if (loginData) {
  if (loginData.email !== "admin@empher.com") {
    alert("Admin not logged in");
    window.location.href = "index.html";
  }
}

let bookForm = document.getElementById("book_form");
bookForm.addEventListener("submit", function () {
  event.preventDefault();
  let title = document.getElementById("title").value;
  let author = document.getElementById("author").value;
  let catagory = document.getElementById("dropdown").value;

  fetch();
});
