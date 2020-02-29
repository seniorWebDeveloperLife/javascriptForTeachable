

/*
**** 	image thumbnailer functions
*/
	
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

function scrollWindowPastBar(){ setTimeout(function(){ $('html, body').animate({scrollTop: '-=85px'}, 100)}, 100);}    		
	
$(document).ready(function(){

	/*
	**** 	adding header for impactRadius.com
	*/
	 $("head").append("<meta name='ir-site-verification-token' value='-1570783606' />");
	
	/*
	**** 	image thumbnailer 
	*/
	// set all images small
	$('img.img-responsive').attr('width', '100px');
	// bind to click
	$('img.img-responsive').on('click', function(){
	toggleWidth($(this));
	});

	/*
	**** 	Table Of Contents Generator
	*/
	var indentAmount = 20; /* pixels to indent */
	var isFirstLink = true;
	var headers = $('div.post-content :header');
	count = headers.length;
	headers.each(function( index ) {
       	 	var slugText = $( this ).text().replace(/\s/g, '');
		
		var indentString  = '';
		var indentMultiplierRegex  = /<h(\d+)/g.exec($( this )[0].outerHTML); 

		if(indentMultiplierRegex != null){
			var indentValue = indentMultiplierRegex[1] * indentAmount;
			indentString = ' style="margin-left: ' + indentValue + 'px"';
		   }
		var linkText =  "<br><a " + indentString + " href='#" + slugText + "' onclick=\"scrollWindowPastBar()\">" +$( this ).text() + "</a>" ;
        	$( "#tableOfContents" ).append( linkText);
		if(!isFirstLink){
        		$( this ).before('<a name="' + slugText + '" href="#top">(top)</a><br>');
		}else{
			isFirstLink = false;
		}
    	}).promise().done(setTimeout(function(){
		// scroll the document to the correct spot in case of deep link
		document.location = document.location;
		scrollWindowPastBar();}, 250));

});
