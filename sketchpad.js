var gridDimension = 16; // Eventually allow this to be set by user.
var gridWidth = 960;

$(document).ready(function(){
	//$("body").append('<div id="container" style="width:'+gridWidth+'px"></div>'); //fixed size container to hold the grid
	for (i=1;i<=gridDimension*gridDimension;i++) {
		$("#container").append('<div style="height:'+gridWidth/gridDimension+'px; width:'+gridWidth/gridDimension+'px; float:left"></div>');
	}

	$(document).on('mouseenter', 'div div', function() {
        $(this).addClass('hovered');
    });
    $(document).on('mouseleave', 'div div', function() {
        $(this).removeClass('hovered');
    });
});