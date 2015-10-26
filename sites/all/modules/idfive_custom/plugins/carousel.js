(function ($) {
	Drupal.wysiwyg.plugins.carousel = {
	  invoke: function(data,settings,instanceId) {
 			Drupal.wysiwyg.instances[instanceId].insert('[block:idfive=idfive-carousel]');
		},
	}
}(jQuery));
