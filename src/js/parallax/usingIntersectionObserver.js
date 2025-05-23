// import { isElementInBrowser } from './IntersectionObserver'

// function addingInViewportClass(element) {
//     element.classList.add('in-viewport');
// }

// // Lista de clases de animación
// let allAnimationsClassNames = [
//     '.fade-in-up', 
//     '.fade-in-up-250', 
//     '.fade-in-up-500', 
//     '.fade-in-up-750', 
//     '.fade-in-up-1000', 
//     '.fade-in-up-1250', 
//     '.fade-in-up-1500', 
// ];

// allAnimationsClassNames.forEach(className => {
//     let allSelectedElement = document.querySelectorAll(className);

//     allSelectedElement.forEach(selectedElement =>{
//         if (selectedElement) {
//             isElementInBrowser({
//                 element: selectedElement, 
//                 rootMargin: '-10%',        
//                 activateFunctionWhenElementIsInsideBrowserWindow: addingInViewportClass
//             });
//         }
//     })
// });
