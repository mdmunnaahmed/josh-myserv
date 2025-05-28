"user strict";

document.querySelectorAll(".category-list button").forEach((button) => {
  button.addEventListener("click", function () {
    document.querySelectorAll(".category-list button").forEach((btn) => {
      btn.classList.remove("btn-primary");
      btn.classList.add("btn-white");
    });
    this.classList.remove("btn-white");
    this.classList.add("btn-primary");
  });
});

document.querySelectorAll(".price-wrapper .btn").forEach((button) => {
  button.addEventListener("click", function () {
    this.classList.toggle("btn-success");
    this.classList.toggle("btn-outline-success");
  });
});

// Active Path Active
var path = location.pathname.split("/");
var current = location.pathname.split("/")[path.length - 1];
$(".footer-links li a").each(function () {
  if ($(this).attr("href").indexOf(current) !== -1 && current != "") {
    $(this).addClass("active");
  }
});

// Toggle menu and overlay
document.querySelector(".menu-toggler").addEventListener("click", function () {
  document.querySelector(".overlay")?.classList.toggle("active");
  document.querySelector(".menu-wrapper")?.classList.toggle("active");
});

// Hide menu and overlay when clicking on overlay
document.querySelector(".overlay")?.addEventListener("click", function () {
  this.classList.remove("active");
  document.querySelector(".menu-wrapper")?.classList.remove("active");
});
