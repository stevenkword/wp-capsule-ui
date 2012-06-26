(function($) {

	Capsule.Keys = (function() {

		var $currentArticle = $();

		return {
			map: {
				74 : 'capDown', // j
				75 : 'capUp', // k
				13 : 'capView', // enter
				73 : 'capEdit', // i
				191 : 'capFind', // "/"
				27 : 'capExit', // escape
				78 : 'capNew', // n
				68 : 'capDelete', // d
				83 : 'capStick', // s
				85 : 'capUndoDelete' // u
			},
			actions: {
				capDown: function() {
					if (!$(document.activeElement).is('body')) { return; }

					if (!$(document).find($currentArticle).length) { $currentArticle = $(); }

					if ($currentArticle.length) {
						$nextArticle = $currentArticle.nextAll('article').first();
						if ($nextArticle.length) {
							$currentArticle.removeClass('hover');
							$currentArticle = $nextArticle;
						}
					}
					else {
						$currentArticle = $('article:first');
					}
					$currentArticle.addClass('hover');
					$currentArticle.scrollintoview();
				},
				capUp: function() {
					if (!$(document.activeElement).is('body')) { return; }

					if (!$(document).find($currentArticle).length) { $currentArticle = $(); }

					if ($currentArticle.length) {
						$prevArticle = $currentArticle.prevAll('article').first();
						if ($prevArticle.length) {
							$currentArticle.removeClass('hover');
							$currentArticle = $prevArticle;
						}
					}
					else {
						$currentArticle = $('article:first');
					}
					$currentArticle.addClass('hover');
					$currentArticle.scrollintoview();
				},
				capView: function() {
					if (!$(document.activeElement).is('body')) { return; }
					if ($currentArticle.length) {
						Capsule.loadContent($currentArticle, $currentArticle.data('post-id'));
					}
				},
				capEdit: function() {
					if (!$(document.activeElement).is('body')) { return; }
					if ($currentArticle.length) {
						Capsule.loadEditor($currentArticle, $currentArticle.data('post-id'), $currentArticle);
					}
				},
				capFind: function() {
					if (!$(document.activeElement).is('body')) { return; }
					$searchInput = $('input[name="s"]');
					if (!$searchInput.is(':focus')) {
						$searchInput.focus();
					}
				},
				capExit: function() {
					// TODO - Make Ace editor respect "Exit" shortcut
					if ($(document.activeElement).is('textarea')) {
						if ($currentArticle.length) {
							$currentArticle.find('.post-close-link').click();
						}
					}
					else if ($currentArticle.is('.content')){
						Capsule.loadExcerpt($currentArticle, $currentArticle.data('post-id'));
					}
					$(':focus').blur();
				},
				capNew: function() {
					if (!$(document.activeElement).is('body')) { return; }
					$('#header').find('.post-new-link').click();
				},
				capStick: function() {
					if (!$(document.activeElement).is('body')) { return; }
					if ($currentArticle.length) {
						$currentArticle.find('.post-stick-link').click();
					}
				},
				capDelete: function() {
					if (!$(document.activeElement).is('body')) { return; }
					if ($currentArticle.length) {
						$currentArticle.find('.post-delete-link').click();
					}
				},
				capUndoDelete: function() {
					if (!$(document.activeElement).is('body')) { return; }
					if ($currentArticle.length) {
						$currentArticle.find('.post-undelete-link').click();
					}
				}
			}
		};
	})();

	$(function() {
		$(window).on('keydown', function(e) {
			if (typeof Capsule.Keys.map[e.keyCode] === 'string') {
				if ($(document.activeElement).is('body') || Capsule.Keys.map[e.keyCode] === 'capExit') {
					Capsule.Keys.actions[Capsule.Keys.map[e.keyCode]]();
					e.preventDefault();
					e.stopPropagation();
				}
			}
		});
	});


})(jQuery);
