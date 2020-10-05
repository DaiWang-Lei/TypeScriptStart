// 类的访问属性
//public 默认，公共属性
// private 私有属性，只能在class内部是使用
// protected 保护类，可以在class内部使用，也可以在继承中使用
class Person11 {
    protected name: string;
    public sayHello() {
        console.log(`${this.name} say Hello`);
    }
    private age: number
}
class Human11 extends Person11 {
    public sayBye() {
        console.log(`${this.name} say Bey`);
    }
}


const person11 = new Person11()
// 属性“name”受保护，只能在类“Person”及其子类中访问
// console.log(person.name);
console.log(person11.sayHello());


