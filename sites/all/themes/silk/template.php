<?php

  function silk_preprocess_page(&$vars) {
    // Add main and site silk js.
    drupal_add_js(drupal_get_path('theme', 'silk') . '/assets/js/build/main.js', array('type' => 'file', 'scope' => 'footer'));
    drupal_add_js(drupal_get_path('theme', 'silk') . '/assets/js/build/site.js', array('type' => 'file', 'scope' => 'footer'));

    if (isset($vars['node']->type)) {
        // If the content type's machine name is "my_machine_name" the file
        // name will be "page--my-machine-name.tpl.php".
        $vars['theme_hook_suggestions'][] = 'page__' . $vars['node']->type;
    }

  }
