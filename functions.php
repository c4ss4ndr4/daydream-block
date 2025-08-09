<?php 
if ( ! defined( 'ABSPATH' ) ) { exit; }

add_action( 'wp_enqueue_scripts', function () {
    $theme_ver  = wp_get_theme()->get('Version');
    $asset_path = get_template_directory() . '/build/index.asset.php';
    $asset      = file_exists($asset_path) ? include $asset_path : ['dependencies'=>[], 'version'=>$theme_ver];

    wp_enqueue_style('daydream-style', get_template_directory_uri() . '/build/style-index.css', [], $theme_ver);
    wp_enqueue_script('daydream-scripts', get_template_directory_uri() . '/build/index.js', $asset['dependencies'], $asset['version'], true);
}, 100);

add_theme_support('editor-styles');
add_editor_style('build/style-index.css');

add_shortcode('current_date', function() {
  return esc_html( date_i18n( get_option('date_format') ) );
});

add_filter('the_content', function($c){
  return preg_replace('/<a([^>]+target=([\'"])_blank\\2)(?![^>]*rel=)/i','<a$1 rel="noopener">',$c);
}, 12);

add_action('init', function(){
  remove_action('wp_head','print_emoji_detection_script',7);
  remove_action('wp_print_styles','print_emoji_styles');
},1);

function daydream_enqueue_assets() {
  $ver = wp_get_theme()->get( 'Version' );

  wp_enqueue_style(
    'daydream-style',
    get_template_directory_uri() . '/build/style-index.css',
    [],
    $ver
  );

  wp_enqueue_script(
    'daydream-scripts',
    get_template_directory_uri() . '/build/index.js',
    [],
    $ver,
    true
  );
}
add_action( 'wp_enqueue_scripts', 'daydream_enqueue_assets', 100 ); // <-- higher priority

?>
