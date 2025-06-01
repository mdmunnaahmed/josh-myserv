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
const menuToggler = document.querySelector(".menu-toggler");
const overlay = document.querySelector(".overlay");
const menuWrapper = document.querySelector(".menu-wrapper");

if (menuToggler && overlay && menuWrapper) {
  menuToggler.addEventListener("click", function () {
    overlay.classList.toggle("active");
    menuWrapper.classList.toggle("active");
  });

  overlay.addEventListener("click", function () {
    this.classList.remove("active");
    menuWrapper.classList.remove("active");
  });
}

// counter
const counters = document.querySelectorAll(".counter");
if (counters.length > 0) {
  counters.forEach((counter) => {
    const input = counter.querySelector(".value");
    const minus = counter.querySelector(".minus");
    const plus = counter.querySelector(".plus");

    // Ensure all required elements exist
    if (!input || !minus || !plus) return;

    const max = parseInt(input.getAttribute("data-max")) || 5;

    const updateState = () => {
      const value = parseInt(input.value) || 0;

      minus.classList.toggle("inactive", value <= 0);
      plus.classList.toggle("inactive", value >= max);
    };

    minus.addEventListener("click", () => {
      let value = parseInt(input.value) || 0;
      if (value > 0) {
        input.value = value - 1;
        updateState();
      }
    });

    plus.addEventListener("click", () => {
      let value = parseInt(input.value) || 0;
      if (value < max) {
        input.value = value + 1;
        updateState();
      }
    });

    updateState(); // Initial state
  });
}

// modal toggle
document.addEventListener("DOMContentLoaded", function () {
  // Open modal
  document.querySelectorAll("[data-modal]").forEach((button) => {
    button.addEventListener("click", () => {
      const modalId = button.getAttribute("data-modal");
      const modal = document.getElementById(modalId);
      if (modal) modal.classList.add("show");
    });
  });

  // Close modal on close button
  document.querySelectorAll(".modal-close").forEach((closeBtn) => {
    closeBtn.addEventListener("click", () => {
      const modal = closeBtn.closest(".custom-modal");
      if (modal) modal.classList.remove("show");
    });
  });

  // Close modal on wrapper click (but not inner content)
  document.querySelectorAll(".custom-modal").forEach((modal) => {
    modal.addEventListener("click", function (e) {
      const inner = modal.querySelector(".single-page-inner");
      if (!inner.contains(e.target)) {
        modal.classList.remove("show");
      }
    });
  });
});

// check if item is active
const selectionItems = document.querySelectorAll(".selection-item");
if (selectionItems.length > 0) {
  selectionItems.forEach((item) => {
    const checkbox = item.querySelector(".form-check-input");
    if (!checkbox) return;

    const updateState = () => {
      item.classList.toggle("inactive", !checkbox.checked);
    };

    checkbox.addEventListener("change", updateState);
    updateState(); // initial load
  });
}
