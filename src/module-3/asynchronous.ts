// MOCKING
const makePromise = () => {
    return new Promise<String>((resolve, reject) => {
        const data: string = "Data is ferched";
        if (data) {
            resolve(data);
        } else {
            reject("Failed to fetched data");
        }
    })
}

const getPromiseData = async (): Promise<String> => {
    const data = await makePromise();
    return data;
}

// -------------------------------------------


const makePromiseBoolean = () => {
    return new Promise<Boolean>((resolve, reject) => {
        const data: Boolean = false;
        if (data) {
            resolve(data);
        } else {
            reject(true);
        }
    })
}

const getPromiseDataBoolean = async (): Promise<Boolean> => {
    const data = await makePromiseBoolean();
    return data;
}


// -------------------------------------------


type DataType = {
    data: string
}

const makePromiseObject = () => {
    return new Promise<DataType>((resolve, reject) => {
        const data: DataType = { data: "Data is ferched" };
        if (data) {
            resolve(data);
        } else {
            reject("Failed to fetched data");
        }
    })
}

const getPromiseDataObject = async (): Promise<DataType> => {
    const data = await makePromiseObject();
    return data;
}

// -------------------------------------------

interface ITodo {
    userId: number;
    id: number;
    title: string;
    completed: boolean
}

const getTode = async (): Promise<ITodo> => {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
    return await response.json();
}

const getTodoData = async (): Promise<void> => {
    const result = await getTode;
    console.log(result);
}

getTodoData();
