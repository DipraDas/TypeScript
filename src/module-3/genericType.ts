// const rollNumber: number[] = [20, 35, 10];
const rollNumber2: string[] = ["20", "46", "33"];

// const rollNumber2: Array<string> = ["30", "46", "38"];

const userNameAndRollNumber: Array<{ name: string; roll: number }> = [
    {
        name: 'Dipra Das',
        roll: 1
    },
    {
        name: 'Juhi',
        roll: 2
    }
]

type genericArray<T> = Array<T>;
const rollNumber: genericArray<number> = [1, 2, 3, 4, 5]


type GenericTuple<X, Y> = [X, Y];
const relation: GenericTuple<string, string> = ["A", "B"];

type RelationWithSalaryType = {
    name: string,
    salary: number
}


const relationWithSalary: GenericTuple<RelationWithSalaryType, string> = [
    {
        name: 'Shreya',
        salary: 40
    },
    "Sumit"
]