import template from './app.html';
import './app.scss';

function ctrl(magicService) {
  // console.log(magicService);

  this.newQuestion = question => {
    console.log(question)
    this.records.push(magicService.responde(question))
  }
  this.records = []
}

let appComponent = {
  template,
  controller: ['magicService', ctrl]
};

export default appComponent;
