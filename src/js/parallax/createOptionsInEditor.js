//Paso 2
//Crear Fields en el Editor
const { createHigherOrderComponent } = wp.compose;
const { InspectorControls } = wp.blockEditor;
const { PanelBody, SelectControl } = wp.components;
import { __experimentalNumberControl as NumberControl } from '@wordpress/components';

const parallaxControls = createHigherOrderComponent( ( BlockEdit ) => {
    return ( props ) => {
        const { name, attributes, setAttributes } = props;

        let parallaxOptions = [
            { label: 'None', value: '' },
            { label: '0.01', value: '0.01' },
            { label: '0.02', value: '0.02' },
            { label: '0.03', value: '0.03' },
            { label: '0.04', value: '0.04' },
            { label: '0.05', value: '0.05' },
            { label: '0.06', value: '0.06' },
            { label: '0.07', value: '0.07' },
            { label: '0.08', value: '0.08' },
            { label: '0.09', value: '0.09' },
            { label: '0.1', value: '0.1' },
            { label: '0.2', value: '0.2' },
            { label: '0.3', value: '0.3' },
            { label: '0.4', value: '0.4' },
            { label: '0.5', value: '0.5' },
            { label: '0.6', value: '0.6' },
            { label: '0.7', value: '0.7' },
            { label: '0.8', value: '0.8' },
            { label: '0.9', value: '0.9' },
            { label: '1.0', value: '1.0' },
        ];

        let directionOptions = [
            { label: 'None', value: '' },
            { label: 'Up', value: 'up' },
            { label: 'Down', value: 'down' },
            { label: 'Right', value: 'right' },
            { label: 'Left', value: 'left' },
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
                            __next40pxDefaultSize
                            label="Parallax Speed"
                            value={ attributes.parallax_speed } 
                            onChange={ ( newValue ) => setAttributes( { parallax_speed: newValue } ) } 
                            options={parallaxOptions}
                        />
                        <SelectControl
                            __nextHasNoMarginBottom
                            __next40pxDefaultSize
                            label="Parallax Direction"
                            value={ attributes.parallax_direction } 
                            onChange={ ( newValue ) => setAttributes( { parallax_direction: newValue } ) } 
                            options={directionOptions}
                        />
                        <NumberControl
                            __nextHasNoMarginBottom
                            __next40pxDefaultSize
                            label="Parallax Distance"
                            isShiftStepEnabled={ true }
                            shiftStep={ 10 }
                            value={ attributes.parallax_distance } 
                            onChange={ ( newValue ) => setAttributes( { parallax_distance: newValue } ) } 
                            min={-1000000}
                            max={1000000}
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