const presets = ['next/babel'];

const plugins = [
  [
    'styled-components',
    {
      ssr: true,
      displayName: process.env.NODE_ENV !== 'production',
      preprocess: false,
    },
  ],
  [
    "module-resolver",
    {
      "root": [
        "."
      ],
      "alias": {
        "@components": "./src/components",
        "@helpers": "./src/helpers",
        "@hooks": "./src/hooks",
        "@icons": "./public/assets/icons",
        "@pages": "./src/pages",
        "@containers": "./src/containers",
        "@services": "./src/services",
        "@store": "./src/store",
        "@public": "./public",
        "@theme": "./src/styles/themes",
      }
    }
  ]
];

module.exports = { compact: true, presets, plugins };
