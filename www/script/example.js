require.config({
    baseUrl: '/script',
    paths: {
		'jquery': '/script/external/jquery',
        'modules': '/script/modules'
    }
});
require(['jquery'], function($) {
	if ($('.dialog').length) {
		require(['jquery', 'modules/dialog'], function($) {
		    $(function() { 
				$('.dialog').dialog();
		    });
		});
	}
});