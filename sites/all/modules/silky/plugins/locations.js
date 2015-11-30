(function ($) {
	Drupal.wysiwyg.plugins.locations = {
		invoke: function(data,settings,instanceId) {
        Drupal.wysiwyg.instances[instanceId].insert('[view:locations]');
		},
	}
}(jQuery));
