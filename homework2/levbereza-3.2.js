const groupAnagrams = (anagrams) => {
    const sortedAnagrams = [];

    anagrams.forEach((word) => {
        const alphWord = [...word].sort().join('');
        if(sortedAnagrams[alphWord]){
            sortedAnagrams[alphWord].push(word);
        }else{
            sortedAnagrams[alphWord] = [word];
        }
    });

    const result = Object.values(sortedAnagrams);
    return result;
}

const words = ['rats', 'star', 'tsar','heart', 'tars', 'rat', 'cheese', 'tar', 'earth'];
console.log(groupAnagrams(words));