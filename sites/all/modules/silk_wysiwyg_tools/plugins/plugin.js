// JavaScript Document

(function($) {

 CKEDITOR.plugins.add( 'silk_table', {
  init: function( editor )
  {

   // now time for some magic
   editor.addCommand( 'silk_table_command', new CKEDITOR.dialogCommand( 'silk_table_dialog' ) );

   editor.ui.addButton( 'silk_table_button', {
    label: 'Add a SILK responsive table', //this is the tooltip text for the button
    command: 'silk_table_command',
	  icon: this.path + 'images/icon.gif'
   });

   CKEDITOR.dialog.add( 'silk_table_dialog', this.path + 'dialogs/silk_table.js' );
  }
 });

 CKEDITOR.plugins.add( 'silk_accordion', {
  init: function( editor )
  {
   editor.addCommand( 'silk_accordion_command', {
    exec : function( editor ) {
     //here is where we tell CKEditor what to do.
     editor.insertHtml( '<div class="silk-accordion"><section><header><h4>ACCORDION HEADER HERE</h4></header><div>ACCORDION CONTENT HERE</div></section></div>');
    }
   });

   editor.ui.addButton( 'silk_accordion_button', {
    label: 'Add a SILK responsive accordion', //this is the tooltip text for the button
    command: 'silk_accordion_command',
    icon: this.path + 'images/icon.gif'
   });
  }
 });

 CKEDITOR.plugins.add( 'silk_two_columns', {
  init: function( editor )
  {
   editor.addCommand( 'silk_two_columns_command', {
    exec : function( editor ) {
     //here is where we tell CKEditor what to do.
     editor.insertHtml( '<div class="silk-two-column"> <p>ADD TWO COLUMN TEXT CONTENT HERE</p> </div>' );
    }
   });

   editor.ui.addButton( 'silk_two_columns_button', {
    label: 'Add a SILK responsive two column layout', //this is the tooltip text for the button
    command: 'silk_two_columns_command',
    icon: this.path + 'images/icon.gif'
   });
  }
 });

 CKEDITOR.plugins.add( 'silk_block_quote', {
  init: function( editor )
  {
   editor.addCommand( 'silk_block_quote_command', {
    exec : function( editor ) {
     //here is where we tell CKEditor what to do.
     editor.insertHtml( '<blockquote><h3>“Quote Here.”</h3><cite>- Firstname Lastname</cite></blockquote>' );
    }
   });

   editor.ui.addButton( 'silk_block_quote_button', {
    label: 'Add a SILK block quote', //this is the tooltip text for the button
    command: 'silk_block_quote_command',
    icon: this.path + 'images/icon.gif'
   });
  }
 });

 CKEDITOR.plugins.add( 'silk_img_and_caption', {
  init: function( editor )
  {
   editor.addCommand( 'silk_img_and_caption_command', {
    exec : function( editor ) {
     //here is where we tell CKEditor what to do.
     editor.insertHtml( '<figure class="aligned-right"><img src="' + this.path + 'images/icon.gif"><figcaption>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elit mi,aliquam eget sem eu, hendrerit interdum diam. </figcaption></figure>' );
    }
   });

   editor.ui.addButton( 'silk_img_and_caption_button', {
    label: 'Add a SILK image and caption', //this is the tooltip text for the button
    command: 'silk_img_and_caption_command',
    icon: this.path + 'images/icon.gif'
   });
  }
 });




})(jQuery);
