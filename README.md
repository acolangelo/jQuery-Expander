Background
==========

The idea for jQuery Expander came about during development of my own site, [acolangelo.com](http://acolangelo.com/ "Anthony Colangelo | Web Design & Development"), when I needed a way to showcase screenshots of my work across the site. I didn’t want a lightbox to pop up over the content, or — even worse — I didn’t want the user to be taken to an entirely new page just for a screenshot.

I came up with this simple jQuery plugin that would allow small thumbnails to sit in the text, and then expand upon click. The text reflows beautifully around the image as it expands to its full size, and it allows the images to stay within context.

How to Use jQuery Expander
==========================

All that it takes to use this plugin is a function call (on a jQuery object) with 4 (optional) options.

Plugin Options
--------------

`smallWidth`

The width of the image thumbnails (before expanding). Default is 300 pixels.

`largeWidth`

The width of the image at full size (expanded). Default is 800 pixels.

`duration`

The duration of the expanding and collapsing animation. Default is 500 (milliseconds).

`easing`

The easing function to use in the expanding and collapsing animation. Default is swing.

Code Example
------------

	$('.screenshot').expander({
		smallWidth: '400px',
		largeWidth: '900px',
		duration: 1000,
		easing: 'linear'
	});