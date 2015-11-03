(function($) {
	Drupal.wysiwyg.plugins.two_columns = {
		invoke: function(data,settings,instanceId) {
	 		Drupal.wysiwyg.instances[instanceId].insert('<div class="container-of-2"><div class="column-1-of-2"><h3>This is an example of two column</h3><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ante felis, egestas eget eros et, eleifend tristique dolor. Praesent a dolor aliquet, placerat ipsum sed, finibus eros. Nulla non lobortis quam, in fringilla tortor. Cras vulputate nisi sit amet nisi congue, vel venenatis neque lacinia. Nunc aliquet erat vitae accumsan mattis. Aliquam erat volutpat. Vestibulum vel leo massa. Phasellus at urna</p></div><div class="column-1-of-2"><h3>This is an example of two column</h3><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ante felis, egestas eget eros et, eleifend tristique dolor. Praesent a dolor aliquet, placerat ipsum sed, finibus eros. Nulla non lobortis quam, in fringilla tortor. Cras vulputate nisi sit amet nisi congue, vel venenatis neque lacinia. Nunc aliquet erat vitae accumsan mattis. Aliquam erat volutpat. Vestibulum vel leo massa. Phasellus at urna</p></div></div>');
		},
	}
}(jQuery));
