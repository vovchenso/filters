/**
 * strip = vowels means football -> ftbll
 * strip = consonants means football -> ooa
 */


const vowels = ['e', 'y', 'u', 'i', 'o', 'a', 'E', 'Y', 'U', 'I', 'O', 'A'];

const filter = (type, word) => {
    const tmpWord = word.split('').filter(letter => {
        const hasLetter = ~vowels.indexOf(letter);
        return ('vowels' === type) ? !hasLetter : hasLetter;
    });

    return tmpWord.join('');
};

export default (type, word) => {
    if ('vowels' === type || 'consonants' === type) {
        filter(type, word);
    }

    return word;
};