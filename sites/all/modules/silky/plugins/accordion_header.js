(function ($) {
	Drupal.wysiwyg.plugins.accordion_header = {
		invoke: function(data,settings,instanceId) {
        Drupal.wysiwyg.instances[instanceId].insert('<header>' + data.content + '</header>');
		},
	}
}(jQuery));
