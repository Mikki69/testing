let menu = document.getElementById("menu");
let closer = document.getElementById("menu-close");
let burger = document.getElementById("burger");
let questions = document.querySelectorAll(".questions-block__question");
let questionsPlus = document.querySelectorAll(".questions-block__question-plus");
let questionText = document.querySelectorAll(".questions-block__question-all-text");

burger.addEventListener("click", burgerFunc);
closer.addEventListener("click", closeFunc);

function burgerFunc() {
    menu.classList.add("header__menu_active");
}

function closeFunc() {
    menu.classList.remove("header__menu_active");
}

for (let i = 0; i < questionsPlus.length; i++) {
    questionsPlus[i].addEventListener("click", function () {
        if (questionText[i].classList == "questions-block__question-all-text active") {
            questionText[i].classList.remove("active");
            questionsPlus[i].classList.remove("click");
        } else {
            questionText[i].classList.add("active");
            questionsPlus[i].classList.add("click");
        }
    });
}
