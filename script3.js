document.addEventListener('DOMContentLoaded', function () {
    const imagePlaceholder = document.getElementById('image-placeholder');
    const scrollActivatedImage = document.createElement('img');
    scrollActivatedImage.src = './assets/R2.jpg';
    scrollActivatedImage.classList.add('scroll-activated');
    scrollActivatedImage.style.opacity = 0;

    let lastScrollPosition = 0;

    window.addEventListener('scroll', function () {
        const currentScrollPosition = window.scrollY;

        if (currentScrollPosition > lastScrollPosition) {
            anime({
                targets: scrollActivatedImage,
                opacity: 1,
                duration: 1000, 
                easing: 'easeInOutQuad', 
            });
        } else {
            anime({
                targets: scrollActivatedImage,
                opacity: 0,
                duration: 100,
                easing: 'easeInOutQuad',
            });
        }

        lastScrollPosition = currentScrollPosition;
    });

    imagePlaceholder.appendChild(scrollActivatedImage);
});
