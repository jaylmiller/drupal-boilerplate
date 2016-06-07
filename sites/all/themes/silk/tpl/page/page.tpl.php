<?php

/**
 * @file
 * Modified theme implementation to display a single Drupal page.
 *
 * Modified for silk
 */
?>
  <?php //require_once drupal_get_path('theme', 'silk') . '/tpl/includes/header.tpl.php'; ?>

  <main>
    <a id="main-content"></a>
    <?php print render($title_prefix); ?>
    <?php if ($title): ?><h1 class="title" id="page-title"><?php print $title; ?></h1><?php endif; ?>
    <?php print render($title_suffix); ?>
    <?php if ($tabs): ?><div class="tabs"><?php print render($tabs); ?></div><?php endif; ?>
    <?php print render($page['help']); ?>
    <?php if ($action_links): ?><ul class="action-links"><?php print render($action_links); ?></ul><?php endif; ?>
    <?php print render($page['content']); ?>
    <?php print $feed_icons; ?>


    <?php if ($page['sidebar_first']): ?>
      <?php print render($page['sidebar_first']); ?>
    <?php endif; ?>

    <?php if ($page['sidebar_second']): ?>
      <?php print render($page['sidebar_second']); ?>
    <?php endif; ?>

    <?php print render($page['footer']); ?>
  </main>

  <?php //require_once drupal_get_path('theme', 'silk') . '/tpl/includes/footer.tpl.php'; ?>
