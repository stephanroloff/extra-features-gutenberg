//Info:
//https://developer.wordpress.org/block-editor/reference-guides/filters/block-filters/
//https://css-tricks.com/a-crash-course-in-wordpress-block-filters/

//Paso 1
//Create Attribute
function addNewAnimationAttributePosition( settings, name ) {
    if (name === 'core/group') {
        settings.attributes = {
            ...settings.attributes,
            animation: {
                type: 'string',
                default: ''
            },
        };
    }
    return settings;
}

wp.hooks.addFilter(
    'blocks.registerBlockType',
    'position-gutenberg/add-new-animation-attribute',
    addNewAnimationAttributePosition
);