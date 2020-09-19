// 基础静态类型和对象静态类型
const count3: number = 996;
const myName: string = "代罔";
// null , undefined ,boolean,void ,symbol
const Human: {
  name: string;
  age: number;
} = {
  name: "代罔",
  age: 18,
};

//数组类型
const Humans: string[] = ["惜夏", "嘿嘿", "牛蛋"];

// 函数类型
const createHuman: () => string = () => {
  return "I am King";
};

//类类型
class Person {}
const rootPerson: Person = new Person();
