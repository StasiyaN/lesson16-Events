//1. Назначь для кнопки обработчик события click, который будет изменять текст этой кнопки при нажатии;
const button = document.getElementById('btn');
button.addEventListener('click', event => {
    button.innerHTML = "Clicked";
});

//2. Назначь для любого элемента обработчик события mouseover, который будет изменять размер элемента при наведении;
document.getElementById('header').addEventListener('mouseover', event => {
    event.target.style.transform = 'scale(1.1)';
});
document.getElementById('header').addEventListener('mouseout', event => {
    event.target.style.transform = 'scale(1)';
})

//3. Назначь для инпута обработчик события keyup, который будет выводить отпущенную клавишу в консоль;
const input = document.getElementsByName('username')[0];
input.addEventListener('keyup', event => {
    console.log(`Нажата клавиша: ${event.key}`);
});

//4. Создай форму и добавь обработчик события submit, который будет показывать сообщение об успешной отправке;
document.getElementById('form').addEventListener('submit', event => {
    event.preventDefault();
    alert('Message sent');
})

//5. Пусть на странице есть кнопка с надписью 'Изменить тему',
// которая позволяет переключать тему страницы.
// Например, по умолчанию тема светлая: задний фон - белый, текст - черный.
// Нажимаем на кнопку -> тема меняется на темную: цвет фона - черный, текст - белый.
// Еще раз нажимаем на кнопку -> тема снова светлая и т. д.

 document.getElementById('theme-change').addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');
})

