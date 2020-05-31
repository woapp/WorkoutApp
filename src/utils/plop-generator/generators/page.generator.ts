import { PlopGenerator, AddActionConfig } from 'plop';
export const pageGenerator: PlopGenerator = {
  description: 'will generate a page in src/pages',
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
      path: './src/pages/{{pascalCase name}}/{{pascalCase name}}.tsx',
      templateFile: 'src/utils/plop-generator/templates/page.tsx.hbs',
    } as AddActionConfig,
    {
      type: 'add',
      path: './src/pages/{{pascalCase name}}/index.ts',
      templateFile: 'src/utils/plop-generator/templates/index.ts.hbs',
    } as AddActionConfig,
    // {
    //   type: 'add',
    //   path: './src/pages/{{pascalCase name}}/__test__/{{pascalCase name}}.test.tsx',
    //   templateFile: 'src/utils/plop-generator/templates/page.test.tsx.hbs',
    // } as AddActionConfig,
  ],
};
