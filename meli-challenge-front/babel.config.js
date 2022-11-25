module.exports = {
    presets: [
      // ['@babel/preset-env', {targets: {node: 'current'}}],
      "@babel/preset-react",
      '@babel/preset-typescript',
      [
        "@babel/env",
        {
          "targets": {
            "chrome": "60"
          }
        }
      ]
    ],
};