<?php
if ( ! defined( 'ABSPATH' ) ) { exit; }

/** Frontend assets (cache-busted) */
add_action( 'wp_enqueue_scripts', function () {
    $theme_ver  = wp_get_theme()->get('Version');
    $asset_path = get_template_directory() . '/build/index.asset.php';
    $asset      = file_exists($asset_path) ? include $asset_path : ['dependencies'=>[], 'version'=>$theme_ver];

    // CSS cache bust
    $css_file = get_template_directory() . '/build/style-index.css';
    $css_ver  = file_exists($css_file) ? filemtime($css_file) : $theme_ver;

    // JS cache bust
    $js_file  = get_template_directory() . '/build/index.js';
    $js_ver   = file_exists($js_file) ? filemtime($js_file) : $asset['version'];

    wp_enqueue_style(
        'daydream-block-style',
        get_template_directory_uri() . '/build/style-index.css',
        [],
        $css_ver
    );

    wp_enqueue_script(
        'daydream-block-scripts',
        get_template_directory_uri() . '/build/index.js',
        $asset['dependencies'],
        $js_ver,
        true
    );
}, 100);

/** Editor bundle (so custom blocks load in editor) */
add_action( 'enqueue_block_editor_assets', function () {
    $asset_path = get_template_directory() . '/build/index.asset.php';
    $asset      = file_exists( $asset_path ) ? include $asset_path : [ 'dependencies' => [], 'version' => wp_get_theme()->get('Version') ];

    wp_enqueue_script(
        'daydream-block-editor',
        get_template_directory_uri() . '/build/index.js',
        $asset['dependencies'],
        $asset['version'],
        true
    );
});

/** Register the Notice block (use the editor bundle handle) */
add_action('init', function () {
    register_block_type( get_template_directory() . '/blocks/notice', [
        'editor_script' => 'daydream-block-editor',
    ]);
});

/** Register the Callout block (use the editor bundle handle) */
add_action('init', function () {
    register_block_type( get_template_directory() . '/blocks/callout', [
        'editor_script' => 'daydream-block-editor',
    ]);
});

/** Register the Date Display block (use the editor bundle handle) */
add_action('init', function () {
    register_block_type( get_template_directory() . '/blocks/date-display', [
        'editor_script' => 'daydream-block-editor',
    ]);
});

/** Theme supports */
add_theme_support( 'wp-block-styles' );
add_theme_support( 'editor-styles' );
add_editor_style( 'build/style-index.css' );

/** Enhanced Date Shortcode */
add_shortcode('current_date', function($atts) {
    $atts = shortcode_atts(array(
        'format' => get_option('date_format'),
        'show_time' => false,
        'time_format' => get_option('time_format')
    ), $atts, 'current_date');
    
    $date_format = $atts['format'];
    $show_time = filter_var($atts['show_time'], FILTER_VALIDATE_BOOLEAN);
    $time_format = $atts['time_format'];
    
    $output = date_i18n($date_format);
    
    if ($show_time) {
        $output .= ' ' . date_i18n($time_format);
    }
    
    return '<time datetime="' . esc_attr(date('c')) . '">' . esc_html($output) . '</time>';
});

/** Enhanced Content Processing */
add_filter('the_content', function($c){
    // Add security attributes to external links
    $c = preg_replace('/<a([^>]+target=([\'"])_blank\\2)(?![^>]*rel=)/i','<a$1 rel="noopener">',$c);
    
    // Add lazy loading to images for performance
    $c = preg_replace('/<img([^>]+)(?<!loading=)/i', '<img$1 loading="lazy"', $c);
    
    // Add smooth scrolling to anchor links
    $c = preg_replace('/<a([^>]+href=([\'"])#([^\'"]+)\\2)/i', '<a$1 data-smooth-scroll', $c);
    
    return $c;
}, 12);

/** Custom Block Category */
add_filter('block_categories_all', function($categories, $post) {
    return array_merge($categories, [
        [
            'slug' => 'daydream-blocks',
            'title' => __('Daydream Blocks', 'daydream'),
            'icon' => 'admin-customizer'
        ]
    ]);
}, 10, 2);

/** Enhanced Date Formatting */
add_filter('date_i18n', function($date, $format, $timestamp, $gmt) {
    // Add custom date formats
    if ($format === 'F j, Y \a\t g:i a') {
        return date_i18n('F j, Y', $timestamp, $gmt) . ' at ' . date_i18n('g:i a', $timestamp, $gmt);
    }
    return $date;
}, 10, 4);

add_action('init', function(){
    remove_action('wp_head','print_emoji_detection_script',7);
    remove_action('wp_print_styles','print_emoji_styles');
},1);

/** SVG for admins */
add_filter('upload_mimes', function($mimes) {
  if ( current_user_can('unfiltered_html') ) { $mimes['svg'] = 'image/svg+xml'; }
  return $mimes;
});
add_filter('wp_check_filetype_and_ext', function($data, $file, $filename) {
  if ( strtolower(pathinfo($filename, PATHINFO_EXTENSION)) === 'svg' ) {
      $data['ext'] = 'svg'; $data['type'] = 'image/svg+xml';
  }
  return $data;
}, 10, 3);
