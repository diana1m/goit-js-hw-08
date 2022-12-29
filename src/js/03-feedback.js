// Відстежуй на формі подію input, і щоразу записуй у локальне сховище
// об'єкт з полями email і message, у яких зберігай поточні значення 
// полів форми. Нехай ключем для сховища буде рядок "feedback-form-state".

// Під час завантаження сторінки перевіряй стан сховища, і якщо там є збережені дані, 
// заповнюй ними поля форми. В іншому випадку поля повинні бути порожніми.

// Під час сабміту форми очищуй сховище і поля форми, а також виводь у консоль об'єкт 
// з полями email, message та їхніми поточними значеннями.

// Зроби так, щоб сховище оновлювалось не частіше, ніж раз на 500 мілісекунд. 
// Для цього додай до проекту і використовуй бібліотеку lodash.throttle.

import throttle from 'lodash.throttle';

const form = document.querySelector(".feedback-form");
const FORM_STATE = "feedback-form-state";
const {email: input, message: textarea} = form.elements;
const userInfo = {
    email: "",
    message: ""
}

form.addEventListener("input", throttle(createInfo, 500));

function createInfo(evn){
    userInfo.email = input.value;
    userInfo.message = textarea.value;
    localStorage.setItem(FORM_STATE, JSON.stringify(userInfo));
}

const userInfoLocalStorage = JSON.parse(localStorage.getItem(FORM_STATE)) || userInfo;

if (userInfoLocalStorage){
    input.value = userInfoLocalStorage.email;
    textarea.value = userInfoLocalStorage.message;
}

form.addEventListener("submit", onSubmit);

function onSubmit(evn){
    evn.preventDefault();
    console.log(userInfoLocalStorage);
    localStorage.clear();
    input.value = "";
    textarea.value = "";
}

// fillForm(userInfoLocalStorage);
// function fillForm({email : userEmail, message: userMessage}){
//     if (userInfoLocalStorage){
//         input.value = userEmail;
//         textarea.value = userMessage;
//     }
//     else{
//         return;
//     }
// }
