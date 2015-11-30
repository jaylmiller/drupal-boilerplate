(function($) {
	Drupal.wysiwyg.plugins.callout = {
		invoke: function(data,settings,instanceId) {
	 		Drupal.wysiwyg.instances[instanceId].insert('<div class="callout"><h3>Callout Area Title</h3><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut at elementum libero.</p></div>');
		},
	}
}(jQuery));
