// Находим все кнопки туристических предложений

const buttons = document.querySelectorAll(".package button");


// Добавляем действие каждой кнопке

buttons.forEach(function(button) {

    button.addEventListener("click", function() {

        // Получаем название путешествия

        const packageName = button.parentElement
            .querySelector("span").textContent;


        // Показываем сообщение

        window.location.href = "../paring.html";

    });

});