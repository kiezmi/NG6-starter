import angular from 'angular';
import InputQuestion from './input_Question/input_Question';
import OutputAnswer from './output_Answer/output_Answer';

let componentModule = angular.module('app.components', [
  InputQuestion,
  OutputAnswer
])

.name;

export default componentModule;
