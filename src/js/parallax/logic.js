export default function elementSpeed(elementSelector, speed){
    // Obtén el elemento
    let elements = document.querySelectorAll(elementSelector);
  
    if(!elements){
      return;
    }

    elements.forEach(element => {
        
        // Guarda la posición original del elemento respecto al inicion del body (valor fijo)
        let posicionOriginal = element.offsetTop;
      
        // Agrega un evento de desplazamiento
        window.addEventListener('scroll', function() {
          console.log('Posicion Original', posicionOriginal); //valor fijo
          console.log('Tamano ventana', window.innerHeight); //valor fijo
          // console.log('Posicion actual', window.scrollY);
          
          // Calcula la distancia entre la posición original y la posición actual
          let distanciaDesdeOriginal;
      
          if(posicionOriginal < window.innerHeight){
            distanciaDesdeOriginal = window.scrollY;
          }else{
            //se le resta el window.innerHeight porque el valor de la posicion se considera cuando el elemento toca el marco superior del browser.
            //sin embargo queremos considerar la altura cuando toca el marco inferior del browser, para eso se le resta window.innerHeight que es la altura del la ventana del browser.
            // distanciaDesdeOriginal = window.scrollY - (posicionOriginal-(window.innerHeight * -0.5));
            // distanciaDesdeOriginal = window.scrollY - (posicionOriginal-(window.innerHeight * 0.5));
            distanciaDesdeOriginal = window.scrollY - (posicionOriginal-(window.innerHeight * 1));
          }
      
          // Asegúrate de que la distancia no sea negativa
          let rate = distanciaDesdeOriginal * speed;
      
          // Mueve el elemento a una velocidad diferente
          element.style.position = 'relative';
          element.style.transform = `translate3d(0px, -${rate}px, 0px)`;
          // element.style.transform = `translate3d(0px, ${rate}px, 0px)`;
        //   element.style.transform = `translate3d(${rate}px, 0px, 0px)`; //nach rechts
          // element.style.transform = `translate3d(-${rate}px, 0px, 0px)`; //nach links
        //   element.style.transform = `rotate(${rate/40}deg)`; //nach rechts  40 es slowness
        //   element.style.transform = `rotate(-${rate}deg)`; //nach links
        });
    });
}
elementSpeed('.parallax-01', 0.1);  
elementSpeed('.parallax-02', 0.2);  
elementSpeed('.parallax-03', 0.3);  
elementSpeed('.parallax-04', 0.4);  
elementSpeed('.parallax-05', 0.5);  
elementSpeed('.parallax-06', 0.6);  
elementSpeed('.parallax-07', 0.7);  
elementSpeed('.parallax-08', 0.8);  
elementSpeed('.parallax-09', 0.9);  
elementSpeed('.parallax-10', 1.0);  