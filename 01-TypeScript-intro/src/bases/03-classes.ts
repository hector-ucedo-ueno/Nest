//* https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Operators/Destructuring

import axios from 'axios';
import type { Move, PokeapiResponse } from '../interface/pokeapi-response.interface';

//? Versión larga de la clase
export class Pokemon {

    get imageUrl(): string {
        return `https://pokeapi.co/api/v2/pokemon/${this.id}/`;
    }

    constructor(
        public readonly id: number,
        public name: string,
        // public imageUrl: string
    ) {}

    public scream() {
        console.log(`${this.name.toUpperCase()} está gritando!`);
    }

    //private speak() {
    speak() {
        console.log(`${this.name} ${this.name} está hablando!`);
    }

    async getMoves(): Promise<Move[]> {
        // const moves = 10;
        //const resp = await axios.get(`https://pokeapi.co/api/v2/pokemon/4`);
        const {data} = await axios.get<PokeapiResponse>(`https://pokeapi.co/api/v2/pokemon/4`); //? Desestructuracion

        console.log( data.moves );
        return data.moves;
    }

}

export const charmander = new Pokemon(1, 'Charmander')

//charmander.scream();
//charmander.speak(); //?Property 'speak' is private and only accessible within class 'Pokemon'.

//console.log( charmander.getMoves() );
charmander.getMoves();
