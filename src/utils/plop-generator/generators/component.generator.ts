import { PlopGenerator, AddActionConfig } from 'plop';

export const componentGenerator: PlopGenerator = {
  description: 'will generate a component in src/components',
  prompts: [
    {
      type: 'input',
      name: 'name',
      message: 'Component name ?',
    },
  ],
  actions: [
    {
      type: 'add',
      path: './src/components/{{pascalCase name}}/{{pascalCase name}}.tsx',
      templateFile: 'src/utils/plop-generator/templates/component.tsx.hbs',
    } as AddActionConfig,
    {
      type: 'add',
      path: './src/components/{{pascalCase name}}/index.ts',
      templateFile: 'src/utils/plop-generator/templates/index.ts.hbs',
    } as AddActionConfig,
    // {
    //   type: 'add',
    //   path: './src/components/{{pascalCase name}}/__test__/{{pascalCase name}}.test.tsx',
    //   templateFile: 'src/utils/plop-generator/templates/component.test.tsx.hbs',
    // } as AddActionConfig,
  ],
};
