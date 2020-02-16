$(document).ready(function(){

  // set the target width
  var smallWidth = 100;
// get a string width to use in the css
// If the image is small, return 100%, if it is large, return small
// if the original image is smaller than 100px, this will make it bigger!  
function getWidth(iWidth){
if (iWidth != smallWidth) {
return smallWidth + 'px';
} return "100%"
}
// function that is called to toggle  
function toggleWidth(image){
   image = $(image);
   sWidth = getWidth(image[0].width);
   $(image[0]).attr('width', sWidth);	
}
$(document).ready(function(){
// set all images small
$('img.img-responsive').attr('width', '100px');
// bind to click
$('img.img-responsive').on('click', function(){
	toggleWidth($(this));
});

});

    $('div.post-content :header').each(function( index ) {
        var slugText = $( this ).text().replace(/\s/g, '');
	var linkText =  "<br><a href='#" + slugText + "' onclick=\"setTimeout(function(){ $('html, body').animate({scrollTop: '-=85px'}, 100)}, 100);\">" +$( this ).text() + "</a>" ;
        $( "#tableOfContents" ).append( linkText);
        $( this ).before('<a name="' + slugText + '" href="#top">(top)</a><br>');
    });
});
