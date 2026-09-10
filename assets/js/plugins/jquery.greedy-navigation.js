/*
* Greedy Navigation
*
* http://codepen.io/lukejacksonn/pen/PwmwWV
*
* Modified: below the $large breakpoint (925px) every link is forced into the
* hidden (hamburger) list. Previously this was attempted from CSS by giving the
* visible links an enormous width, which made updateNav() recurse until the
* call stack overflowed.
*/

var $nav = $('#site-nav');
var $btn = $('#site-nav button');
var $vlinks = $('#site-nav .visible-links');
var $hlinks = $('#site-nav .hidden-links');

var greedyBreakpoint = 925;

var breaks = [];

function updateNav() {

  var forceCollapse = $(window).width() < greedyBreakpoint;

  // Below the breakpoint everything lives in the hamburger menu.
  if (forceCollapse) {
    while ($vlinks.children().length > 0) {
      breaks.push($vlinks.width());
      $vlinks.children().last().prependTo($hlinks);
    }
    $btn.removeClass('hidden');
    $btn.attr("count", breaks.length);
    return;
  }

  var availableSpace = $btn.hasClass('hidden') ? $nav.width() : $nav.width() - $btn.width() - 30;

  // The visible list is overflowing the nav
  if($vlinks.width() > availableSpace) {

    // Nothing left to move out; bail rather than recursing forever.
    if($vlinks.children().length === 0) {
      $btn.attr("count", breaks.length);
      return;
    }

    // Record the width of the list
    breaks.push($vlinks.width());

    // Move item to the hidden list
    $vlinks.children().last().prependTo($hlinks);

    // Show the dropdown btn
    if($btn.hasClass('hidden')) {
      $btn.removeClass('hidden');
    }

  // The visible list is not overflowing
  } else {

    // There is space for another item in the nav
    if(availableSpace > breaks[breaks.length-1]) {

      // Move the item to the visible list
      $hlinks.children().first().appendTo($vlinks);
      breaks.pop();
    }

    // Hide the dropdown btn if hidden list is empty
    if(breaks.length < 1) {
      $btn.addClass('hidden');
      $hlinks.addClass('hidden');
    }
  }

  // Keep counter updated
  $btn.attr("count", breaks.length);

  // Recur if the visible list is still overflowing the nav
  if($vlinks.width() > availableSpace && $vlinks.children().length > 0) {
    updateNav();
  }

}

// Window listeners

$(window).resize(function() {
  updateNav();
});

$btn.on('click', function() {
  $hlinks.toggleClass('hidden');
  $(this).toggleClass('close');
});

updateNav();
