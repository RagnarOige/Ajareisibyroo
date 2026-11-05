const buttons = document.querySelectorAll(".package button");

buttons.forEach(function(button) {

    button.addEventListener("click", function() {

        const packageName = button.parentElement
            .querySelector("span").textContent;

        alert("Sinu valitud reis: " + packageName);

    });

});