// Находим все кнопки

const buttons = document.querySelectorAll(".package button");


// Добавляем действие каждой кнопке

buttons.forEach(function(button) {

    button.addEventListener("click", function() {

        // Получаем название путешествия

        const packageName = button.parentElement
            .querySelector("span").textContent;


        // Показываем сообщение

        alert("Sinu valitud reis: " + packageName);

    });

});