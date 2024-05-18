const { processArray, formatArrayStrings } = require('./arrayManipulation');
const createUserProfiles = require('./userInfo');

const numbers = [1, 2, 3, 4, 5];
const strings = ['kofi', 'akua', 'patrick', 'goat', 'chris'];

const processedNumbers = processArray(numbers);
console.log('Processed Numbers:', processedNumbers);

const formattedStrings = formatArrayStrings(strings, processedNumbers);
console.log('Formatted Strings:', formattedStrings);

const profiles = createUserProfiles(strings, formattedStrings);
console.log('User Profiles:', profiles);
