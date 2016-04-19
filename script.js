var thisImage;
var thisImageLocation;
var nextImageParent;
var nextImage;
var nextImageLocation;
var previousImageParent;
var previousImage;
var previousImageLocation;
var thisCaption;
var thisCaptionLocation;
var nextCaptionParent;
var nextCaption;
var nextCaptionLocation;
var previousCaptionParent;
var previousCaption;
var previousCaptionLocation;


var $lightbox = $('<div id="lightbox"></div>');
var $image = $('<img id="lightboxImage">');
var $caption = $('<p></p>');
var $rightArrow = $('<a id="rightArrow" href="#">></a>');
var $leftArrow = $('<a id="leftArrow" href="#"><</a>');
var $close = $('<a id="close" href="#">X</a>');

$lightbox.append($image);
$lightbox.append($caption);
$lightbox.append($leftArrow);
$lightbox.append($rightArrow);
$lightbox.append($close);
$("body").append($lightbox);

function getSelectedImage (selectedImage) {  
	thisImage = $(selectedImage).children();
    thisImageLocation = $(thisImage).attr("href");
    $image.attr("src", thisImageLocation);
}

function getNextImage() {
	nextImageParent = $(thisImage).parent().next();
	nextImage = $(nextImageParent).children();
    nextImageLocation = $(nextImage).attr("href");  
    $image.attr("src", nextImageLocation);
    getSelectedImage(nextImageParent);
}

function getPreviousImage() {
	previousImageParent = $(thisImage).parent().prev();
	previousImage = $(previousImageParent).children();
    previousImageLocation = $(previousImage).attr("href");  
    $image.attr("src", previousImageLocation);
    getSelectedImage(previousImageParent);
}

function getSelectedCaption (selectedCaption) {  
	thisCaption = $(selectedCaption).children().children("img");
    thisCaptionLocation = $(thisCaption).attr("alt");
    $caption.text(thisCaptionLocation);
}

function getNextCaption() {
	nextCaptionParent = $(thisCaption).parent().parent().next();
	nextCaption = $(nextCaptionParent).children().children("img");
    nextCaptionLocation = $(nextCaption).attr("alt");  
    $caption.text(nextCaptionLocation);
    getSelectedCaption(nextCaptionParent);
}

function getPreviousCaption() {
	previousCaptionParent = $(thisCaption).parent().parent().prev();
	previousCaption = $(previousCaptionParent).children().children("img");
    previousCaptionLocation = $(previousCaption).attr("alt");  
    $caption.text(previousCaptionLocation);
    getSelectedCaption(previousCaptionParent);
}



$(".thumbnail").click(function(event){
	event.preventDefault();
	$lightbox.show();
	getSelectedImage(this);
	getSelectedCaption(this);
});

$("#rightArrow").click(function(event){
	getNextImage();
	getNextCaption();
});

$("#leftArrow").click(function(event){
	getPreviousImage();
	getPreviousCaption();
});

$("#close").click(function(event){
	$lightbox.hide();
});

//Found this code from http://javascriptbook.com/code/c12/js/filter-search.js
(function() {                             // Lives in an IIFE
  var $imgs = $('.thumbnail img');      // Get the images
  var $search = $('#search_input');       // Get the input element
  var cache = [];                         // Create an array called cache

  $imgs.each(function() {                 // For each image
    cache.push({                          // Add an object to the cache array
      element: this,                      // This image
      text: this.alt.trim().toLowerCase() // Its alt text (lowercase trimmed)
    });
  });

  function filter() {                     // Declare filter() function
    var query = this.value.trim().toLowerCase();  // Get the query
    cache.forEach(function(img) {         // For each entry in cache pass image 
      var index = 0;                      // Set index to 0
      if (query) {                        // If there is some query text
        index = img.text.indexOf(query);  // Find if query text is in there
      }
      img.element.style.display = index === -1 ? 'none' : '';  // Show / hide
    });
  }

  if ('oninput' in $search[0]) {          // If browser supports input event
    $search.on('input', filter);          // Use input event to call filter()
  } else {                                // Otherwise
    $search.on('keyup', filter);          // Use keyup event to call filter()
  }              

}());



