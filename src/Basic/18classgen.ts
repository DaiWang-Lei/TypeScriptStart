// Typescript 在类中使用泛型
class Select<T extends number | string>{
    constructor(private persons: T[]) { }
    getPerson(index: number): T {
        return this.persons[index]
    }
}

const select = new Select<string>(['代罔', '罗卜大', '洛必达'])
console.log(select.getPerson(1));
