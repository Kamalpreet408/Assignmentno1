document.addEventListener('DOMContentLoaded', function () {
    const answerBoxes = document.querySelectorAll('.answer-box');
    const popupContainer = document.getElementById('popup-container');
    const popup = document.getElementById('popup');

    answerBoxes.forEach(function (box) {
        box.addEventListener('click', function () {
            const selectedAnswer = box.getAttribute('data-answer');
            if (selectedAnswer === 'D') {
                popup.textContent = 'Correct!';
            } else {
                popup.textContent = 'Try Again!';
            }
            popupContainer.style.visibility = 'visible';
            setTimeout(function () {
                popupContainer.style.visibility = 'hidden';
            }, 2000); 
        });
    });
});
