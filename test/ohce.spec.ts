import {ohce} from '../src/ohce'

describe('ohce', () => {
    test('Passando um palíndromo deve retornar "Gostei da palavra!".', ()=>{
        expect(ohce('racecar')).toBe("Gostei da palavra!");
    })
    test('Passando uma palavra que não seja palíndromo deve retornar a palavra inversa.', ()=>{
        expect(ohce('corrida')).toEqual("adirroc");
    })
})
