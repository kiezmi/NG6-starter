import template from './app.html';
import './app.scss';

let appComponent = {
  template,
  controller: function () {
    this.newQuestion = question => {
console.log(question)
this.records.push({
  question,
  answer:'no'
})
    }
    this.records = [{
      question: 'hola',
      answer: 'lo dudo',
    }]
  }
};

export default appComponent;
