<?php
/**
 * give it the business
 */
function idfive_custom_tools_plugin() {
	return array(
			'Carousel' => array(
				'path' => drupal_get_path('module', 'idfive_custom') . '/plugins',
				'js file' => 'carousel.js',
				'js path' => drupal_get_path('module', 'idfive_custom') . '/plugins',
				'css path' => drupal_get_path('module', 'idfive_custom') . '/plugins',
				'css file' => 'snippet.css',
				'icon title' => 'Slideshow',
	      'icon path' => drupal_get_path('module', 'idfive_custom') . '/plugins/icons',
	      'icon file' => 'slideshow.png',
				'buttons' => array('carousel' => t('carousel')),
				'load' => TRUE,
				'internal' => FALSE,
				'settings' => array(),
			),

			'two_columns' => array(
				'path' => drupal_get_path('module', 'idfive_custom') . '/plugins',
				'js file' => 'two_columns.js',
				'js path' => drupal_get_path('module', 'idfive_custom') . '/plugins',
				'css path' => drupal_get_path('module', 'idfive_custom') . '/plugins',
				'css file' => 'snippet.css',
				'icon title' => 'Two Column Layout',
	      'icon path' => drupal_get_path('module', 'idfive_custom') . '/plugins/icons',
	      'icon file' => 'twoColumn.png',
				'buttons' => array('two_columns' => t('two_columns')),
				'load' => TRUE,
				'internal' => FALSE,
				'settings' => array(),
		  ),
        
      'Accordion' => array(
				'path' => drupal_get_path('module', 'idfive_custom') . '/plugins',
				'js file' => 'accordion.js',
				'js path' => drupal_get_path('module', 'idfive_custom') . '/plugins',
				'css path' => drupal_get_path('module', 'idfive_custom') . '/plugins',
				'css file' => 'snippet.css',
				'icon title' => 'Accordion',
	      'icon path' => drupal_get_path('module', 'idfive_custom') . '/plugins/icons',
	      'icon file' => 'accordion.png',
				'buttons' => array('accordion' => t('accordion')),
				'load' => TRUE,
				'internal' => FALSE,
				'settings' => array(),
		  ),

	);
}
