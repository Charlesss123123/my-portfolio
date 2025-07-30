// Modal functionality for project cards
const modal = document.getElementById('modal');
const modalMedia = document.getElementById('modal-media');
const closeBtn = document.querySelector('.modal .close');

// Open modal on project card click
document.querySelectorAll('.project-card.clickable').forEach(card => {
  card.addEventListener('click', function() {
    const mediaType = this.getAttribute('data-media');
    const src = this.getAttribute('data-src');
    let content = '';
    if (mediaType === 'video') {
      content = `<video controls autoplay style="max-width:100%;border-radius:12px;"><source src='${src}' type='video/mp4'>Your browser does not support the video tag.</video>`;
    } else if (mediaType === 'image') {
      content = `<img src='${src}' alt='Project Reference' style="max-width:100%;border-radius:12px;" />`;
    }
    modalMedia.innerHTML = content;
    modal.style.display = 'block';
  });
});

// Close modal on X click or outside click
closeBtn.onclick = function() {
  modal.style.display = 'none';
  modalMedia.innerHTML = '';
};
window.onclick = function(event) {
  if (event.target === modal) {
    modal.style.display = 'none';
    modalMedia.innerHTML = '';
  }
};
