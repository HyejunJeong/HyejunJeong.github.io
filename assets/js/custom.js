/**
 * Main JS file for Scriptor behaviours
 */

// Image Lightbox for Publications - Load this first
document.addEventListener('DOMContentLoaded', function() {
  console.log('Lightbox script loaded');

  // Create lightbox elements
  const lightbox = document.createElement('div');
  lightbox.id = 'image-lightbox';
  lightbox.innerHTML = `
    <div class="lightbox-backdrop"></div>
    <div class="lightbox-content">
      <img src="" alt="" class="lightbox-image">
      <button class="lightbox-close">&times;</button>
    </div>
  `;
  document.body.appendChild(lightbox);
  console.log('Lightbox element created');

  const lightboxImg = lightbox.querySelector('.lightbox-image');
  const lightboxBackdrop = lightbox.querySelector('.lightbox-backdrop');
  const lightboxClose = lightbox.querySelector('.lightbox-close');

  // Add click handlers to all publication images
  const pubImages = document.querySelectorAll('.pub-image-placeholder img');
  console.log('Found ' + pubImages.length + ' publication images');

  pubImages.forEach(function(img) {
    img.style.cursor = 'pointer';
    img.addEventListener('click', function(e) {
      console.log('Image clicked:', this.src);
      lightboxImg.src = this.src;
      lightboxImg.alt = this.alt;
      lightbox.classList.add('active');
      document.body.style.overflow = 'hidden';
      e.preventDefault();
    });
  });

  // Close lightbox handlers
  function closeLightbox() {
    console.log('Closing lightbox');
    lightbox.classList.remove('active');
    document.body.style.overflow = '';
  }

  lightboxClose.addEventListener('click', closeLightbox);
  lightboxBackdrop.addEventListener('click', closeLightbox);

  // Close on escape key
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && lightbox.classList.contains('active')) {
      closeLightbox();
    }
  });
});

// Responsive video embeds
if (typeof reframe !== 'undefined') {
  let videoEmbeds = [
    'iframe[src*="youtube.com"]',
    'iframe[src*="vimeo.com"]'
  ];
  reframe(videoEmbeds.join(','));
}

// Menu on small screens
let menuToggle = document.querySelectorAll('.menu-toggle');
if (menuToggle) {
  for (let i = 0; i < menuToggle.length; i++) {
    menuToggle[i].addEventListener('click', function (e) {
      document.body.classList.toggle('menu--opened');
      e.preventDefault();
    }, false);
  }
}
