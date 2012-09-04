/*!
	Example project control file.
	JavaScript feature should be instatiated through this file.		
*/s
/*
	Configuration paths for requirejs.
	These allow short reference paths later in the code that can be maintain in a single area.
	A default feature of requirejs.		
*/
require.config({
    baseUrl: '/script',
    paths: {
		'jquery': '/script/external/jquery',
        'modules': '/script/modules'
    }
});
/*
	Test if jQuery is available, if not load it.
	Features in the following block will require jQuery.		
*/
require(['jquery'], function($) {
	/*
		Dialog references.
		Initially test to see if the dialog module will be required on the page.
		If so using requirejs to test if the module is available, if not load it. 
	*/
	if ($('.dialog-link, .dialog-remote, .dialog-iframe, .dialog-fragment').length) {
		require(['jquery', 'modules/dialog'], function($) {
			/*
				Dialog content loaded from an inline document object. 
			*/
			$('.dialog-link').on('click', function(event){
				var link = $(this).attr('href');
				event.preventDefault();				
				$(link).dialog({modal: true});
			});
			/*
				Remote dialog content using the jQuery load method. 
			*/
			$('.dialog-remote').on('click', function(event){
				var link = $(this).attr('href'),
					hash = link.replace(/.*(?=#[^\s]+$)/, ''),
					fragment = $('<div></div>'),
					progress = $('<div class="dialog-progress">Content loading...</div>');
				event.preventDefault();
				fragment.append(progress);
				fragment.load(link + ' ' + hash, function() {
					$(this).find(hash).dialog();
				});
			});
			/*
				Dialog content loaded through an iFrame. 
			*/
			$('.dialog-iframe').on('click', function(event){
				var link = $(this).attr('href'),
					fragment = $('<div><header><a class="dialog-close" href="#" role="button">Close dialog</a></header></div>');
				event.preventDefault();
				fragment.append('<iframe id="dialog-iframe" frameborder="0" src="' + link + '"></iframe>')
					.dialog();
			});
		});
	}
});