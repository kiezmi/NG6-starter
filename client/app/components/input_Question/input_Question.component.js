import template from './input_Question.html';
import controller from './input_Question.controller';
import './input_Question.scss';

let input_QuestionComponent = {
  bindings: {
    submit:'&'
  },
  template,
  controller
};

export default input_QuestionComponent;
