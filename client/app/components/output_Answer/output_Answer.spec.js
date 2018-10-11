import Output_AnswerModule from './output_Answer';
import Output_AnswerController from './output_Answer.controller';
import Output_AnswerComponent from './output_Answer.component';
import Output_AnswerTemplate from './output_Answer.html';

describe('Output_Answer', () => {
  let $rootScope, makeController;

  beforeEach(window.module(Output_AnswerModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new Output_AnswerController();
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
      expect(Output_AnswerTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
    // component/directive specs
    let component = Output_AnswerComponent;

    it('includes the intended template', () => {
      expect(component.template).to.equal(Output_AnswerTemplate);
    });

    it('invokes the right controller', () => {
      expect(component.controller).to.equal(Output_AnswerController);
    });
  });
});
