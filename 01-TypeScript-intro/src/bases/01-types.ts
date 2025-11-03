

export let name = 'Héctor';
export const age: number = 33;
export const isValid: boolean = true;

//name = 'Juan'; //? Cannot assign to 'name' because it is a constant.ts
//name = true; //? Cannot assign to 'name' because it is a constant.ts
name = 'Joy'; 

export const templateString = ` Este es un template string con:
nombre ${name},
edad ${age} y,
estado ${isValid}`;

console.log(templateString);
