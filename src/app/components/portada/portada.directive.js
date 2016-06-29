export function PortadaDirective() {
  'ngInject';

  let directive = {
    restrict: 'E',
    templateUrl: 'app/components/portada/portada.html',
    scope: {
        type: '='
    },
    controller: PortadaController,
    controllerAs: 'vm',
    bindToController: true
  };

  return directive;
}

class PortadaController {
  constructor (moment) {
    'ngInject';

    // "this.creationDate" is available by directive option "bindToController: true"
    this.relativeDate = moment(this.creationDate).fromNow();
  }
}
