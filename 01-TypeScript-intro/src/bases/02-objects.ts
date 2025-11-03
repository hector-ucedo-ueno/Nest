export const podemonIds = [1, 2, 3, 4, 5];

//podemonIds.push('asdfasdf'); //? Argument of type 'string' is not assignable to parameter of type 'number'

export interface Pokemon {
  id: number;
  name: string;
  age?: number; 
}

export const bulbasaur: Pokemon = {
  id: 1, //? Type 'string' is not assignable to type 'number'
  name: 'Bulbasaur',
  age: 2
};

export const charmander: Pokemon = {
  id: 4,
  name: 'Charmander',
  age: 1
};

console.log(bulbasaur);