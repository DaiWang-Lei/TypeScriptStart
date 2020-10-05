// typeScript函数中使用泛型
// 泛型
function join<T, P>(first: T, second: P) {
    return `${first}${second}`
}

join<string, number>('1', 2)

// 泛型中数组的使用
function myFun<T>(params: T[]) {
    return params
}
myFun<number>([1, 2])