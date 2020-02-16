import { PlopGenerator, AddActionConfig } from 'plop';

export const pageGenerator: PlopGenerator = {
  description: '@woap/pages',
  prompts: [
    {
      type: 'input',
      name: 'name',
      message: 'Page name ?',
    },
  ],
  actions: [
    {
      type: 'add',
      path: '@woap/pages/{{pascalCase name}}/{{pascalCase name}}.tsx',
      templateFile: '@woap/utils/plop-generator/templates/page.tsx.hbs',
    } as AddActionConfig,
    {
      type: 'add',
      path: '@woap/pages/{{pascalCase name}}/index.ts',
      templateFile: '@woap/utils/plop-generator/templates/index.ts.hbs',
    } as AddActionConfig,
    // {
    //   type: 'add',
    //   path: '@woap/pages/{{pascalCase name}}/__test__/{{pascalCase name}}.test.tsx',
    //   templateFile: '@woap/utils/plop-generator/templates/page.test.tsx.hbs',
    // } as AddActionConfig,
  ],
};
