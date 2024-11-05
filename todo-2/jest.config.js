module.exports = {
    preset: 'ts-jest', // Use ts-jest for TypeScript files
    testEnvironment: 'jsdom', // Or 'node', depending on your environment


    transform: {
      '^.+\\.(ts|tsx)$': 'ts-jest',
    },

    // transform: {
    //   "\\.js$": "./node_modules/babel-jest"
    // },
  };
  


  