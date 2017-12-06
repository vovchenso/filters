/**
 * upperCase = first means football -> Football
 * upperCase = last means football -> footbalL
 */


const first = word => word.charAt(0).toUpperCase() + word.slice(1);

const last = word => word.slice(0, word.length - 1) + word.slice(-1).toUpperCase();

const filter = (length, word) => {
    if ('first' === type) {
        return first(word);
    }

    if ('last' === type) {
        return last(word);
    }

    return word;
};

export default filter;