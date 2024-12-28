document.addEventListener('DOMContentLoaded', function () {
    let quizForm = document.getElementById('quizForm');
    let submitButton = document.getElementById('submit-button');
    let resetButton = document.createElement('button');
    resetButton.textContent = 'Пройти тест заново';
    resetButton.id = 'reset-button';
    resetButton.style.display = 'none';
    quizForm.appendChild(resetButton);


    let correctAnswers = [
        'Джеки',
        'Сильверхэнд',
        'Porsche',
        'Дакота',
        'Мальстрём',
        'Наёмник'
    ];

    let successMessages = quizForm.querySelectorAll('.success-message');
    let errorMessages = quizForm.querySelectorAll('.error-message');

    submitButton.addEventListener('click', function (event) {
        event.preventDefault();
        let score = 0;


        for (let i = 0; i < correctAnswers.length; i++) {
            let userAnswer = quizForm.elements['q' + (i + 1)].value.trim();

            if (userAnswer.toLowerCase() === correctAnswers[i].toLowerCase()) {
                score++;
                successMessages[i].textContent = 'Ответ правильный!';
                errorMessages[i].textContent = '';
            } else {
                successMessages[i].textContent = '';
                errorMessages[i].textContent = `Ответ неправильный, правильный ответ: ${correctAnswers[i]}`;
            }
        }

        let resultSection = document.getElementById('test-result');
        resultSection.textContent = `Вы набрали ${score} из ${correctAnswers.length} баллов.`;
        submitButton.remove();
        resetButton.style.display = 'block';

        sessionStorage.setItem("lastScore", score);
    });

    resetButton.addEventListener('click', function () {
        quizForm.reset();
        for (let i = 0; i < successMessages.length; i++) {
            successMessages[i].textContent = '';
            errorMessages[i].textContent = '';
        }
        document.getElementById('test-result').textContent = '';
        resetButton.style.display = 'none';
    });
});