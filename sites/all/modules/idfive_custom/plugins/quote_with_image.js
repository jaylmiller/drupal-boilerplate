(function ($) {
	Drupal.wysiwyg.plugins.quote_with_image = {
		invoke: function(data,settings,instanceId) {
	 		Drupal.wysiwyg.instances[instanceId].insert('<div class="quote"><img class="quote-image" src="assets/images/quote.png" /><div class="quote-caption callout--beige"><blockquote>Lorem ipsum dolor sit amet, cosectetur. Ornare dolor con to amet  dolor sempium ante con to sempium dolor.</blockquote><cite>Amanda & Family</cite></div></div>');
		},
	}
}(jQuery));
