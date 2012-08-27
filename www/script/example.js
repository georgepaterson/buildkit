require.config({
    baseUrl: '/script',
    paths: {
		'jquery': '/script/external/jquery',
        'modules': '/script/modules'
    }
});
require(['jquery'], function($) {
	if ($('.dialog-link').length) {
		require(['jquery', 'modules/dialog'], function($) {
			$('.dialog-link').on('click', function(event){
				var link = $(this).attr('href');
				event.preventDefault();				
				$(link).dialog();
			});
			$('.dialog-remote').on('click', function(event){
				var link = $(this).attr('href'),
					hash = link.replace(/.*(?=#[^\s]+$)/, ''),
					container = $('<div></div>');
				event.preventDefault();
				container.load(link + ' ' + hash, function() {
					$(this).find(hash).dialog();
				});
			});
			$('.dialog-iframe').on('click', function(event){

			});
		});
	}
});