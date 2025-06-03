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

document.querySelectorAll(".text-shift-counter").forEach((counter) => {
  const values = counter.querySelectorAll(".value");
  const minus = counter.querySelector("button:first-of-type");
  const plus = counter.querySelector("button:last-of-type");

  if (!values.length || !minus || !plus) return;

  // Set default index from 'selected' attribute or 0
  let currentIndex = Array.from(values).findIndex((v) => v.classList.contains("selected"));
  if (currentIndex === -1) currentIndex = 0;

  const updateDisplay = () => {
    values.forEach((val, i) => {
      val.style.display = i === currentIndex ? "inline" : "none";
      val.classList.toggle("active", i === currentIndex);
    });

    const currentText = values[currentIndex].textContent.trim().toLowerCase();
    const selectionItem = counter.closest(".selection-item");

    if (selectionItem) {
      const checkbox = selectionItem.querySelector(".form-check-input");
      const isChecked = checkbox ? checkbox.checked : false;
      const shouldBeInactive = currentText === "none" && !isChecked;
      selectionItem.classList.toggle("inactive", shouldBeInactive);
    }
  };

  minus.addEventListener("click", () => {
    if (currentIndex > 0) {
      currentIndex--;
      updateDisplay();
    }
  });

  plus.addEventListener("click", () => {
    if (currentIndex < values.length - 1) {
      if (currentIndex == 0) {
        currentIndex = 1;
      }
      currentIndex++;
      updateDisplay();
    }
  });

  const checkbox = counter.closest(".selection-item")?.querySelector(".form-check-input");
  checkbox?.addEventListener("change", updateDisplay);

  updateDisplay(); // Initial
});

// update cart price
document.querySelectorAll(".add-to-cart-btn").forEach((btn) => {
  const counter = btn.querySelector(".counter");
  const input = counter?.querySelector(".value");
  const minus = counter?.querySelector(".minus");
  const plus = counter?.querySelector(".plus");
  const total = btn.querySelector(".cart-total");

  if (!counter || !input || !minus || !plus || !total) return;

  const unitPrice = parseFloat(btn.getAttribute("data-price")) || 15;
  const max = parseInt(input.getAttribute("data-max")) || 99;

  const updatePrice = () => {
    const quantity = parseInt(input.value) || 0;
    total.textContent = `$${(quantity * unitPrice).toFixed(2)}`;
    minus.classList.toggle("inactive", quantity <= 1);
    plus.classList.toggle("inactive", quantity >= max);
  };

  minus.addEventListener("click", () => {
    let value = parseInt(input.value) || 1;
    updatePrice();
    if (value > 1) {
      // input.value = value - 1;
    }
  });

  plus.addEventListener("click", () => {
    let value = parseInt(input.value) || 1;
    updatePrice();
    if (value < max) {
      // input.value = value + 1;
    }
  });

  // Initial setup
  updatePrice();
});

// share btn click func
document.addEventListener("DOMContentLoaded", function () {
  const shareBtn = document.querySelector(".share-btn");

  shareBtn?.addEventListener("click", async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: "Group Order",
          text: "Join my group order!",
          url: window.location.href, // or your custom URL
        });
      } catch (err) {
        console.error("Share canceled or failed:", err);
      }
    } else {
      alert("Sharing is not supported on this device/browser.");
    }
  });
});
