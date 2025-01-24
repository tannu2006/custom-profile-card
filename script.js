
// Get elements

const contactBtn = document.getElementById("contactBtn");
const popupModal = document.getElementById("popupModal");
const closeModal = document.getElementById("closeModal");

// Open the modal when the button is clicked
contactBtn.addEventListener("click", function () {
  popupModal.style.display = "block";
});

// Close the modal when the close button is clicked
closeModal.addEventListener("click", function () {
  popupModal.style.display = "none";
});

// Close the modal when clicking outside the modal content
window.addEventListener("click", function (event) {
  if (event.target === popupModal) {
    popupModal.style.display = "none";
  }
});
