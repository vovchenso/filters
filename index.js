import fillers from './filters';

const processConfig = (word, config) => Object.keys(config).reduce(
    (word, currentConfig) => {
        if (typeof fillers[currentConfig] === 'function') {
            return fillers[currentConfig](config[currentConfig], word);
        }
        return word;
    },
    word
);

const processConfigs = (word, configs) => configs.reduce(
    (word, currentConfigs) => processConfig(word, currentConfigs),
    word
);

export default (words, configs) => words.map(word => processConfigs(word, configs));
