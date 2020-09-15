const numArr: number[] = [1, 2, 3];
const strArr: string[] = ["1", "a", "b"];
const undefinedArr: undefined[] = [undefined, undefined];
const arr: (number | string)[] = ["12", "a", 23];

//type alias 类型别名 可以用类代替
type human = { name: string; age: number };
class person {
  name: string;
  age: number;
}
const humans: person[] = [
  { name: "代罔", age: 18 },
  { name: "惜夏", age: 18 },
];
