require.config({
    baseUrl: '/script',
    paths: {
		'jquery': '/script/external/jquery',
        'modules': '/script/modules'
    }
});
require(['jquery'], function($) {
	if ($('.dialog-link, .dialog-remote, .dialog-iframe, .dialog-fragment').length) {
		require(['jquery', 'modules/dialog'], function($) {
			$('.dialog-link').on('click', function(event){
				var link = $(this).attr('href');
				event.preventDefault();				
				$(link).dialog();
			});
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