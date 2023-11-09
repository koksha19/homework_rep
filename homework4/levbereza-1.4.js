function VigenèreCipher(key, abc) {

    this.encode = function (str){
        let result = '';
        let keyIndex = 0;
        for (let i = 0; i < str.length; i++) {
            const letter = str[i];
            if (abc.includes(letter)) {
                const letterIndex = abc.indexOf(letter);
                const keyLetter =  key[keyIndex % key.length];
                const keyIndexInAlphabet = abc.indexOf(keyLetter);
                const newIndex = (letterIndex + keyIndexInAlphabet) % abc.length;
                result += abc[newIndex];
                keyIndex++;
            } else {
                result += letter;
                keyIndex++;
            }
        }
        return result;
    }

    this.decode = function (str){
        let result = '';
        let keyIndex = 0;

        for (let i = 0; i < str.length; i++) {
            const letter = str[i];
            if (abc.includes(letter)) {
                const letterIndex = abc.indexOf(letter);
                const keyLetter =  key[keyIndex % key.length];
                const keyIndexInAlphabet = abc.indexOf(keyLetter);
                const newIndex = (letterIndex - keyIndexInAlphabet + abc.length) % abc.length;
                result += abc[newIndex];
                keyIndex++;
            } else {
                result += letter;
                keyIndex++;
            }
        }
        return result;
    }
}
c = new VigenèreCipher("password","abcdefghijklmnopqrstuvwxyz")
console.log(c.encode("it's a shift cipher!"));
console.log(c.decode("pancauvs"));