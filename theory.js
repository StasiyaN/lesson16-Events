//📌 Разница между event.target и event.currentTarget

//🔹 event.target
// Это элемент, на котором произошло событие. То есть тот элемент,
// по которому реально кликнули
// (или с которым произошла другая активность: mouseover, keydown, и т.д.).

//🔹 event.currentTarget
// Это элемент, на котором висит обработчик события.
// То есть тот, к которому ты прикрепил addEventListener.

document.getElementById('parent').addEventListener('click', event => {
    console.log('target', event.target);
    console.log('current target', event.currentTarget)
});

//prevent default
document.getElementById('form').addEventListener('submit', event => {
    //console.log(event.target);
    event.preventDefault();
    const form = event.target; // это <form>
    const username = form.username.value; // доступ по name="username"

    console.log('Введённое имя пользователя:', username);
})
