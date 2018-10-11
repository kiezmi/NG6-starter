import angular from 'angular';
import uiRouter from 'angular-ui-router';
import Common from './common/common';
import Components from './components/components';
import AppComponent from './app.component';
import 'normalize.css';
import magicService from './serviceAnswers';

angular.module('app', [
    uiRouter,
    Components
  ])
  .component('app', AppComponent)
  .factory('magicService', magicService);
