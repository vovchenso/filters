/**
 * length: 6 = only use words with 6 chars
 * length: [6,8] = only use words with between 6 and 8 chars
 */


const getLength = length => Array.isArray(length)
    ? length
    : [0, length];

const filter = (length, word) => {
    const [start, end] = getLength(length);

    if (word.length < start) {
        return word;
    }

    return word
        .split('')
        .splice(start, end - start)
        .join('');
};

export default filter;