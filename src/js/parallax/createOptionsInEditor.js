//Paso 2
//Crear Fields en el Editor
const { createHigherOrderComponent } = wp.compose;
const { InspectorControls } = wp.blockEditor;
const { PanelBody, SelectControl } = wp.components;

const parallaxControls = createHigherOrderComponent( ( BlockEdit ) => {
    return ( props ) => {
        const { name, attributes, setAttributes } = props;

        let parallaxOptions = [
            {label:'None', value: 'none'},
            {label:'Parallax, speed : 0', value: 'parallax'},
            {label:'Parallax, speed : 250', value: 'parallax-250'},
        ];

        if (name !== 'core/group' ) {
            return <BlockEdit {...props} />;
        }

        return (
            <>
                <BlockEdit {...props} />
                <InspectorControls>
                    <PanelBody title="Parallax" initialOpen={ false }>
                        <SelectControl
                            __nextHasNoMarginBottom
                            label="Parallax Speed"
                            value={ attributes.parallax } 
                            onChange={ ( newValue ) => setAttributes( { parallax: newValue } ) } 
                            options={parallaxOptions}
                        />
                    </PanelBody>
                </InspectorControls>
            </>
        );
    };
}, 'parallaxControls' );

wp.hooks.addFilter(
    'editor.BlockEdit',
    'editor-gutenberg/parallax',
    parallaxControls
);