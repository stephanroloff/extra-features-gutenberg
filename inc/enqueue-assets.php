<?php

function scripts_and_styles_extra_gutenberg(){
   wp_enqueue_style('main_style_extra_gutenberg', MY_PLUGIN_PATH_EXTRA_GUTENBERG . 'build/index.css', array(), '1.0', 'all');
   wp_enqueue_script('main_js_extra_gutenberg', MY_PLUGIN_PATH_EXTRA_GUTENBERG . 'build/index.js', array('jquery'), '1.0', true );
}

function scripts_and_styles_editor_extra_gutenberg(){   
   wp_enqueue_style('main_style_editor_extra_gutenberg', MY_PLUGIN_PATH_EXTRA_GUTENBERG . 'build/editor.css');
   wp_enqueue_script('main_js_editor_extra_gutenberg', MY_PLUGIN_PATH_EXTRA_GUTENBERG . 'build/editor.js', array('jquery','wp-element', 'wp-editor', 'wp-blocks'), '1.0', true );
}

function scripts_and_styles_frontend_extra_gutenberg(){   
   wp_enqueue_style('main_style_frontend_extra_gutenberg', MY_PLUGIN_PATH_EXTRA_GUTENBERG . 'build/frontend.css');
   wp_enqueue_script('main_js_frontend_extra_gutenberg', MY_PLUGIN_PATH_EXTRA_GUTENBERG . 'build/frontend.js', array('jquery'), '1.0', true );
}


//******************************************************************/
 
//Just Frontend
add_action('wp_enqueue_scripts', 'scripts_and_styles_frontend_extra_gutenberg');

//Frontend & Editor
add_action('enqueue_block_assets', 'scripts_and_styles_extra_gutenberg');

//Just Editor
add_action('enqueue_block_editor_assets', 'scripts_and_styles_editor_extra_gutenberg');