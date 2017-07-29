/*
var smoothScroll = new  SmoothScroll('a[href*="#"]', {
	// Selectors
	ignore: '[data-scroll-ignore]', // Selector for links to ignore (must be a valid CSS selector)
	header: null, // Selector for fixed headers (must be a valid CSS selector)

	// Speed & Easing
	speed: 700, // Integer. How fast to complete the scroll in milliseconds
	offset: 0, // Integer or Function returning an integer. How far to offset the scrolling anchor location in pixels
	easing: 'easeInOutQuad', // Easing pattern to use
	updateURL: false,
	customEasing: function (time) {}, // Function. Custom easing pattern

	// Callback API
	before: function () {}, // Callback to run before scroll
	after: function () {} // Callback to run after scroll
}); 
*/




// Adding the function to display image for modal. It will display images and can close 
$(document).ready(function()
{
	/*
		$('section#screenshots a') is looking for the following HTML codes. 
		<section id="screenshots" class="screenshots">
		 ....
			<a href="#modal" data-toggle="modal" data-image-url="img/modal_tickets.png">
							
	*/
	$('section#screenshots a').on('click', function()
	{
		/*
			$('div#modal img') >>>> 
			<div class="col-sm-4">
				<!-- Linking with modal -->
				<a href="#modal" data-toggle="modal" data-image-url="img/modal_trailers.png" >
					<img class="img-responsive" 
					
			.attr('src', >>>> src="img/modal_trailers.png" alt="" />
			$(this >>>> {section#screenshots a}).attr('data-image-url') >>>> {data-image-url="img/modal_trailers.png"} is in the Anchor tag.
					
		*/
		$('div#modal img').attr('src', $(this).attr('data-image-url')); 		
	});
	
	
	/* Adding the "effect" class dynamically for navbar-fixed-top */
	var nav = $('.navbar-fixed-top'); 
	
	$(window).scroll(function()
	{
		var scroll = $(window).scrollTop(); 
		
		// console.log(scroll); 
		
		if (scroll >= 300)
		{
			nav.addClass('effect'); 					
		}
		else
		{
			nav.removeClass('effect'); 
		}
	}); 
	
	
	// Adding the animation when you refresh at the pixel > 300
	var distance = $('.navbar-fixed-top').offset(); 
	// console.log(distance); 
	if (distance.top >= 300)
	{
		nav.addClass('effect');
		
		
	}
	
	
	// Animating the 
	$('#about .blue-circle').waypoint(function()
	{
		$('#about .blue-circle').addClass('animated fadeInUp')
		//console.log("you've entered >> #about .blue-circle"); 
	}, 
	{
		offset: '30%'
	});
	
	
	$('.features-image img').waypoint(function()
	{
		$('.features-image img').addClass('animated jackInTheBox')
		// console.log("you've entered"); 
	}, 
	{
		offset: '30%'
	});
	
	// Animating blue-circles 
	
	$('#features .blue-circle').waypoint(function()
	{
		$(this.element).addClass('animated fadeInUp')
		// console.log(this.element); 
	}, 
	{
		offset: '30%'
	});
	
	// ================ Screen Shot section ================
	
	// Animating the screenshot photos
	$('#screenshots .col-xs-4').waypoint(function()
	{
		$(this.element).addClass('animated zoomIn'); 
		
		// Adding the css with JQuery
		$(this.element).css({'opacity':1});
		// console.log(this.element); 
	}, 
	{
		offset: '30%'
	});
	
	// ================ Download section ================
	
	$('#download div.phone img').waypoint(function()
	{
		$(this.element).addClass('animated fadeInRight'); 
		// console.log(this.element); 
	}, 
	{
		offset: '30%'
	});
	
	$('#download .platforms > div').waypoint(function()
	{
		$(this.element).addClass('animated fadeInUp'); 
		// console.log(this.element); 
	}, 
	{
		offset: '30%'
	});
	 
	// ================ Validator section ================
	
	$('#form').bootstrapValidator(
	{
		message: 'This value is not valid.', 
		feedbackIcons: 
		{
			valid: 'glyphicon glyphicon-ok', 
			invalid: 'glyphicon glyphicon-remove', 
			validating: 'glyphicon glyphicon-refresh', 
		}, 
		fields:
		{
			name: 
			{
				validtors:
				{
					notEmpty: 
					{
						message: 'This field is required and can not be empty'
					}, 
				}
			},
			email: 
			{
				validtors:
				{
					notEmpty: 
					{
						message: 'This field is required and can not be empty'
					}, 
					emailAddress:
					{
						message: 'The input is not a valid address.'
					}
				}
			},
			message: 
			{
				validtors:
				{
					notEmpty: 
					{
						message: 'The message can not be emtpy.'
					}, 
				}
			},
		}
	}).on('success.form.bv', function(e)
	{
		e.preventDefault(); 
		
		var $form = $(e.target); 
		
		var bv = $form.data('bootstrapValidator'); 
		
		$.post($form.attr('action'), $form.serialize(), function(result)
		{
			console.log(result); 
		}, 'json');
	}); 
	
	
}); // end document.Ready()

///*
var smoothScroll = new SmoothScroll('a'); 
smoothScroll.init(
{
	speed:700, 
	easing: 'easeInOutQuad',
});	
//*/
	


