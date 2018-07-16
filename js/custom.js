

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
