import { NodePlopAPI } from 'plop';
import { componentGenerator, pageGenerator } from '@woap/utils/plop-generator/generators';

module.exports = function(plop: NodePlopAPI) {
  plop.setGenerator('Component', componentGenerator);
  plop.setGenerator('Page', pageGenerator);
};
