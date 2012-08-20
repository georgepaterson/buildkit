require.config({
    baseUrl: '/script',
    paths: {
		'jquery': '/script/external/jquery',
        'modules': '/script/modules'
    }
});
require(['jquery'], function($) {
	if ($('.example-dialog').length) {
		require(['jquery', 'modules/dialog'], function($) {
		    $(function() { 
				$('.example-dialog').dialog({open: false});
		    });
		});
	}
});