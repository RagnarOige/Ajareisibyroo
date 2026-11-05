// Находим все кнопки туристических предложений

const buttons = document.querySelectorAll(".package button");


// Добавляем действие каждой кнопке

buttons.forEach(function(button) {

    button.addEventListener("click", function() {

        // Получаем название выбранного путешествия

        const packageName = button.parentElement
            .querySelector("span").textContent;


        // Показываем сообщение

        alert("Sinu valitud reis: " + packageName);

    });

});