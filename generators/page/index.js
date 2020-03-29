/**
 * page Generator
 */

const pathExists = require('../utils/pathExists');

module.exports = {
  description: 'Add a page',
  prompts: [
    {
      type: 'input',
      name: 'name',
      message: 'What should it be called?',
      default: 'Form',
      validate: value => {
        if (/.+/.test(value)) {
          return pathExists(value)
            ? 'A component or page with this name already exists'
            : true;
        }

        return 'The name is required';
      },
    },
  ],
  actions: data => {
    // Generate index.js and index.test.js
    const actions = [
      {
        type: 'add',
        path: '../src/pages/{{camelCase name}}/index.jsx',
        templateFile: './page/index.js.hbs',
        abortOnFail: true,
      },
      {
        type: 'add',
        path: '../src/pages/{{camelCase name}}/index.css',
        templateFile: './page/index.css.hbs',
        abortOnFail: true,
      },
      {
        type: 'add',
        path: '../src/constants/{{camelCase name}}.js',
        templateFile: './page/constants.js.hbs',
        abortOnFail: true,
      },
      {
        type: 'add',
        path: '../src/actions/{{camelCase name}}.js',
        templateFile: './page/actions.js.hbs',
        abortOnFail: true,
      },
      {
        type: 'add',
        path: '../src/reducers/{{camelCase name}}.js',
        templateFile: './page/reducer.js.hbs',
        abortOnFail: true,
      },
      {
        type: 'add',
        path: '../src/sagas/{{camelCase name}}.js',
        templateFile: './page/saga.js.hbs',
        abortOnFail: true,
      },
      {
        type: 'add',
        path: '../src/selectors/{{camelCase name}}.js',
        templateFile: './page/selectors.js.hbs',
        abortOnFail: true,
      },
    ];

    return actions;
  },
};
