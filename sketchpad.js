var gridWidth = 960; // Width of the grid on screen in pixels.

// Function for adding the div squares into the container.
var drawGrid = function(size) {
		for (i=1;i<=size*size;i++) {
		$("#container").append('<div style="height:'+gridWidth/size+'px; width:'+gridWidth/size+'px; float:left"></div>');
	}
}

$(document).ready(function(){
	drawGrid(prompt("How many squares should the grid be wide?")); // Draw initial div grid

	// When the user runs mouse over a div, it will change color.
	$(document).on('mouseenter', 'div div', function() {
        $(this).addClass('hovered');
    });

	// When the reset button is pressed remove all the existing divs from inside the container and draw a new grid based on user response
    $('button').click(function() {
        $('#container').empty();
        drawGrid(prompt("How many squares should the grid be wide?"));
    });
});