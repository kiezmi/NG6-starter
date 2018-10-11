import angular from 'angular';
import Home from './home/home';
import About from './about/about';
import Kiezmi from './Kiezmi/Kiezmi.component';
import Input from './Input/Input.component';

let componentModule = angular.module('app.components', [
  Home,
  About,
  Kiezmi,
  Input
  
])

.name;

export default componentModule;
