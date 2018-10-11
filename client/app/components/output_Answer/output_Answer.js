import angular from 'angular';
import uiRouter from 'angular-ui-router';
import output_AnswerComponent from './output_Answer.component';

let output_AnswerModule = angular.module('output_Answer', [
  uiRouter
])

.component('outputAnswer', output_AnswerComponent)

.name;

export default output_AnswerModule;
