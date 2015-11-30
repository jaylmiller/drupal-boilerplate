(function ($) {
	Drupal.wysiwyg.plugins.tabs_wrapper = {
		invoke: function(data,settings,instanceId) {
        Drupal.wysiwyg.instances[instanceId].insert('<div class="silk-tabs">' + data.content + '<div>');
		},
	}
}(jQuery));
