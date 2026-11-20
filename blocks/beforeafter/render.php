
<?php

// Render our page block here

if (!defined('ABSPATH')) {
    exit;
}

$before_image_id = $attributes['beforeImageId'] ?? 0;
$after_image_id  = $attributes['afterImageId'] ?? 0;

if (!$before_image_id || !$after_image_id) {
    return;
}

// grabbing before image
$before_image = wp_get_attachment_image(
    $before_image_id,
    'full',
    false,
    ['class' => 'before-image']
);

// grabbing the url for the after image, so it can be a background image
$after_image_url = wp_get_attachment_image_url(
    $after_image_id,
    'full'
);

if (!$before_image || !$after_image_url) {
    return;
}

$wrapper_attributes = 'beforeafterbox';

?>

<div class="<?php echo $wrapper_attributes; ?>" >

    <div class="beforeafter">
        <div class="before-label">Before</div>
        <div class="after-label">After</div>
    </div>

    <figure class="imagewrapper">
        <?php echo $before_image; ?>
    </figure>

    <div class="frontArrow"></div>

    <figure
        class="after"
        style="background-image: url('<?php echo esc_url($after_image_url); ?>');"
    ></figure>

</div>
