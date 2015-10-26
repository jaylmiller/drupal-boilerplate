(function ($) {
	Drupal.wysiwyg.plugins.image_gallery = {
		invoke: function(data,settings,instanceId) {
	 		Drupal.wysiwyg.instances[instanceId].insert('<div class="slideshow--gallery" id="gallery">[view:image_gallery]</div>');
		},
	}
}(jQuery));
