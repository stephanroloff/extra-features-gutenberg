//Paso 2
//Crear Fields en el Editor
const { createHigherOrderComponent } = wp.compose;
const { InspectorControls } = wp.blockEditor;
const { PanelBody, SelectControl } = wp.components;

const animationControls = createHigherOrderComponent( ( BlockEdit ) => {
    return ( props ) => {
        const { name, attributes, setAttributes } = props;

        let animationOptions = [
            {label:'None', value: 'none'},
            {label:'Fade in up, delay : 0', value: 'fade-in-up'},
            {label:'Fade in up, delay : 250ms', value: 'fade-in-up-250'},
            {label:'Fade in up, delay : 500ms', value: 'fade-in-up-500'},
            {label:'Fade in up, delay : 750ms', value: 'fade-in-up-750'},
            {label:'Fade in up, delay : 1000ms', value: 'fade-in-up-1000'},
            {label:'Fade in up, delay : 1250ms', value: 'fade-in-up-1250'},
            {label:'Fade in up, delay : 1500ms', value: 'fade-in-up-1500'},
        ];

        if (name !== 'core/group' ) {
            return <BlockEdit {...props} />;
        }

        return (
            <>
                <BlockEdit {...props} />
                <InspectorControls>
                    <PanelBody title="Animations" initialOpen={ false }>
                        <SelectControl
                            __nextHasNoMarginBottom
                            label="Animation Name"
                            value={ attributes.animation } 
                            onChange={ ( newValue ) => setAttributes( { animation: newValue } ) } 
                            options={animationOptions}
                        />
                    </PanelBody>
                </InspectorControls>
            </>
        );
    };
}, 'animationControls' );

wp.hooks.addFilter(
    'editor.BlockEdit',
    'position-gutenberg/animation-inspector-controls',
    animationControls
);