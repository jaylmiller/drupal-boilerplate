(function ($) {
	Drupal.wysiwyg.plugins.tab_wrapper = {
		invoke: function(data,settings,instanceId) {
        Drupal.wysiwyg.instances[instanceId].insert('<section>' + data.content + '</section>');
		},
	}
}(jQuery));
