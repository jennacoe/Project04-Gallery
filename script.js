var $lightbox = $('<div id="lightbox"></div>');
var $image = $('<img id="lightboxImage">');
var $nextImage = $('<img>');
var $caption = $('<p></p>');
var $rightArrow = $('<a id="rightArrow" href="#">></a>');
var $leftArrow = $('<a id="leftArrow" href="#"><</a>');

$lightbox.append($image);
$lightbox.append($caption);
$lightbox.append($leftArrow);
$lightbox.append($rightArrow);
$("body").append($lightbox);

function getSelectedImage (selectedImage) {  
    var lightboxImageLocation = $(selectedImage).children("a").attr("href");
    $image.attr("src", lightboxImageLocation);
}






$(".thumbnail").click(function(event){
	event.preventDefault();
	$lightbox.show();
	getSelectedImage(this);
	var captionText = $(this).next().text();
	$caption.text(captionText);
});







$(document).keydown(function(e){
    if (e.keyCode == 39) { 
       $('a#rightArrow').trigger('click');
    }

    else if (e.keyCode == 37) {
         $('a#leftArrow').trigger('click');
    }
});