(function ($) {
	Drupal.wysiwyg.plugins.tab_header = {
		invoke: function(data,settings,instanceId) {
        Drupal.wysiwyg.instances[instanceId].insert('<header><h4>' + data.content + '</h4></header>');
		},
	}
}(jQuery));
