
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
}

export const charmander = new Pokemon(1, 'Charmander')

charmander.scream();
charmander.speak(); //?Property 'speak' is private and only accessible within class 'Pokemon'.