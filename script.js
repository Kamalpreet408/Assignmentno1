document.addEventListener('DOMContentLoaded', function () {
    const movingImage = document.getElementById('moving-image');
    const step = 2; 

    function moveImage(direction) {
        switch (direction) {
            case 'up':
                anime({
                    targets: movingImage,
                    translateY: `-=${step}`,
                    duration: 300,
                    easing: 'easeInOutQuad',
                });
                break;
            case 'down':
                anime({
                    targets: movingImage,
                    translateY: `+=${step}`,
                    duration: 300,
                    easing: 'easeInOutQuad',
                });
                break;
            case 'left':
                anime({
                    targets: movingImage,
                    translateX: `-=${step}`,
                    duration: 300,
                    easing: 'easeInOutQuad',
                });
                break;
            case 'right':
                anime({
                    targets: movingImage,
                    translateX: `+=${step}`,
                    duration: 300,
                    easing: 'easeInOutQuad',
                });
                break;
            default:
                break;
        }
    }

    document.getElementById('btn-up').addEventListener('click', () => {
        moveImage('up');
        console.log('Button clicked: Up');
    });
    document.getElementById('btn-down').addEventListener('click', () => {
        moveImage('down');
        console.log('Button clicked: Down');
    });
    document.getElementById('btn-left').addEventListener('click', () => {
        moveImage('left');
        console.log('Button clicked: Left');
    });
    document.getElementById('btn-right').addEventListener('click', () => {
        moveImage('right');
        console.log('Button clicked: Right');
    });
});
