const fs = require('fs');

module.exports = function (plop) {
  // create your generators here
  plop.setGenerator('icon', {
    description: 'Generates a Font Awesome Icon',
    prompts: [
      {
        type: 'list',
        name: 'type',
        choices: ['main', 'brands'],
        message: 'What type of icon do you want?',
      },
      {
        type: 'input',
        name: 'name',
        message: 'What is the name of your icon?',
      },
    ],
    actions: (data) => {
      const actions = [
        {
          path: 'components/ui/IconFontAwesome/maps.js',
          pattern: /(\/\/ COMPONENT IMPORTS)/g,
          template:
            "import Fa{{properCase name}} from './{{type}}/{{properCase name}}';\n$1",
          type: 'modify',
        },
        {
          path: 'components/ui/IconFontAwesome/maps.js',
          pattern: /(\/\/ COMPONENT ARRAY)/g,
          template: '{{properCase name}}: Fa{{properCase name}},\n  $1',
          type: 'modify',
        },
      ];

      if (data.type === 'main') {
        actions.push({
          type: 'add',
          path: 'components/ui/IconFontAwesome/{{type}}/{{properCase name}}/index.js',
          templateFile: 'plop-templates/icon.hbs',
        });
      }

      if (data.type === 'brands') {
        actions.push({
          type: 'add',
          path: 'components/ui/IconFontAwesome/{{type}}/{{properCase name}}/index.js',
          templateFile: 'plop-templates/iconBrands.hbs',
        });
      }

      return actions;
    },
  });
  plop.setGenerator('component', {
    description: 'Generates a component',
    prompts: [
      {
        type: 'list',
        name: 'type',
        choices: ['content', 'partials', 'ui'],
        message: 'What type of component do you want?',
      },
      {
        type: 'input',
        name: 'name',
        message: 'What is the name of your component?',
      },
    ],
    actions: (data) => {
      const actions = [
        {
          type: 'add',
          path: 'components/{{type}}/{{properCase name}}/index.js',
          templateFile: 'plop-templates/statefulComponent.hbs',
        },
        {
          type: 'add',
          path: 'components/{{type}}/{{properCase name}}/{{properCase name}}.module.scss',
          templateFile: 'plop-templates/cssModule.hbs',
        },
      ];

      if (data.type === 'ui') {
        actions.push({
          path: 'components/ui/index.js',
          pattern: /(\/\/ COMPONENT IMPORT)/g,
          template:
            "import {{properCase name}} from './{{properCase name}}';\n$1",
          type: 'modify',
        });
        actions.push({
          path: 'components/ui/index.js',
          pattern: /(\/\/ COMPONENT EXPORT)/g,
          template: '{{properCase name}},\n  $1',
          type: 'modify',
        });
      }

      return actions;
    },
  });
  plop.setGenerator('page', {
    description: 'Generates a page',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'What is the name of your page?',
      },
    ],
    actions: [
      {
        type: 'add',
        path: 'pages/{{lowerCase name}}/index.js',
        templateFile: 'plop-templates/statefulComponent.hbs',
      },
      {
        type: 'add',
        path: 'pages/{{lowerCase name}}/{{properCase name}}.module.scss',
        templateFile: 'plop-templates/cssModule.hbs',
      },
    ],
  });
  plop.setGenerator('slice', {
    description: 'Generates a redux slice',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'What is the name of your slice?',
      },
    ],
    actions: [
      {
        type: 'add',
        path: 'redux/slices/{{lowerCase name}}.js',
        templateFile: 'plop-templates/reduxSlice.hbs',
      },
      {
        path: 'redux/store.js',
        pattern: /(\/\/ SLICE IMPORT)/g,
        template:
          "import {{lowerCase name}}Slice from './slices/{{lowerCase name}}';\n$1",
        type: 'modify',
      },
      {
        path: 'redux/store.js',
        pattern: /(\/\/ SLICE REDUCER)/g,
        template: '{{lowerCase name}}: {{lowerCase name}}Slice,\n    $1',
        type: 'modify',
      },
    ],
  });
  plop.setGenerator('apiCall', {
    description: 'Generates an api call',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'What is the name of your api call?',
      },
    ],
    actions: [
      {
        type: 'add',
        path: 'pages/api/{{camelCase name}}.js',
        templateFile: 'plop-templates/apiCall.hbs',
      },
    ],
  });
};
