<?php

/**
 * @file
 * Default simple view template to display a list of rows.
 *
 * edited to remove extra markup
 */
?>

  <?php print $list_type_prefix; ?>
    <?php foreach ($rows as $id => $row): ?>
      <li><?php print $row; ?></li>
    <?php endforeach; ?>
  <?php print $list_type_suffix; ?>
