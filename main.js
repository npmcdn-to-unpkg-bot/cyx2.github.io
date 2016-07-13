
$( document ).ready(function() {
	// Fade animation for first view
    $('.homeView').fadeTo('slow', 1);

    $('#homeButton').click(function() {
    	$('.navButton').removeClass('active');
    	$('#homeButton').addClass('active');
    	$('.views').hide();
    	$('.homeView').fadeTo('slow', 1);
    });
    $('#photographyButton').click(function() {
    	$('.navButton').removeClass('active');
    	$('#photographyButton').addClass('active');
    	$('.views').hide();
    	$('.photographyView').fadeTo('slow', 1);
    });
    $('#aboutButton').click(function() {
    	$('.navButton').removeClass('active');
    	$('#aboutButton').addClass('active');
    	$('.views').hide();
    	$('.aboutView').fadeTo('slow', 1);
    });
});