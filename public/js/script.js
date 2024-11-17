// Script
//------------------------------------------------------------------------------
$(document).ready(function() {
  // console.log('ready!');

  // Reset the window scroll position to top on every page load and re-load
  if (history.scrollRestoration) {
    history.scrollRestoration = 'manual';
  }

  // Fix touch device touch events
  $('body *').on('touchstart', function (){});

  // Set the copyright to the current year in local time
  var currentYear = new Date().getFullYear();
  $('.copyright .year').html(currentYear);
 
}); // End document ready














