//Info:
//https://developer.wordpress.org/block-editor/reference-guides/filters/block-filters/
//https://css-tricks.com/a-crash-course-in-wordpress-block-filters/

//Paso 1
//Create Attribute
function addNewAttributeParallax( settings, name ) {
    if (name === 'core/group') {
        settings.attributes = {
            ...settings.attributes,
            parallax_speed: {
                type: 'string',
                default: ''
            },
            parallax_direction: {
                type: 'string',
                default: ''
            },
            parallax_distance: {
                type: 'string',
                default: '0'
            }
        };
    }
    return settings;
}

wp.hooks.addFilter(
    'blocks.registerBlockType',
    'editor-gutenberg/add-attribute-parallax',
    addNewAttributeParallax
);