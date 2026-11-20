<?php

/**
 * Plugin Name: Before After Manager
 * Description: Interactive before and after image comparison Gutenberg block.
 * Version: 1.0.0
 * Requires at least: 6.7
 * Requires PHP: 8.1
 * License: MIT License
 */

if (!defined('ABSPATH')) {
    exit;
}

// defining constants
define('BA_MANAGER_PATH', plugin_dir_path(__FILE__));
define('BA_MANAGER_URL', plugin_dir_url(__FILE__));

// Our file where we register our block and files
require_once BA_MANAGER_PATH . 'inc/register-block.php';