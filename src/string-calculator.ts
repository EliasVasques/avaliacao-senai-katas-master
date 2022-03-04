
function arrayString(stringArray: string) {
    let arrayWithStrings =  stringArray.split(',');
    let arrayWithIntegers = arrayWithStrings.map((number) => Number(number));
    let total = arrayWithIntegers.reduce((sum, atual) => {
        if(atual < 0) throw new Error;
        if(atual <= 1000) return sum + atual;
        else return sum;
    }, 0);
    return total;
}

export {arrayString}
