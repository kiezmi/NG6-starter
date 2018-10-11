import answers from './answers';


var appModule = angular.module("app");

appModule.factory("magicService", function () {
  return {
    responde: (question) => {
      let randomIndex = (Math.floor(Math.random() * answers.lenght));
      return {
        question,
        answer: answers[randomIndex]

      }
    }
  }
  
});
