function navbar() {
  let nav = `
  <nav>
      <div class="logo">
        <h2>Book Management App</h2>
      </div>
      <div class="nav_links">
        <a href="index.html">Home</a>
        <a href="admin.html">Admin</a>
        <a href="books.html">Books</a>
      </div>
    </nav>`;
  document.getElementById("nav").innerHTML = nav;
}
navbar();
