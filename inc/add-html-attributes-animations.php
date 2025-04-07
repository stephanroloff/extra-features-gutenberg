<?php
//Paso 3
// Add HTML attribute on the server side (PHP)
function add_html_attr_animation_animations_gutenberg( $block_content, $block ) {
   if ( 'core/group' === $block['blockName']) {
        $processor = new WP_HTML_Tag_Processor( $block_content );

        if ( $processor->next_tag() ) {

            // echo '<pre>';
            // var_dump($block['attrs']['animation']);
            // echo '</pre>';

            if(isset($block['attrs']['animation'])){
                $processor->add_class( $block['attrs']['animation']);
            }
        }  

        return $processor->get_updated_html();
   }
   return $block_content;
}

add_filter( 'render_block', 'add_html_attr_animation_animations_gutenberg', 10, 2 );