import filter from './index';

const words = [
    'spacejump',
    'apples',
    'graphics',
    'javascript',
    'peaches'
];

const configs = [
    {
        upperCase: 'first',
        length: [6, 8]
    },
    {
        upperCase: 'last',
        length: [7, 9],
        strip: 'vowels'
    },
    {
        length: 10,
        strip: 'consonants'
    }
];

const result = filter(words, configs);
console.log(result);
