function calculateFrequencies(input, stopWords){
    if (typeof input !== 'string' && !(input instanceof String)) {
        throw new Error('Input should be a string');
    }

    if (stopWords.some(word => typeof word != 'string' && !(word instanceof String))) {
        throw new Error('Invalid dictionary format')
    }

    const words = input.toLowerCase().split(' ');
    const frequencies = {};
    let totalRelevantWords = 0;
    words.forEach(word => {
        if (!stopWords.includes(word)) {
            totalRelevantWords++;
            if (!frequencies[word]) {
                frequencies[word] = 1;
            } else {
                frequencies[word]++;
            }
        }
    });
    for (let word in frequencies) {
        frequencies[word] = frequencies[word] / totalRelevantWords;
    }

    return frequencies;
}

const app = {
    calculateFrequencies
};

module.exports = app;