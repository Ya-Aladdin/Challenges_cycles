//! В файле arrays-5.js создай массив с десятью элементами строкового типа. Перечисли в них имена (без фамилий) своих одногруппников и преподавателей.
//? Ниже напиши цикл, который выводит в консоль имена начинающиеся на букву "а".

const studentsNames = ["Мохьмад", "Сулейман", "Мансур", "Яхъя", "Хусейн", "Сайд-Али", "Ислам", "Иса", "Альви", "Милана"]

for (let i = 0; i < studentsNames.length; i++) {
  if(studentsNames[i][0].toUpperCase() === 'а'.toUpperCase()) {    //* ИСПОЛЬЗОВАНИЕ МЕТОДА .toUpperCase() ЧТОБЫ ЦИКЛ НЕ ОБРАЩАЛ ВНИМАНИЯ НА РЕГИСТР ДАЖЕ ЕСЛИ НАПИШИТЕ а ИЛИ А ВСЕ РАВНО ВСЕ БУДЕТ РАБОТАТЬ
    console.log(studentsNames[i])
  }
}