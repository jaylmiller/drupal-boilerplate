(function ($) {
	Drupal.wysiwyg.plugins.tab_header = {
		invoke: function(data,settings,instanceId) {
        Drupal.wysiwyg.instances[instanceId].insert('<header>' + data.content + '</header>');
		},
	}
}(jQuery));
