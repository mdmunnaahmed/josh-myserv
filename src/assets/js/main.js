"user strict";

// Preloader
$(window).on("load", function () {
  $(".preloader").fadeOut(1000);
});

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
