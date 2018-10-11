import KiezmiModule from './Kiezmi';
import KiezmiController from './Kiezmi.controller';
import KiezmiComponent from './Kiezmi.component';
import KiezmiTemplate from './Kiezmi.html';

describe('Kiezmi', () => {
  let $rootScope, makeController;

  beforeEach(window.module(KiezmiModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new KiezmiController();
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
      expect(KiezmiTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
    // component/directive specs
    let component = KiezmiComponent;

    it('includes the intended template', () => {
      expect(component.template).to.equal(KiezmiTemplate);
    });

    it('invokes the right controller', () => {
      expect(component.controller).to.equal(KiezmiController);
    });
  });
});
