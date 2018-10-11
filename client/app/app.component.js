import template from './app.html';
import './app.scss';
import answers from './answers';

let appComponent = {
  template,
  controller: function (magicService) {
    console.log(magicService);

    this.newQuestion = question => {
      console.log(question)
      this.records.push({
        question,
        answer: answers
      })
    }
    this.records = [{}]
  }
};

export default appComponent;
