<?php

/**
 * @file
 * Default simple view template to all the fields as a row.
 *
 * extra styling removed
 */
?>
<?php foreach ($fields as $id => $field): ?>
  <?php if (!empty($field->separator)): ?>
    <?php print $field->separator; ?>
  <?php endif; ?>
    <?php print $field->label_html; ?>
    <?php print $field->content; ?>

<?php endforeach; ?>
