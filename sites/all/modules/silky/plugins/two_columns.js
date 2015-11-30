(function($) {
	Drupal.wysiwyg.plugins.two_columns = {
		invoke: function(data,settings,instanceId) {
	 		Drupal.wysiwyg.instances[instanceId].insert('<div class="row colf-half"><div class="col-huge-6"><h3>Column Title</h3><p>Aenean lacinia bibendum nulla sed consectetur. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Curabitur blandit tempus porttitor. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Donec sed odio dui. Nullam quis risus eget urna mollis ornare vel eu leo.</p></div><div class="col-huge-6"><h3>Column Title</h3><p>Aenean lacinia bibendum nulla sed consectetur. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Curabitur blandit tempus porttitor. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Donec sed odio dui. Nullam quis risus eget urna mollis ornare vel eu leo.</p></div></div>');
		},
	}
}(jQuery));
