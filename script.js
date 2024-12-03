document.forms['authForm'].addEventListener('submit', function (event) {
    event.preventDefault();

    const authForm = document.forms['authForm'];
    const name = authForm['name'];
    const birthdate = authForm['birthdate'];
    const gender = authForm['gender'];

    if (!name.validity.valid) {
        name.nextElementSibling.style.display = 'inline';
    } else {
        name.nextElementSibling.style.display = 'none';
    }

    if (!birthdate.validity.valid) {
        birthdate.nextElementSibling.style.display = 'inline';
    } else {
        birthdate.nextElementSibling.style.display = 'none';
    }

    if (!gender.value) {
        alert("Выберите пол!");
        return;
    }

    document.querySelector('[name="slide2"]').style.display = 'block';
    document.querySelector('[name="slide1"]').style.display = 'none';
});

document.forms['testForm'].addEventListener('submit', function (event) {
    event.preventDefault();

    let score = 0;
    const testForm = document.forms['testForm'];

    score += parseInt(testForm['question1'].value) || 0;
    score += parseInt(testForm['question2'].value) || 0;
    score += parseInt(testForm['question3'].value) || 0;
    score += parseInt(testForm['question6'].value) || 0;

    // Подсчитываем ответы на текстовые поля
    const invisibilityItem = testForm['invisibilityItem'].value ? 1 : 0;
    const lifestealerSkill = testForm['lifestealerSkill'].value ? 1 : 0;

    score += invisibilityItem;
    score += lifestealerSkill;

    let resultText = `Ваш результат: ${score} из 6. `;
    if (score === 0) {
        resultText += 'Ты - нормальный человек';
    } else if (score <= 2) {
        resultText += 'Не играй в доту (ты бот)';
    } else if (score <= 4) {
        resultText += 'Ты потерян для общества';
    } else {
        resultText += 'Твою душу не спасти';
    }

    const results = document.querySelector('[name="results"]');
    results.textContent = resultText;

    const name = document.forms['authForm']['name'].value;
    const birthdate = document.forms['authForm']['birthdate'].value;
    const gender = document.forms['authForm']['gender'].value;
    const resultInfo = `Имя: ${name}, Дата рождения: ${birthdate}, Пол: ${gender}`;

    const resultDetails = document.createElement('p');
    resultDetails.textContent = resultInfo;
    results.appendChild(resultDetails);

    document.querySelector('[name="slide2"]').style.display = 'none';
    document.querySelector('[name="slide3"]').style.display = 'block';
});

document.querySelector('[name="retryButton"]').addEventListener('click', function () {
    document.querySelector('[name="slide3"]').style.display = 'none';
    document.querySelector('[name="slide1"]').style.display = 'block';

    const authForm = document.forms['authForm'];
    const testForm = document.forms['testForm'];

    authForm.reset();
    testForm.reset();
});
