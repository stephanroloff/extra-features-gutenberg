export function isElementInBrowser(params) {
    let {element, rootMargin, activateFunctionWhenElementIsInsideBrowserWindow} = params;

    const opciones = {
        root: null,      // El elemento que se utilizará como área de visión. Si es null, se usará el viewport.
        rootMargin: rootMargin, // Margen alrededor del área de visión. Puedes ajustarlo para comenzar la observación antes o después de que el elemento entre en la vista. (Valores posibles en pixeles,%, etc)
        threshold: 0.5   // Un valor entre 0 y 1 que indica el porcentaje del elemento que debe estar visible para disparar la devolución de llamada.
      };
    
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
          const isIntersecting = entry.isIntersecting;
    
          if(isIntersecting){
            activateFunctionWhenElementIsInsideBrowserWindow(element); 
          }
        });
      }, opciones);
    
      observer.observe(element);
}
