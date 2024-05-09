import globals from "globals";
import pluginJs from "@eslint/js";
import pluginReactConfig from "eslint-plugin-react/configs/recommended.js";


export default [
    {languageOptions: {globals: {...globals.browser, ...globals.node}},
      settings: {
        react: {
          version: 'detect', // Tells eslint-plugin-react to automatically detect the version
        },
      },
    },
pluginJs.configs.recommended,
    pluginReactConfig,
];