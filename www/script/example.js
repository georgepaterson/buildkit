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
				event.preventDefault();
				var link = $(this).attr('href');
				$(link).dialog();
			    /*$('.dialog-close').on('click', function(event) {
				  event.preventDefault();
				  $(link).dialog('close');
				});*/
			});
		});
	}
});