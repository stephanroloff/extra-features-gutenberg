<?php
//Paso 3
// Add HTML attribute on the server side (PHP)
function add_html_attr( $block_content, $block ) {
   if ( 'core/group' === $block['blockName']) {
        $processor = new WP_HTML_Tag_Processor( $block_content );

        preg_match('/style="([^"]*)"/', $block['innerHTML'], $matches);
      
        $inlineStyle='';

        if(isset($matches[1])){
            $inlineStyle = $matches[1] . "; ";
        }

        if ( $processor->next_tag() ) {

            //Position
            if(isset($block['attrs']['position'])){
                if($block['attrs']['position']=='relative' || $block['attrs']['position']=='absolute' || $block['attrs']['position']=='fixed'){
                    $position  = "position: " . $block['attrs']['position'] . "; width: 100%; ";
                    // $position  = "position: " . $block['attrs']['position'] . "; width: auto; ";
                    $inlineStyle = $inlineStyle . $position;
                }
            }
            if(isset($block['attrs']['top'])){
                $top  = "top: " . $block['attrs']['top'] . "; ";
                $inlineStyle = $inlineStyle . $top;
            }
            if(isset($block['attrs']['bottom'])){
                $bottom  = "bottom: " . $block['attrs']['bottom'] . "; ";
                $inlineStyle = $inlineStyle . $bottom;
            }
            if(isset($block['attrs']['left'])){
                $left  = "left: " . $block['attrs']['left'] . "; ";
                $inlineStyle = $inlineStyle . $left;
            }
            if(isset($block['attrs']['right'])){
                $right  = "right: " . $block['attrs']['right'] . "; ";
                $inlineStyle = $inlineStyle . $right;
            }
            if(isset($block['attrs']['zindex'])){
                $zindex  = "z-index: " . $block['attrs']['zindex'] . "; ";
                $inlineStyle = $inlineStyle . $zindex;
            }
            if(isset($block['attrs']['overflow'])){
                $overflow  = "overflow: " . $block['attrs']['overflow'] . "; ";
                $inlineStyle = $inlineStyle . $overflow;
            }
            if(isset($block['attrs']['height'])){
                $height  = "height: " . $block['attrs']['height'] . "; ";
                $inlineStyle = $inlineStyle . $height;
            }

            //Animations
            if(isset($block['attrs']['animation'])){
                $processor->add_class( $block['attrs']['animation']);
            }

            //Animations
            if(isset($block['attrs']['parallax_direction'])){
                $processor->add_class( 'parallax');
            }

            //Parallax Direction
            if(isset($block['attrs']['parallax_direction'])){
                $processor->set_attribute( 'data-parallax-direction', $block['attrs']['parallax_direction'] );
            }

            //Parallax Speed
            if(!empty($block['attrs']['parallax_speed'])){
                $processor->set_attribute( 'data-parallax-speed', $block['attrs']['parallax_speed'] );
            }

            // echo '<pre>';
            // var_dump($inlineStyle);
            // echo '</pre>';

            $processor->set_attribute( 'style', $inlineStyle );
        }  

        return $processor->get_updated_html();
   }
   return $block_content;
}

add_filter( 'render_block', 'add_html_attr', 10, 2 );