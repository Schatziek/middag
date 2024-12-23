// Get modal elements
const modal = document.getElementById('image-modal');
const modalImg = document.getElementById('modal-img');
const closeModal = document.querySelector('.close');

// Add click listener to all images with the class "clickable-image"
document.querySelectorAll('.clickable-image').forEach((image) => {
  image.addEventListener('click', () => {
    modal.style.display = 'flex'; // Show the modal
    modalImg.src = image.src; // Set the modal image source to the clicked image
  });
});

// Close modal when clicking the "X"
closeModal.addEventListener('click', () => {
  modal.style.display = 'none';
});

// Close modal when clicking outside the image
modal.addEventListener('click', (event) => {
  if (event.target === modal) {
    modal.style.display = 'none';
  }
});