$(function() {
    $('#main').smoothState();
});

// Smooth state initialise.
$(function() {
	'use strict';

	var options = {
		prefetch: true,
		cacheLength: 2,
		onStart: {
			duration: 250,
			render: function($container) {
				$container.addClass('is-exiting');
				smoothState.restartCSSAnimations();
			}
		},
		onReady: {
			duration: 0,
			render: function($container, $newContent) {
				$container.removeClass('is-exiting');
				$container.html($newContent);
			}
		}
	},
	smoothState = $('#main').smoothState(options).data('smoothState');
});