

// js code for lightbox

jQuery(function($) {
  $(document).on('click', '.lightboxgallery-gallery-item', function(event) {
    event.preventDefault();
    $(this).lightboxgallery({
      showCounter: true,
      showTitle: true,
      showDescription: true
    });
  });
});


// js code for image slider

jQuery(document).ready(function($) {
    jQuery('.single-item').slick({
          arrows: true,
          autoplay: true,
          autoplaySpeed: 1000
      });

    });

//js code for modal-content of facebook icon

document.getElementById('fb-button').addEventListener('click',
function() {
  $('body').toggleClass('open-modal');
  document.querySelector('.fb-modal').style.display = 'flex';
});

document.querySelector('.cancel').addEventListener('click',
function() {
  $('body').toggleClass('open-modal');
  document.querySelector('.fb-modal').style.display = 'none';
});

document.querySelector('.modal-button').addEventListener('click',
function() {
  $('body').toggleClass('open-modal');
  document.querySelector('.fb-modal').style.display = 'none';
});
