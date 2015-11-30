(function ($) {
	Drupal.wysiwyg.plugins.featured_post = {
		invoke: function(data,settings,instanceId) {
        Drupal.wysiwyg.instances[instanceId].insert('[view:featured]');
		},
	}
}(jQuery));
