// type personType = {
//     name: string,
//     age: number,
//     address: string
// }

// type newType = "name" | "age" | "address"; //manuallly korsi

// type newTypeUsingkeyof = keyof personType;

// const a: newType = "age";
// const b: newTypeUsingkeyof = "age";

// function getProperty<x, y extends keyof x>(obj: x, key: y) {
//     obj[key]
// }

// const property = getProperty({ name: 'Mr.X', age: 10 }, "age");