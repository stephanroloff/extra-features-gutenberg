window.addEventListener('load', () => {

    let elements = document.querySelectorAll('.parallax');
    let parallaxElementsData = [];
    
    elements.forEach(el => {
        let speed = el.dataset.parallaxSpeed;
        let direction = el.dataset.parallaxDirection;
        
        const rect = el.getBoundingClientRect();
        let originalPosition = rect.top + window.scrollY;

        parallaxElementsData.push({
            element: el,
            speed: parseFloat(speed),
            direction: direction || 'up',
            originalPosition: originalPosition
        });
    });

    let ticking = false;

    function onScroll() {
        if (!ticking) {
            window.requestAnimationFrame(() => {
                const scrollY = window.scrollY;
                const windowHeight = window.innerHeight;   

                parallaxElementsData.forEach(el => {
                    let distanceFromOriginal = scrollY - el.originalPosition + windowHeight - 1800;
                    console.log('distanceFromOriginal:', distanceFromOriginal);
                    el.element.style.transform = `translateY(${distanceFromOriginal * -el.speed}px)`;
                });
        
                ticking = false;
            });
            ticking = true;
        }
    }
    window.addEventListener('scroll', onScroll);
    onScroll();
});





