<?php

if (!defined('ABSPATH')) {
    exit;
}

// Enqueing our scripts
function ba_enqueue_scripts() {

    // return on these types of pages
    if (!is_singular() || !has_block(
        'beforeafter-manager/comparison',
        get_queried_object_id()
    )) {
        return;
    }

    // need these for the draggable effect.
    wp_enqueue_script('jquery-ui-draggable');
    wp_enqueue_script('jquery-ui-resizable');

    wp_enqueue_style(
        'ba-jquery-ui',
        'https://code.jquery.com/ui/1.12.1/themes/smoothness/jquery-ui.css',
        [],
        '1.12.1'
    );
}
add_action('wp_enqueue_scripts', 'ba_enqueue_scripts');

function ba_register_comparison_block() {

    // registering our script and its dependencies.
    wp_register_script(
        'ba-comparison-editor',
        BA_MANAGER_URL . 'blocks/beforeafter/index.js',
        [
            'wp-blocks',
            'wp-element',
            'wp-block-editor',
            'wp-components',
            'wp-data',
            'wp-server-side-render',
            'ba-comparison-view'
        ],
        '1.0.0',
        true
    );

    // our styles
    wp_register_style(
        'ba-comparison-editor-style',
        BA_MANAGER_URL . 'blocks/beforeafter/editor.css',
        [],
        '1.0.0'
    );

    wp_register_style(
        'ba-comparison-style',
        BA_MANAGER_URL . 'blocks/beforeafter/style.css',
        ['dashicons'],
        '1.0.0'
    );

    // our view js file
    wp_register_script(
        'ba-comparison-view',
        BA_MANAGER_URL . 'blocks/beforeafter/view.js',
        ['jquery', 'jquery-ui-draggable', 'jquery-ui-resizable'],
        '1.0.0',
        true
    );

    register_block_type(
        BA_MANAGER_PATH . 'blocks/beforeafter'
    );
}

add_action('init', 'ba_register_comparison_block');

// Makes our own category for the block section.
function ba_register_block_category($categories) {

    $categories[] = [
        'slug'  => 'beforeafter-manager',
        'title' => 'Before After Manager',
        'icon'  => 'images-alt2'
    ];

    return $categories;
}

add_filter('block_categories_all', 'ba_register_block_category');

// needed this for editor to show our dashicon arrow.
function ba_enqueue_dashicons() {
    wp_enqueue_style('dashicons');
}

// Load Dashicons in the editor content and frontend.
add_action('enqueue_block_assets', 'ba_enqueue_dashicons');