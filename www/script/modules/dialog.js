/*

*/
define(['jquery'], function ($) {
	(function ($, document, window) {
		'use strict';
		/*
		
		*/
		var Dialog = function (element, options) {
			this.element = $(element);
			this.options = options;
			this.create();
		}
		/*
		
		*/
		Dialog.prototype = {
			/*

			*/
			create: function () {
				if ($.fn.dialog.initialised === false) {
					$('body').append($.fn.dialog.template);
					$.fn.dialog.initialised = true;
				}
				if (this.options.open) {
					this.open();
				}
			},
			/*

			*/
			open: function () {
				var content = this.element.html();
				$.fn.dialog.template.append(content).show();
				this.isOpen = true;
		    },
			/*

			*/
			close: function () {
				$.fn.dialog.template.empty().hide();
				this.isOpen = false;
		    },
			/*

			*/
			toggle: function () {
				if (this.isOpen) {
					this.close();
				} else {
					this.open();
				}
		    },
			/*

			*/
			destroy: function () {
				this.close();
				this.element.removeData('dialog');
		    }
		}
		/*
		
		*/
		$.fn.dialog = function (method) {
			return this.each(function () {
				var data = $(this).data('dialog'),
					options = $.extend(true, {}, $.fn.dialog.defaults, typeof method == 'object' && method);
				if (!data) {
					$(this).data('dialog', (data = new Dialog(this, options)));
				}
				if (typeof method == 'string' && data[method]) {
					data[method]();
				} 
			});	
		};
		/*
		
		*/
		$.fn.dialog.initialised = false;
		$.fn.dialog.template = $('<div class="dialog" role="dialog" aria-hidden="true" aria-labelledby=""></div>');
		$.fn.dialog.defaults = {
			modal: false,
			open: true
		};
	}(jQuery, document, window));
});

