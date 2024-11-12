const palindromes = function (word) {
    const cleanWord = word.toLowerCase().replace(/[^a-z0-9]/g, '');
    
    
    const reversedWord = cleanWord.split('').reverse().join('');
    return cleanWord === reversedWord;
};


module.exports = palindromes;
