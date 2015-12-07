// Vendor
//= include vendor/jquery-2.1.4.min.js
//= include vendor/jquery.menuaim.js
//= include vendor/tether.min.js
//= include vendor/select.min.js

// SILK Core
//= include silk/silk.js
//= include silk/helpers.js
//= include silk/bootstrap.js

// SILK Modules
//= include silk/accordion.js
//= include silk/offcanvas.js
//= include silk/nav.js
//= include silk/table.js
//= include silk/tabs.js

// Bootstrap
(function($) {

  //Run SILK bootstrap

  //Insitialize SILK modules
  $('.silk-nav').silknav();
  $('.silk-tabs').silktabs();
  $('.silk-accordion').silkaccordion();
  $('.silk-table').silktable();
  
  //Select
  Drupal.behaviors.select = {
  attach: function (context, settings) {
    Select.init();
    }
  };


}(jQuery));

//= include site.js