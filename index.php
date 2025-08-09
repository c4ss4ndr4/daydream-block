<?php get_header(); ?>

<main>
  <h1><?php the_title(); ?></h1>
  <?php
  if ( have_posts() ) :
    while ( have_posts() ) : the_post();
      the_content();
    endwhile;
  else :
    echo '<p>No content found.</p>';
  endif;
  ?>
</main>

<?php get_footer(); ?>
