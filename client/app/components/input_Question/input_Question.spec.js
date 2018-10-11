import Input_QuestionModule from './input_Question';
import Input_QuestionController from './input_Question.controller';
import Input_QuestionComponent from './input_Question.component';
import Input_QuestionTemplate from './input_Question.html';

describe('Input_Question', () => {
  let $rootScope, makeController;

  beforeEach(window.module(Input_QuestionModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new Input_QuestionController();
    };
  }));

  describe('Module', () => {
    // top-level specs: i.e., routes, injection, naming
  });

  describe('Controller', () => {
    // controller specs
    it('has a name property [REMOVE]', () => { // erase if removing this.name from the controller
      let controller = makeController();
      expect(controller).to.have.property('name');
    });
  });

  describe('Template', () => {
    // template specs
    // tip: use regex to ensure correct bindings are used e.g., {{  }}
    it('has name in template [REMOVE]', () => {
      expect(Input_QuestionTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
    // component/directive specs
    let component = Input_QuestionComponent;

    it('includes the intended template', () => {
      expect(component.template).to.equal(Input_QuestionTemplate);
    });

    it('invokes the right controller', () => {
      expect(component.controller).to.equal(Input_QuestionController);
    });
  });
});
