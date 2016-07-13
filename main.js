
$( document ).ready(function() {
	// Fade animation for first view
    $('.homeView').fadeTo('slow', 1);

    $('#homeButton').click(function() {
    	$('.navButton').removeClass('active');
    	$('#homeButton').addClass('active');
    	$('.viewSelector').hide();
    	$('.homeView').fadeTo('slow', 1);
    });
    $('#photographyButton').click(function() {
    	$('.navButton').removeClass('active');
    	$('#photographyButton').addClass('active');
    	$('.viewSelector').hide();
    	$('.photographyView').fadeTo('slow', 1);
    	var $grid = $('.grid').imagesLoaded( function() {
		  $grid.masonry({
		    itemSelector: '.grid-item',
		    percentPosition: true,
		    columnWidth: '.grid-sizer'
		  }); 
		});
    });
    $('#aboutButton').click(function() {
    	$('.navButton').removeClass('active');
    	$('#aboutButton').addClass('active');
    	$('.viewSelector').hide();
    	$('.aboutView').fadeTo('slow', 1);
    });

});