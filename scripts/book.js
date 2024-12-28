import { baseurl } from "./baseurl.js";

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
  let bookObj = {
    title,
    author,
    catagory,
    status: false,
  };
  fetch(`${baseurl}/books`, {
    method: "POST",
    headers: {
      "content-Type": "application/json",
    },
    body: JSON.stringify(bookObj),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      alert("Book Added Successfully");
      bookForm.reset();
    })
    .catch((error) => console.log(error));
});

function diplayBooks(arr) {
  let cont = document.getElementById("cont").innerHTML;
  cont = "";
  let card = arr.map((ele, index) => {
    let title = document.createElement("h3");
    title.textContent(ele.title);
    let author = document.createElement("h3");
    author.textContent(ele.author);
    let catagory = document.createElement("h3");
    catagory.textContent(ele.catagory);
    let status = document.createElement("h3");
    status.textContent = ele.status == true ? "Varified" : "Not varified";

    let varifyBtn = document.createElement("button");
    varifyBtn.textContent = "Varify Book";
    varifyBtn.addEventListener("click", function () {
      varifyBtn(ele);
    });

    let dltBtn = document.createElement("button");
    dltBtn.textContent = "Delete Book";
    dltBtn.addEventListener("click", function () {
      dltBtn(ele);
    });
    card.append(title, author, catagory, status);
    cont.append(card);
  });
}
