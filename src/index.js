// import _ from "lodash";
// //console.log('Hello Mike');
// console.log(_.last(["one", "two"]));

// file: src/index.js
export default () => {
    const birthYear = 2005; // Подсчитываем результат
  
    return birthYear;
  };
  
  // file: index.js
  import getBirthYear from './src/index.js';
  
  console.log('Сколько вам лет?');
  const age = 18; // Каким-то способом получаем возраст пользователя, через терминал. Сейчас не важно как
  const birthYear = getBirthYear(age);
  console.log(`Ваш год рождения: ${birthYear}`);
