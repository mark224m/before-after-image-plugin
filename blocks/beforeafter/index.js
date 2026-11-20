
(function (blocks, element, blockEditor, components, serverSideRender) {
    const el = element.createElement;

    const { registerBlockType } = blocks;
    const { InspectorControls, MediaUpload, MediaUploadCheck, useBlockProps } = blockEditor;
    const { PanelBody, Button } = components;
    const ServerSideRender = serverSideRender;

    // creating our block and its block edit section
    registerBlockType('beforeafter-manager/comparison', {
        edit: function (props) {
            const { attributes, setAttributes } = props;

            const blockProps = useBlockProps({
                className: 'beforeafter-editor-preview'
            });

            // image selection buttons and their functionality/ label
            function imageSelector(type, label) {
                const attributeName = type === 'before'
                    ? 'beforeImageId'
                    : 'afterImageId';

                const imageId = attributes[attributeName];

                return el('div', { className: 'beforeafter-editor-field' },
                    el('h3', {}, label),

                    //media upload buttons
                    el(MediaUploadCheck, {},
                        el(MediaUpload, {
                            onSelect: function (image) {
                                setAttributes({
                                    [attributeName]: image.id
                                });
                            },
                            allowedTypes: ['image'],
                            value: imageId,
                            render: function (obj) {
                                return el(Button, {
                                    onClick: obj.open,
                                    variant: 'secondary'
                                }, imageId ? 'Replace Image' : 'Select Image'); // if no image is selected then select image
                            }
                        })
                    ),

                    // our remove image button
                    imageId && el(Button, {
                        variant: 'tertiary',
                        isDestructive: true,
                        onClick: function () {
                            setAttributes({ [attributeName]: 0 });
                        }
                    }, 'Remove Image')
                );
            }

            return el(element.Fragment, {},

                el(InspectorControls, {},
                    el(PanelBody, {
                        title: 'Before / After Images',
                        initialOpen: true
                    },
                        imageSelector('before', 'Before Image (use same image size for both)'),
                        imageSelector('after', 'After Image')
                    )
                ),

                el('div', blockProps,
                    el(ServerSideRender, {
                        block: 'beforeafter-manager/comparison',
                        attributes: attributes
                    })
                )
            );
        },

        save: function () {
            return null;
        }
    });

})(
    window.wp.blocks,
    window.wp.element,
    window.wp.blockEditor,
    window.wp.components,
    window.wp.serverSideRender
);
