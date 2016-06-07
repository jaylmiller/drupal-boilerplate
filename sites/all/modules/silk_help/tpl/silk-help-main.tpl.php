<?php
/**
 * @file
 * Renders help text on a custom page.
 */
?>
<!-- Add simple CSS for tabs/layout of help page -->
<link type="text/css" rel="stylesheet" href="/sites/all/modules/silk_help/assets/css/silk_help.css" media="all" />
<p>This page is a genaral overview for [CLIENT] administration functions and setup</p>

<!-- Start [CLIENT] Help Tabs -->
<div class="simple_silk_tabs">
	<!-- Tab One: General Overview /////////////////////////////////////////// -->
   <div class="silk_tab">
       <input type="radio" id="tab-1" name="tab-group-1" checked>
       <label for="tab-1">General Overview</label>
       <div class="silk_tab_content">
				 <h2>General Overview</h2>

				 <p>This section is designed to be general overview/primer for your new website built in drupal, by <a href="http://idfive.com">idfive</a>. There are endless tutorials on the web for every specific aspect of drupal, but what we will try to do here is really cover the basics of what you will need to know in order to add/edit content.</p>
				 [INSERT VIMEO/YT OVERVIEW VIDEO]
				 <p>In the above screencast, we will go over a few general concepts, such as:</p>

				 <section>
					 <h4>Content</h4>
					 <p><em>Admin Menu > Content</em></p>
					 <p>This page keeps a running list of all content you have added to the site. Use the filters to adjust the view, if wanted.</p>

					 <h5>Existing Content:</h5>
					 <p>You can do 3 things with existing content in this view:</p>
					 <ol>
						<li>View (click on title)</li>
						<li>Edit (Far right column)</li>
						<li>Delete (Far right column)</li>
					 </ol>
					 <p><em>You also have the option to filter by status (published or not), or content type (see Content Types below).</em></p>

					 <h5>Adding new content:</h5>
					 <ul>
						<li>Click &quot;+ Add New Content&quot; towards the top of the page, or from the admin menu dropdown.</li>
						<li>From here, it will ask you &quot;what type of content you wish to add.&quot;</li>
						<li>Choose the content type you wish to use. More on content types below.</li>
					 </ul>
			 		</section>

					<section>
						 <h4>Content Types</h4>
						 <p><em>Admin Menu > Structure > Content Types</em></p>
						 <p>This page shows all the different types of content you can add. Content types define the &quot;kinds&quot; of content we have on the site, ie, Events, News Articles, etc.</p>
						 <p>We have set up the following content types for [CLIENT]:</P>
						 <ol>
							<li>[CT NAME]: [CT DESCRIPTION]</li>
						 </ol>
				 	</section>

					<section>
						 <h4>Blocks</h4>
						 <p><em>Admin Menu > Structure > Blocks</em></p>
						 <p>This page shows both the blocks available, and blocks used in your template. Blocks are for storing content that is not generally 100% assigned to a node, like sidebars, or homepage items. While you will be able to &quot;add new blocks&quot; here, it is our suggestion that you strictly use this page to edit the blocks we have already set up for you.</p>
					</section>

					<section>
						 <h4>Menus</h4>
						 <p><em>Admin Menu > Structure > Menus</em></p>
						 <p>The menus page shows all the different menu&#39;s used in this installation. Of key note are the Main Menu, and User Menu.</p>
						 <ol>
							<li>Main Menu: Controls main site Navigation.</li>
							<li>User Menu: Controls smaller, sub navigation.</li>
						 </ol>
					 </section>

	 				<section>
					 <h4>Taxonomy</h4>
					 <p><em>Admin Menu > Structure > Taxonomy</em></p>
					 <p>Taxonomies are vocabularies we use to classify content on the site.</p>
					 <p>We have set up the following taxonomies for [CLIENT]:</P>
					 <ol>
						<li>[TAX NAME]: [TAX DESCRIPTION]</li>
					 </ol>
					 <p>These vocabularies correspond to there respective content types, and allow us to filter these in feeds throughout the site.</p>
				 </section>

				 <section>
					 <h4>Views</h4>
					 <p><em>Admin Menu > Structure > Views</em></p>
					 <p>Views are a way in which we aggregate content for the homepage, and other areas of the site. We reccomend that FAES staff not attempt to modify these. We include them here only in order to have a complete reference.</p>
				 </section>

				 <section>
					 <h4>Users</h4>
					 <p><em>Admin Menu > People</em></p>
					 <p>This brings up a view of all current site users with an account.</p>
					 <h5>Adding Users</h5>
					 <ul>
						<li>Click the &quot;+ Add User&quot; link near the top of the page, or from the admin drop down menu.</li>
						<li>Fill out required fields</li>
						<li>When adding new users for administration duty, be sure to chech the &quot;administrator&quot; box.</li>
					 </ul>
				 </section>

       </div>
   </div>

	 <!-- Tab Two: Custom /////////////////////////////////////////// -->
   <div class="silk_tab">
       <input type="radio" id="tab-2" name="tab-group-1">
       <label for="tab-2">Tab Two</label>
       <div class="silk_tab_content">
           <p>Stuff for Tab Two</p>
       </div>
   </div>

	 <!-- Tab Three: Custom /////////////////////////////////////////// -->
    <div class="silk_tab">
       <input type="radio" id="tab-3" name="tab-group-1">
       <label for="tab-3">Tab Three</label>
       <div class="silk_tab_content">
           <p>Stuff for Tab Three</p>
       </div>
   </div>

	 <!-- Tab Four: Custom /////////////////////////////////////////// -->
    <div class="silk_tab">
       <input type="radio" id="tab-4" name="tab-group-1">
       <label for="tab-4">Tab Four</label>
       <div class="silk_tab_content">
           <p>Stuff for Tab Four</p>
       </div>
   </div>

	 <!-- Tab Five: Custom /////////////////////////////////////////// -->
    <div class="silk_tab">
       <input type="radio" id="tab-5" name="tab-group-1">
       <label for="tab-5">Tab Five</label>
       <div class="silk_tab_content">
           <p>Stuff for Tab Five</p>
       </div>
   </div>

	 <!-- Tab Six: Custom /////////////////////////////////////////// -->
    <div class="silk_tab">
       <input type="radio" id="tab-6" name="tab-group-1">
       <label for="tab-6">Tab Six</label>
       <div class="silk_tab_content">
           <p>Stuff for Tab Six</p>
       </div>
   </div>

</div>
