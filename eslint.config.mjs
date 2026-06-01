import coreWebVitals from "eslint-config-next/core-web-vitals";

export default [
  ...coreWebVitals.map((config) => ({
    ...config,
    settings: {
      ...config.settings,
      react: { version: "detect" },
    },
  })),
];
