// 接口的联合类型和类型保护
interface Student {
    yuren: boolean;
    readBook: () => {}
}

interface Teacher {
    yuren: boolean;
    teach: () => {}
}

// if判断，类型保护 断言方式
function who(human15: Student | Teacher) {
    if (human15.yuren) {
        (human15 as Teacher).teach()
    } else {
        (human15 as Student).readBook()
    }
}

// if in方式 ,类型保护
function whoIn(human15: Student | Teacher) {
    if ('teach' in human15) {
        human15.teach()
    } else {
        human15.readBook()
    }
}

// typeof类型守护
function add15(first: string | number, second: string | number) {
    if (typeof first === 'string' || typeof second === 'string') {
        return `${first}${second}`
    }
    return first + second
}

// instanceof 类型守护
class NumberObj {
    count: number
}

function addObj(first: Object | NumberObj, second: Object | NumberObj) {
    if (first instanceof NumberObj && second instanceof NumberObj) {
        return first.count + second.count
    }
    return 0
}