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
    this.classList.toggle("btn-primary");
    this.classList.toggle("btn-outline-primary");
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
