type Crushtype = {
    name: string,
    age?: number,
    profession: string,
    address: string
}

const crush1: Crushtype = {
    name: "Dipra",
    age: 20,
    profession: 'Eng',
    address: 'momin road'
}

const crush2: Crushtype = {
    name: "Anik",
    age: 30,
    profession: 'Bangla',
    address: 'momin road'
}

type OperationType = (x: number, y: number) => number;
const calculate = (
    number1: number,
    number2: number,
    opertation: OperationType
) => {
    return opertation(number1, number2);
}

console.log(calculate(10, 20, (x, y) => x + y));


