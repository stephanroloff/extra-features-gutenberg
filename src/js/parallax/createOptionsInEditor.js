//Paso 2
//Crear Fields en el Editor
const { createHigherOrderComponent } = wp.compose;
const { InspectorControls } = wp.blockEditor;
const { PanelBody, SelectControl } = wp.components;

const parallaxControls = createHigherOrderComponent( ( BlockEdit ) => {
    return ( props ) => {
        const { name, attributes, setAttributes } = props;

        let parallaxOptions = [
            { label: 'None', value: '' },
            { label: '0.01', value: 'parallax-001' },
            { label: '0.02', value: 'parallax-002' },
            { label: '0.03', value: 'parallax-003' },
            { label: '0.04', value: 'parallax-004' },
            { label: '0.05', value: 'parallax-005' },
            { label: '0.06', value: 'parallax-006' },
            { label: '0.07', value: 'parallax-007' },
            { label: '0.08', value: 'parallax-008' },
            { label: '0.09', value: 'parallax-009' },
            { label: '0.1', value: 'parallax-01' },
            { label: '0.2', value: 'parallax-02' },
            { label: '0.3', value: 'parallax-03' },
            { label: '0.4', value: 'parallax-04' },
            { label: '0.5', value: 'parallax-05' },
            { label: '0.6', value: 'parallax-06' },
            { label: '0.7', value: 'parallax-07' },
            { label: '0.8', value: 'parallax-08' },
            { label: '0.9', value: 'parallax-09' },
            { label: '1.0', value: 'parallax-10' },
        ];

        let directionOptions = [
            { label: 'None', value: '' },
            { label: 'Up', value: 'parallax-up' },
            { label: 'Down', value: 'parallax-down' },
            { label: 'Right', value: 'parallax-right' },
            { label: 'Left', value: 'parallax-left' },
            { label: 'Rotate Right', value: 'rotate-right' },
            { label: 'Rotate Left', value: 'rotate-left' },
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
                        <SelectControl
                            __nextHasNoMarginBottom
                            label="Parallax Direction"
                            value={ attributes.parallax_direction } 
                            onChange={ ( newValue ) => setAttributes( { parallax_direction: newValue } ) } 
                            options={directionOptions}
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