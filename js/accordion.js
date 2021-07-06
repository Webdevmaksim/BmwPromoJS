'use strict';
// Для начала отследим что бы страница закгрузилась(Аналог ready из JQuery), так же можно для скрипта задать атрибут defer и тогда скипт отработает только после загрузки документа, так же это можно решить подключением скрипта перед закрывающим тегом body 
// ЗАМЕТКА: Отличие async и defer. async не блокирует загрузку документа, но запускается сразу как загрузился. defer ждёт пока документ загрузился и только потом отрабатывает. ПРИМЕР: Нужно использовать подключение Яметрики через async, что-бы скрипт Яндекса не блокировал загрузку страницы.
document.addEventListener('DOMContentLoaded', () => {
    // Метод querySelectorAll позволяет обращатся ко всем выбранным элементам на странице и кладёт найденные элементы в одну переменную.

    // Обращаемся к кнопкам внутри которых лежат характеристики 
    const featureLinkElems = document.querySelectorAll('.feature__link');

    // Обращаемся к списку характеристик
    const featureSubElems = document.querySelectorAll('.feature-sub');

    // Перебираем наши элементы циклом
    // featureLinkElems.length : Благодоря методу length мы гибко ограничиваем количество итераций цикла под количество найденных ранее элемментов методм querySelectorAll.

    // Вариант исполнения задачи номер 1
    // for (let i = 0; i < featureLinkElems.length; i++) {
    //     // При клике на элемент из массива вызываем функцию
    //     featureLinkElems[i].addEventListener('click', () => {
    //         if(featureLinkElems[i].classList.contains('feature__link_active')){
    //             featureLinkElems[i].classList.remove('feature__link_active');
    //             featureSubElems[i].classList.add('hidden');


    //         } else {
    //             // Переключаем класс скрывающий описание характеристик
    //             featureSubElems[i].classList.toggle('hidden');
    //             // Переключаем класс который показывает стрелочку
    //             featureLinkElems[i].classList.toggle('feature__link_active');
    //         }


    //     });
    // }
    
    // Вариант исполнения задачи номер 2
    featureLinkElems.forEach((btn,index)=>{
        btn.addEventListener('click', () =>{

            if(btn.classList.contains('feature__link_active')){
                btn.classList.remove('feature__link_active');
                featureSubElems[index].classList.add('hidden');
            } else {
                featureSubElems.forEach((featureSubElem) => {
                    featureSubElem.classList.add('hidden');
                });
                featureLinkElems.forEach((featureLinkElem) => {
                    featureLinkElem.classList.remove('feature__link_active');
                });
                btn.classList.add('feature__link_active');
                featureSubElems[index].classList.remove('hidden');
            }


        });
    });
});