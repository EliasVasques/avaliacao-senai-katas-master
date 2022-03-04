function ohce(word:string){
    let reversedWord =  word.split('').reverse().join('');
    if(word == reversedWord) return "Gostei da palavra!";
    return reversedWord;
}

export {ohce}
