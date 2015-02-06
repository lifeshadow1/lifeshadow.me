// Adapted from http://cgit.drupalcode.org/project_issue_file_test/commit/?id=02745ff845bb6ad173efaa8de1331d0f549b995c.

var kkeys = [];
var konami = "38,38,40,40,37,39,37,39,66,65";
var remei = 'http://www.blogcdn.com/massively.joystiq.com/media/2009/12/os786_rom_580.jpg';

$(window).keydown(function(event) {
  kkeys.push(event.keyCode);
  if (kkeys.toString().indexOf(konami) >= 0) {
    // Subtract Remei width and height to ensure that he is only spawned
    // inside the window area and does not cause it to scroll.
    var width = $(window).width() - 175;
    var height = $(window).height() - 200;
    var max = 500;
    var count = 0;

    spawnRemei(width, height, max, count);
  }
});

/**
 * Spawn a Remei at a random location on the screen.
 */
function spawnRemei(width, height, max, count) {
  // Generate random location.
  var x = Math.floor(Math.random() * width);
  var y = Math.floor(Math.random() * height);
  var rotation = Math.floor(Math.random() * 360);

  // Append Remei image tag to HTML body.
  $('body').append('<img src="' + remei + '" style="position: absolute; z-index: 1000; overflow: hidden; left: ' + x + 'px; top: ' + y + 'px; transform: rotate(' + rotation + 'deg);"/>');
  count++;

  // Queue another Remei.
  if (count < max) {
    setTimeout(function() {
      spawnRemei(width, height, max, count)
    }, 200);
  }
}
