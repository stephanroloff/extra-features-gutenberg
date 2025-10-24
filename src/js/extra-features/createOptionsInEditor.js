//Paso 2
//Crear Fields en el Editor
const { createHigherOrderComponent } = wp.compose;
const { InspectorControls } = wp.blockEditor;
const { PanelBody, SelectControl } = wp.components;
import { __experimentalUnitControl as UnitControl } from '@wordpress/components';
import { __experimentalNumberControl as NumberControl } from '@wordpress/components';
import { useRef, useEffect } from "react";

const positioningControls = createHigherOrderComponent( ( BlockEdit ) => {
    return ( props ) => {
        const { name, attributes, setAttributes } = props;
        const blockRef = useRef(null);
        
        useEffect(() => {
            
            const currentRef = blockRef.current; 
            if(currentRef){
                // const groupDiv = currentRef.querySelector('div');
                const groupDiv = currentRef.nextElementSibling;
                // currentRef.remove();

                if(groupDiv){
                    if(attributes.position){
                        groupDiv.style.position = attributes.position; 
                        groupDiv.style.width = '100%'; 
                    }
                    
                    if(attributes.top){
                        groupDiv.style.top = attributes.top;
                    }else{
                        groupDiv.style.top = 'auto';
                    }
                    
                    if(attributes.bottom){
                        groupDiv.style.bottom = attributes.bottom;
                    }else{
                        groupDiv.style.bottom = 'auto';
                    }
                    
                    if(attributes.left){
                        groupDiv.style.left = attributes.left;
                    }else{
                        groupDiv.style.left = 'auto';
                    }

                    if(attributes.right){
                        groupDiv.style.right = attributes.right;
                    }else{
                        groupDiv.style.right = 'auto';
                    }

                    if(attributes.zindex){
                        groupDiv.style.zIndex = attributes.zindex;
                    }else{
                        groupDiv.style.zIndex = 'auto';
                    }
                    
                    if(attributes.overflow){
                        groupDiv.style.overflow = attributes.overflow;
                    }else{
                        groupDiv.style.overflow = 'visible';
                    }

                    if(attributes.height){
                        groupDiv.style.height = attributes.height;
                    }else{
                        groupDiv.style.height = 'auto';
                    }
                }
            }
        }, [attributes])
        
        if (name !== 'core/group' ) {
            return <BlockEdit {...props} />;
        }

        return (
            <>
                <div ref={blockRef}></div>
                <BlockEdit {...props} />
                <InspectorControls>
                    <PanelBody title="Extra CSS Features" initialOpen={ false }>
                        <SelectControl
                            __nextHasNoMarginBottom
                            label="Position"
                            value={ attributes.position } 
                            onChange={ ( newValue ) => setAttributes( { position: newValue } ) } 
                            options={ [
                                {label:'Static', value: 'static'},
                                {label:'Relative', value: 'relative'},
                                {label:'Absolute', value: 'absolute'},
                                {label:'Fixed', value: 'fixed'},
                            ] }
                        />

                        {(attributes.position === 'relative' || attributes.position === 'absolute') && (
                            <>
                                <div style={{ display: 'flex' }}>

                                    <div style={{ marginRight: '20px' }}>
                                        <div style={{width: '100px', marginBottom: '10px'}}>
                                            <UnitControl
                                                onChange={ ( newValue ) => setAttributes( { top: newValue } ) } 
                                                // onUnitChange={ e => console.log("new unit") }
                                                label="Top"
                                                isUnitSelectTabbable
                                                value={ attributes.top } 
                                            />
                                        </div>
                                        <div style={{width: '100px', marginBottom: '10px'}}>
                                            <UnitControl
                                                onChange={ ( newValue ) => setAttributes( { left: newValue } ) } 
                                                // onUnitChange={ e => console.log("new unit") }
                                                label="Left"
                                                isUnitSelectTabbable
                                                value={ attributes.left } 
                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <div style={{width: '100px', marginBottom: '10px'}}>
                                            <UnitControl
                                                onChange={ ( newValue ) => setAttributes( { bottom: newValue } ) } 
                                                // onUnitChange={ e => console.log("new unit") }
                                                label="Bottom"
                                                isUnitSelectTabbable
                                                value={ attributes.bottom } 
                                            />
                                        </div>
                                        <div style={{width: '100px', marginBottom: '10px'}}>
                                            <UnitControl
                                                onChange={ ( newValue ) => setAttributes( { right: newValue } ) } 
                                                // onUnitChange={ e => console.log("new unit") }
                                                label="Right"
                                                isUnitSelectTabbable
                                                value={ attributes.right } 
                                            />
                                        </div>
                                    </div>
                                    
                                </div>
                                
                                <NumberControl
                                    label="z-index"
                                    isShiftStepEnabled={ true }
                                    onChange={ ( newValue ) => setAttributes( { zindex: newValue } ) } 
                                    shiftStep={ 1 }
                                    value={ attributes.zindex }
                                    min={-1000000}
                                    max={1000000}
                                />
                            </>
                            
                        )}

                        <SelectControl
                            __nextHasNoMarginBottom
                            label="Overflow"
                            value={ attributes.overflow } 
                            onChange={ ( newValue ) => setAttributes( { overflow: newValue } ) } 
                            options={ [
                                {label:'Visible', value: 'visible'},
                                {label:'Hidden', value: 'hidden'},
                                {label:'Scroll', value: 'scroll'},
                            ] }
                        />  
                        <UnitControl
                            onChange={ ( newValue ) => setAttributes( { height: newValue } ) } 
                            // onUnitChange={ e => console.log("new unit") }
                            label="Height"
                            isUnitSelectTabbable
                            value={ attributes.height } 
                        />

                    </PanelBody>
                </InspectorControls>
            </>
        );
    };
}, 'positioningControls' );

wp.hooks.addFilter(
    'editor.BlockEdit',
    'editor-gutenberg/extra-features',
    positioningControls
);
