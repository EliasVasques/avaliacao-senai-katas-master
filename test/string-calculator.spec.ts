import {arrayString} from '../src/string-calculator'
describe("string-calculator", () => {

    it("It's to return 6 if recieve the string '1, 2, 3'.", () => {
        const stringTestCommom = '1, 2, 3';
        const rightAnswer = 6;
        expect(arrayString(stringTestCommom)).toBe(rightAnswer);
    })

    it("It's to return 3 if recieve the string '1, 2, 1001'.", () => {
        const stringNumberGreaterThan1000 = '1, 2, 1001';
        const rightAnswer = 3;
        expect(arrayString(stringNumberGreaterThan1000)).toBe(rightAnswer);
    })

    it("It's to return 1003 if recieve the string '1, 2, 1000'.", () => {
        const stringWithNumberEqualTo1000 = '1, 2, 1000';
        const rightAnswer = 1003;
        expect(arrayString(stringWithNumberEqualTo1000)).toBe(rightAnswer);
    })

    it("It's to return exception if recieve the string '1, -1, 3'.", () => {
        const stringWithNegativeNumber = '1, -1, 3';
        expect(function() {
            arrayString(stringWithNegativeNumber)
        }).toThrowError();
    })

    it("It's to return 4 if recieve the string '1, 0, 3'.", () => {
        const stringWithNumberEqualTo0 = '1, 0, 3';
        const rightAnswer = 4;
        expect(arrayString(stringWithNumberEqualTo0)).toBe(rightAnswer);
    })
}) 
