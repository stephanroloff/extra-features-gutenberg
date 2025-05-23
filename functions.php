<?php
/**
 * Plugin Name:       Extra features for gutenberg editor
 * Description:       This is a Plugin for animations in Gutenberg Editor.
 * Requires at least: 5.8
 * Requires PHP:      7.0
 * Version:           0.1.0
 * Author:            The WordPress Contributors
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       animations-gutenberg
 *
 * @package           create-block
 */

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/reference/functions/register_block_type/
 */

define('MY_PLUGIN_PATH_EXTRA_GUTENBERG',plugin_dir_url(__FILE__));
define('MY_PLUGIN_DIR_EXTRA_GUTENBERG', plugin_dir_path(__FILE__));

include MY_PLUGIN_DIR_EXTRA_GUTENBERG . 'inc/add-html-attributes.php';
include MY_PLUGIN_DIR_EXTRA_GUTENBERG . 'inc/enqueue-assets.php';
