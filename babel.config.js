const presets = [
    [
      "@babel/env",
      {
        targets: {
          ie: "9",
          chrome: "58",
        },
        useBuiltIns: "usage",
      },
    ],
  ];
  
  module.exports = { presets };