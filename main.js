// Home is initially hidden
$( document ).ready(function() {
    console.log( "ready!" );
    $(".home").fadeTo('slow', 1);
    console.log( "faded in!" );
});