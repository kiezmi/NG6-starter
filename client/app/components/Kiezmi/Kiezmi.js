import angular from 'angular';
import uiRouter from 'angular-ui-router';
import KiezmiComponent from './Kiezmi.component';

let KiezmiModule = angular.module('Kiezmi', [
  uiRouter
])

.component('Kiezmi', KiezmiComponent)

.name;

export default KiezmiModule;
