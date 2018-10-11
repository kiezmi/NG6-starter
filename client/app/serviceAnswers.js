import answers from './answers';

function magicService() {
  return {
    responde: (question) => {
      let randomIndex = (Math.floor(Math.random() * answers.lenght));
      return {
        question,
        answer: answers[randomIndex]

      }
    }
  }
}
export default magicService
