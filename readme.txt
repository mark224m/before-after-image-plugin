# Before After Manager

A custom WordPress plugin that allows you to create interactive before-and-after image comparisons using a Gutenberg block.

Easily select images from the WordPress Media Library and display them in an interactive draggable slider on your website.

## Preview

### Frontend

![Before and After Frontend Preview](assets/images/frontend-preview.png)

### Interactive Slider Demonstration

![Before and After Slider Demo](assets/gifs/videodemo.gif)

### Gutenberg Editor

![Gutenberg Editor Preview](assets/images/gutenberg-image.png)

## Features

- **Gutenberg Block:** Add before-and-after comparisons directly to WordPress pages and posts.
- **Media Library Integration:** Select and replace images using the native WordPress Media Library.
- **Interactive Slider:** Drag the slider handle to reveal the before-and-after images.

## Installation

1. Download or clone this repository.
2. Place the `beforeafter-manager` folder inside:

   `wp-content/plugins/`

3. Navigate to **WordPress Admin → Plugins**.
4. Find **Before After Manager** and activate it.
5. Open an existing page or create a new one.

## Usage

### 1. Add the Gutenberg Block

Open the WordPress block editor and search for:

`Before/After Comparison`

Select the block to add it to your page.

### 2. Select Your Images

Open the block settings in the sidebar.

Choose a Before Image and an After Image from the WordPress Media Library.

### 3. Preview Your Comparison

Once both images have been selected, the comparison will render inside the Gutenberg editor.

### 4. Publish Your Page

Save or publish your page to display the interactive comparison on the frontend.

## Technologies

- PHP
- WordPress Plugin API
- Gutenberg Block Editor
- JavaScript
- jQuery
- jQuery UI
- CSS3

## Requirements

- WordPress version >= 6.7
- PHP version >= 8.1

## Development

The plugin uses native WordPress functionality.

## License

MIT License