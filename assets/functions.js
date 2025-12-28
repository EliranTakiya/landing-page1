jQuery(document).ready(function($) {
    "use strict";
    $('#testimonials-list').owlCarousel({
        loop: true,
        center: true,
        items: 3,
        margin: 0,
        autoplay: true,
        dots:true,
        autoplayTimeout: 6500,
        smartSpeed: 450,
        touchDrag: true,        // Enable touch drag
        mouseDrag: true,       //enable mouse drag
        // 23/12/25
        // autoHeight: true, 
        responsive: {
          0: {
            items: 1,
          },
          768: {
            items: 2
          },
          1170: {
            items: 3
          }
        }
    });
});

// function toBottom()
// {
//     window.scrollTo(0, document.body.scrollHeight);
// }
// window.onload=toBottom;


function toBottom() {
  // First ensure everything is loaded
   window.scrollTo(0, document.body.scrollHeight);

  // Immediately scroll to the bottom of the page
  document.documentElement.scrollTop = document.body.scrollHeight;


  // Delay scroll to make sure everything is loaded
  setTimeout(function() {
    
      window.scrollTo(0, document.body.scrollHeight);
  }, 100); // 100ms delay (you can adjust the delay if necessary)
}
  // Add another timeout to ensure the scroll happens when the page has fully rendered
  setTimeout(function() {
    window.scrollTo(0, document.body.scrollHeight);
  }, 200);
// In case of page load delay, ensure to check the scroll after everything is loaded
window.onload = function() {
  setTimeout(function() {
    toBottom();
  }, 500);  // Ensure page elements have settled after load (adjust delay if necessary)
};

// Ensure this works for all screen sizes and after the page is fully loaded
window.onload = toBottom;

const navToggle = document.querySelector('.nav-toggle');
const body = document.body;

navToggle.addEventListener('change', () => {
    // Wait for the next "paint" cycle before applying styles (sometimes helps with timing issues)
    setTimeout(() => {
        if (navToggle.checked) {
            body.classList.add('menu-open');
        } else {
            body.classList.remove('menu-open');
        }
    }, 50);  // 50ms delay to let styles apply
});



