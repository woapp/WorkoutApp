import { NodePlopAPI } from 'plop';
import { componentGenerator, pageGenerator } from './src/utils/plop-generator/generators';

module.exports = function(plop: NodePlopAPI) {
  plop.setGenerator('Component', componentGenerator);
  plop.setGenerator('Page', pageGenerator);
};
