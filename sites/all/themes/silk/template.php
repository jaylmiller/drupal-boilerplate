<?php

  /**
  * Implements hook_preprocess_page().
  *
  * Add silk js, add template suggestions.
  */
  function silk_preprocess_page(&$vars) {
    // Add main and site silk js.
    drupal_add_js(drupal_get_path('theme', 'silk') . '/assets/js/build/main.js', array('type' => 'file', 'scope' => 'footer'));
    drupal_add_js(drupal_get_path('theme', 'silk') . '/assets/js/build/site.js', array('type' => 'file', 'scope' => 'footer'));

    // Add template suggestions to use "page--my-machine-name.tpl.php" and the like.
    if (isset($vars['node']->type)) {
        $vars['theme_hook_suggestions'][] = 'page__' . $vars['node']->type;
    }

  }


  /**
  * Implements hook_preprocess_node().
  *
  * Add silk js, add template suggestions.
  */
  function silk_preprocess_node(&$variables) {

    // Add regions to be available anywhere, via print render($region['machine_name']);
    foreach (system_region_list($GLOBALS['theme']) as $region_key => $region_name) {
      if ($blocks = block_get_blocks_by_region($region_key)) {
        $variables['region'][$region_key] = $blocks;
      }
      else {
        $variables['region'][$region_key] = array();
      }
    }

  }


  /**
  * Implements hook_css_alter().
  *
  * Remove some stock theming.
  */
  function silk_css_alter(&$css) {
    unset($css[drupal_get_path('module','system').'/system.theme.css']);
  }


  /**
  * Implements hook_breadcrumb().
  *
  * Theme the breadcrumb.
  */
  function silk_breadcrumb($variables) {

    if (count($variables['breadcrumb']) > 0) {
      $breadcrumb = $variables['breadcrumb'];
      $lastitem = sizeof($breadcrumb);
      $title = drupal_get_title();
      $crumbs = '<ul>';
      $a=1;

      foreach($variables['breadcrumb'] as $value) {
        if ($a!=$lastitem) {
          $crumbs .= '<li>'.$value.'</li>';
          $a++;
        } else {
          $crumbs .= '<li>'.$value.'</li>';
        }
      }

      $crumbs .= '<li>'.$title.'</li>';
      $crumbs .= '</ul>';
      return $crumbs;
      // return implode($sep, $variables['breadcrumb']) . $sep;
    } else {
      return t("Home");
    }

  }
