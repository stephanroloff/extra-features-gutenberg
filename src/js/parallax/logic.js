window.addEventListener('load', () => {

    let elements = document.querySelectorAll('.parallax');
    let parallaxElementsData = [];
    
    elements.forEach(el => {
        let speed = el.dataset.parallaxSpeed;
        let direction = el.dataset.parallaxDirection;
        let distance = el.dataset.parallaxDistance;
        
        const rect = el.getBoundingClientRect();
        let originalPosition = rect.top + window.scrollY;

        parallaxElementsData.push({
            element: el,
            speed: parseFloat(speed),
            direction: direction || 'up',
            originalPosition: originalPosition,
            distance: distance || 0
        });
    });

    let ticking = false;

    function onScroll() {
        if (!ticking) {
            window.requestAnimationFrame(() => {
                const scrollY = window.scrollY;
                const windowHeight = window.innerHeight;   

                parallaxElementsData.forEach(el => {
                    let distanceFromOriginal = scrollY - el.originalPosition + windowHeight - el.distance;

                    switch (el.direction) {
                        case 'up':
                            el.element.style.transform = `translateY(${distanceFromOriginal * -el.speed}px)`;
                            break;
                        case 'down':
                            el.element.style.transform = `translateY(${distanceFromOriginal * el.speed}px)`;
                            break;
                        case 'right':
                            el.element.style.transform = `translateX(${distanceFromOriginal * el.speed}px)`;
                            break;
                        case 'left':
                            el.element.style.transform = `translateX(${distanceFromOriginal * -el.speed}px)`;
                            break;
                        case 'rotate-right':
                            el.element.style.transformOrigin = 'center center';
                            el.element.style.transform = `rotate(${distanceFromOriginal * el.speed}deg)`;
                            break;
                        case 'rotate-left':
                            el.element.style.transformOrigin = 'center center';
                            el.element.style.transform = `rotate(${distanceFromOriginal * -el.speed}deg)`;
                            break;
                    }
                });
        
                ticking = false;
            });
            ticking = true;
        }
    }
    window.addEventListener('scroll', onScroll);
    onScroll();
});





