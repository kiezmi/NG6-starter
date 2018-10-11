import angular from 'angular';
import uiRouter from 'angular-ui-router';
import input_QuestionComponent from './input_Question.component';

let input_QuestionModule = angular.module('input_Question', [
  uiRouter
])

.component('inputQuestion', input_QuestionComponent)

.name;

export default input_QuestionModule;
