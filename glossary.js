document.addEventListener('DOMContentLoaded', () => {
    const glossaryData = [
        { term: "Ви", description: "Главный герой игры. Наёмник Найт-Сити" },
        { term: "Джеки", description: "Напарник Ви. Вооружён парой культовых пистолетов Ла Чингона Дорада." },
        { term: "Ти-баг", description: "Нетранер из команды Ви." },
        { term: "Декстер ДеШон", description: "Фиксер топового уровня. Вооружён культовым пистолетом План Б." },
        { term: "Джонни Сильверхэн", description: "Забытая легенда прошлого, которго помнят только упрямые. Рокер, бывший военный и террорист умерший под урасака тауэр, который взорвал во имя анархии и вореки корпаритовному господству. Умер в 2023 году. Был вооружён Малориан армс 3516" },
        { term: "Найт Сити", description: "это город средних размеров, расположенный на Западном Побережье США. На всей площади Найт-Сити, население составляет около 5,000,000 человек, причём большинство из них живёт в обширных пригородах на юго-западе. Сам город расположен в большой бухте, окружённой несколькими небольшими городками и пригородными территориями (Уэстбрук, Хевуд, Пасифика, Южный Найт-Сити)." },
        { term: "Вакако Окада", description: "богатая и влиятельная японка, которая работает в качестве фиксера в Уэстбруке и управляет салоном патинко на Чпок-стрит в Джапан-тауне. При выполнении всех своих квестов выдаёт культовую катану Бякко" },
        { term: "Муамар «Эль Капитан» Рейес", description: "фиксер Санто-Доминго, владелец веб-сайта по продаже подержанных машин «Автофиксер», бывший сотрудник корпорации. При выполнении всех своих квестов выдаёт культовый дробовик Кровавая Мария" },
        { term: "Дакота Смит", description: "фиксер Пустошей, кочевница из клана Альдекальдо, глава клана Помо из Северной Калифорнии, статик, техник и владелица автомастерской в Роки-Ридже, Восточные Пустоши. При выполнении всех своих квестов выдаёт автомобиль Тортон Макино «Сагуаро»" }
    ];

    const searchInput = document.getElementById('search-input');
    const glossaryList = document.getElementById('glossary-list');
    const descriptionText = document.getElementById('description-text');

    function displayGlossary(terms) {
        glossaryList.innerHTML = '';
        terms.forEach(item => {
            const listItem = document.createElement('li');
            listItem.textContent = item.term;
            listItem.addEventListener('click', () => {
                descriptionText.textContent = item.description;
            });
            glossaryList.appendChild(listItem);
        });
    }

    searchInput.addEventListener('input', () => {
        const query = searchInput.value.toLowerCase();
        const filteredTerms = glossaryData.filter(item =>
            item.term.toLowerCase().includes(query)
        );
        displayGlossary(filteredTerms);
    });

    displayGlossary(glossaryData);
});
