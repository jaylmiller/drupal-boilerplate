(function ($) {
	Drupal.wysiwyg.plugins.tab_content = {
		invoke: function(data,settings,instanceId) {
        Drupal.wysiwyg.instances[instanceId].insert('<div><p>' + data.content + '</p></div>');
		},
	}
}(jQuery));
