let a:string = 'zxc'

type tsObj = {
    name: string, 
    age: number,
    male?: string
}

const obj: tsObj = {
    name: 'Oleg',
    age: 33
}

interface tsObjInterface  {
    // readonly не изменяемое
    readonly name: string, 
    age: number,
    male?: string
}

const obj1: tsObjInterface = {
    name: 'Oleg',
    age: 33
}


// Когда не знаем что придет с бэка
interface IndexInterface  {    
    [n: string]: string | number
}

const data:IndexInterface = {
    key: 'key',
    key1: 'key1',
    key2: 'key2',
}

// Тип enum или перечисление позволяет определить набор именнованных констант, 
// которые описывают определенные состояния.
enum MethodEnum {
    add = 0,
    sub = 1,
    div = 'div'
}

function calculate(method: MethodEnum, first: number, second: number): number {
    switch (method) {
        case MethodEnum.add: return first + second
        case MethodEnum.sub: return first - second          
        case MethodEnum.div: return first / second          
    }
}

calculate(MethodEnum.add, 5, 10)

// Тип функции
type TypeFn = () => number

const arrFunct:TypeFn = () => 2

// нечего не возвращает
type TypeDefaultFn = () => void



// Generics

// const tsArr: Array<number> = [1,2,3]
// const tsArr: Array<number> = [1,2,3]

interface MyArray<T> {
    // индекс сигнатура
    [n: number]: T
    map<U>(fn: (el: T) => U): U[]
}

const tsArr: MyArray<number> = [1, 2, 3]

tsArr.map((i: number) => i +1)
tsArr.map((i: number) => `${i} + 1`)

// extends указываем какой тип подходит
function getLen<T extends Array<any>>(arr: T): number {
    return arr.length
}
// ошибка если типп не подходит
// getLen('123')
getLen([1,2,3,4])