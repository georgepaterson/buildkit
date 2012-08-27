/*

*/
define(['jquery'], function ($) {
	(function ($, document, window) {
		'use strict';
		/*
		
		*/
		var Dialog = function (element, options) {
			this.element = $(element);
			this.content = this.element.html();
			this.options = options;
			if ($.fn.dialog.initialised === false) {
				$('body').append($.fn.dialog.template);
				$.fn.dialog.template.hide();
			}
			$.fn.dialog.initialised = true;
			this.create();
		}
		/*
		
		*/
		Dialog.prototype = {
			/*

			*/
			create: function () {
				if ($.fn.dialog.past !== null) {
					if ($.fn.dialog.past.element !== this.element) {
						$.fn.dialog.template.empty().append(this.content);
					}
				} else {
					$.fn.dialog.template.append(this.content);
				}
				$.fn.dialog.past = this;
				if (this.options.close) {
					this.options.close.call(this);
				}
				if (this.options.open) {
					this.open();
				} else {
					this.close();
				}
			},
			/*

			*/
			open: function () {
				$.fn.dialog.template.show();
				this.isOpen = true;
		    },
			/*

			*/
			close: function () {
				$.fn.dialog.template.hide();
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
				} else if (typeof method == 'object' || !data[method]) {
					data.create();
				}
				if (typeof method == 'string' && data[method]) {
					data[method]();
				}
			});	
		};
		/*
		
		*/
		$.fn.dialog.past = null;
		$.fn.dialog.initialised = false;
		$.fn.dialog.template = $('<div class="dialog" role="dialog" aria-hidden="true" aria-labelledby=""></div>');
		$.fn.dialog.defaults = {
			close: function() {var that = this; $.fn.dialog.template.find('.dialog-close').on('click', function(event) { event.preventDefault(); $(that).dialog('close'); }); },
			modal: false,
			open: true
		};
	}(jQuery, document, window));
});