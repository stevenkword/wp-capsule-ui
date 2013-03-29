<article id="post-edit-<?php echo $post->ID; ?>" data-post-id="<?php echo $post->ID; ?>" <?php post_class('edit clearfix' . (is_sticky($post->ID) ? ' sticky' : '')); ?>>
	<div class="post-date">
		<ul>
			<li class="day"><?php the_time('j'); ?></li>
			<li class="month"><?php the_time('M'); ?></li>
			<li class="year"><?php the_time('Y'); ?></li>
		</ul>
	</div>	
	<div class="post-meta">
		<h3><?php _e('Projects', 'capsule'); ?></h3>
		<?php echo capsule_term_list($post->ID, 'projects'); ?>
		<h3><?php _e('Tags', 'capsule'); ?></h3>
		<?php echo capsule_term_list($post->ID, 'post_tag'); ?>
		<h3><?php _e('Code', 'capsule'); ?></h3>
		<?php echo capsule_term_list($post->ID, 'code'); ?>
	</div>
	<div class="post-content">
		<div class="status">
			<p>Last Saved at 1:38pm 1/17/2013</p>
		</div>
		<header>
			<a href="#" class="post-close-link"><?php _e('Close', 'capsule'); ?></a>
		</header>
		<div id="ace-editor-<?php echo $post->ID; ?>" class="ace-editor"></div>
	</div>
</article>
