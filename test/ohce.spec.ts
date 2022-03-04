import {ohce} from '../src/ohce'

describe('ohce', () => {
    test('Passando um palíndromo deve retornar true.', ()=>{
        expect(ohce('racecar')).toBe(true);
    })
    test('Passando uma palavra que não seja palíndromo deve retornar false.', ()=>{
        expect(ohce('ouvou')).toEqual(false);
    })
})