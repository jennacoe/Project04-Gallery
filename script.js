var $lightbox = $('<div id="lightbox"></div>');
var $image = $('<img>');
var $caption = $('<p></p>');
var $rightArrow = $('<span>></span>');
var $LeftArrow = $('<span><</span>');


$lightbox.append($image);
$lightbox.append($caption);
$lightbox.append($rightArrow);
$lightbox.append($LeftArrow);
$("body").append($lightbox);

$("#gallery a").click(function(event){
	event.preventDefault();
	var pictureSrc = $(this).attr("href");
	$image.attr("src", pictureSrc);
	$lightbox.show();
	var captionText = $(this).next();
	$caption.text("captionText");
});