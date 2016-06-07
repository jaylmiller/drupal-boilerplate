<?php

/**
 * @file
 * Overrides stock page tpl for homepage.
 *
 */
?>

<?php require_once drupal_get_path('theme', 'silk') . '/tpl/includes/header.tpl.php'; ?>

  <main>
    <?php if ($tabs): ?><div class="tabs"><?php print render($tabs); ?></div><?php endif; ?>
      HOMEPAGE PAGE CONTENT HERE
    <?php print render($page['content']); ?>
  </main>

  <?php require_once drupal_get_path('theme', 'silk') . '/tpl/includes/footer.tpl.php'; ?>
