export const messages = {
  button: {
    start: 'Start',
    login: 'Login',
    logout: 'Logout',
    logoutConfirmation: 'Are you sure you want to log out of your account?',
    continue: 'Continue',
    dontKnow: "I don't know",
    check: 'Check',
  },

  title: {
    gameName: 'ENGLISH PUZZLE',
    startPageDescription: 'Click on words, collect phrases.\nWords can be drag and drop. Select tooltips in the menu',
    startPageGreeting: (username: string) => `Hi, ${username}! Welcome to`,
    authorization: 'Authorization',
    firstName: 'First Name',
    surname: 'Surname',
    dontKnown: "I don't know",
    know: 'I know',
  },

  error: {
    notValidSymbols: 'Only English letters and "-" are allowed',
    notValidLength: (min: number) => `Min length is ${min}`,
    firstSymbolIsNotUpperCase: 'First letter should be a latin symbol in upper case',
    audioError: (error: string) => `Audio error: ${error}`,
  },
};
