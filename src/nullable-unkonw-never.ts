// //  UNKNOWN TYPE
// const getMyCarSpeed = (speed: unknown) => {
//     if (typeof speed === 'number') {
//         const convertSpeed = (speed * 100) / 3600;
//         console.log(`My Speed ${convertSpeed}`);
//     }
//     if (typeof speed === 'string') {
//         const [value, unit] = speed.split(" ");
//         const convertedSpeed = (parseFloat(value) * 100) / 3600;
//         console.log(`${convertedSpeed}`);
//     }
//     else {
//         console.log('Wrong Type');
//     }
// }

// // NEVER 
// function throwError(message: string): never {
//     throw new Error(message);
// }