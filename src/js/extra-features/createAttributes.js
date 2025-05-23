//Info:
//https://developer.wordpress.org/block-editor/reference-guides/filters/block-filters/
//https://css-tricks.com/a-crash-course-in-wordpress-block-filters/

//Paso 1
//Create Attribute
function addNewAttributesExtraFeatures( settings, name ) {
    if (name === 'core/group') {
        settings.attributes = {
            ...settings.attributes,
            position: {
                type: 'string',
                default: ''
            },
            top: {
                type: 'string',
                default: ''
            },
            bottom: {
                type: 'string',
                default: ''
            },
            left: {
                type: 'string',
                default: ''
            },
            right: {
                type: 'string',
                default: ''
            },
            zindex: {
                type: 'string',
                default: '0'
            },
            overflow: {
                type: 'string',
                default: ''
            }
        };
    }
    return settings;
}

wp.hooks.addFilter(
    'blocks.registerBlockType',
    'editor-gutenberg/add-attribute-extra-features',
    addNewAttributesExtraFeatures
);