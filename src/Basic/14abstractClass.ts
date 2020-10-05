// 抽象类和只读属性的使用

// 只读属性
class Person14 {
    public readonly _name: string
    constructor(name: string) {
        this._name = name
    }
}
const person14 = new Person14('代罔')
// 无法分配到 "_name" ，因为它是只读属性。
// person14._name='ad'
console.log(person14._name);


//抽象类
abstract class Human14 {
    abstract name()
} 

class Teacher extends Human14{
    name(){
        console.log('我是老师！');
    }
}

class Student extends Human14 {
    name(){
        console.log('我是学生');
    }
}

class DaiWang extends Human14{
    name(){
        console.log('我是代罔');
    }
}

const daiwang = new DaiWang()
console.log(daiwang.name());

