(function ($) {
	Drupal.wysiwyg.plugins.accordion_content = {
		invoke: function(data,settings,instanceId) {
        Drupal.wysiwyg.instances[instanceId].insert('<div>' + data.content + '<div>');
		},
	}
}(jQuery));
