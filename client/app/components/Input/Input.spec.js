import InputModule from './Input';
import InputController from './Input.controller';
import InputComponent from './Input.component';
import InputTemplate from './Input.html';

describe('Input', () => {
  let $rootScope, makeController;

  beforeEach(window.module(InputModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new InputController();
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
      expect(InputTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
    // component/directive specs
    let component = InputComponent;

    it('includes the intended template', () => {
      expect(component.template).to.equal(InputTemplate);
    });

    it('invokes the right controller', () => {
      expect(component.controller).to.equal(InputController);
    });
  });
});
