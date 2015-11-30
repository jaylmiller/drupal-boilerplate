(function ($) {
	Drupal.wysiwyg.plugins.accordion_wrapper = {
		invoke: function(data,settings,instanceId) {
        Drupal.wysiwyg.instances[instanceId].insert('<div class="silk-accordion"><section>' + data.content + '</section></div>');
		},
	}
}(jQuery));
