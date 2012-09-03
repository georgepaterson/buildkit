/*!
	jQuery Dialog plugin.
	https://github.com/georgepaterson/buildkit
	Copyright 2012, George Paterson.
	Dual licensed under the MIT or GPL Version 2 licenses.
*/
define(['jquery'], function ($) {
	/*	
		This plugin uses a constructor and prototype before instatiation of the plugin with jQuery. 
		Built with the flyweight design pattern, only a single dialog is active at any time with content loaded in to the dialog.
		Definition of jQuery wraps the plugin, can be removed as required.
	*/
	(function ($, document, window) {
		'use strict';
		/*
			Dialog constructor.
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
			Dialog methods.
		*/
		Dialog.prototype = {
			/*
				Create method.
			*/
			create: function () {
				if ($.fn.dialog.past !== null) {
					if ($.fn.dialog.past.element !== this.element) {
						$.fn.dialog.template.empty().attr('tabindex', -1).append(this.content);
					}
				} else {
					$.fn.dialog.template.attr('tabindex', -1).append(this.content);
				}
				$.fn.dialog.past = this;
				if (this.options.close) {
					this.options.close.call(this);
				}
				if (this.options.auto) {
					this.open();
				} else {
					this.close();
				}
			},
			/*
				Open method.
			*/
			open: function () {
				var that = this,
					width = $(document).outerWidth(),
					height = $(document).outerHeight();
				if (this.options.position) {
					this.options.position.call(this);
				}
				if (this.options.modal) {
					$('body').append($.fn.dialog.overlay);
					$.fn.dialog.overlay.css({width: width, height: height});
				}
				$.fn.dialog.template.show().attr('aria-hidden', false).focus();
				if (this.options.modal) {
			        $(document).on('focusin.dialog', function(event) {
			          if ($.fn.dialog.template[0] !== event.target && !$.fn.dialog.template.has(event.target).length) {
						$.fn.dialog.template.focus();
			          }
			        });
				}
				$(document).on('keyup.dialog', function(event) {
					if (event.which == 27) {
						that.close()
					}
				});
		    },
			/*
				Close method.
			*/
			close: function () {
				$(document).off('keyup.dialog');
				if (this.options.modal) {
					$.fn.dialog.overlay.remove();
				}
				$.fn.dialog.template.hide().attr('aria-hidden', true);
		    },
			/*
				Destroy method.
			*/
			destroy: function () {
				this.close();
				this.element.removeData('dialog');
		    }
		}
		/*
			Dialog jQuery plugin instantiation.
		*/
		$.fn.dialog = function (method) {
			return this.each(function () {
				var data = $(this).data('dialog'),
					options = $.extend(true, {}, $.fn.dialog.defaults, $(this).data('dialog'), typeof method == 'object' && method);
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
			Dialog namedspaced propeties to support the flyweight design pattern. 
		*/
		$.fn.dialog.past = null;
		$.fn.dialog.initialised = false;
		$.fn.dialog.template = $('<div class="dialog" role="dialog" aria-hidden="true"></div>');
		$.fn.dialog.overlay = $('<div class="dialog-overlay"></div>');
		/*
			Dialog default options.
		*/
		$.fn.dialog.defaults = {
			auto: true,
			close: function() {
				var that = this; 
				$.fn.dialog.template.find('.dialog-close').on('click', function(event) { 
					event.preventDefault(); that.close(); }); 
				},
			modal: false,
			position: function() {
				var width = ($(document).outerWidth() / 2) - ($.fn.dialog.template.outerWidth() / 2), 
					height = $(document).scrollTop() + ($(window).height() / 2) - ($.fn.dialog.template.outerHeight() / 2); 
				$.fn.dialog.template.css({left: width, top: height});
			}
		};
	}(jQuery, document, window));
});