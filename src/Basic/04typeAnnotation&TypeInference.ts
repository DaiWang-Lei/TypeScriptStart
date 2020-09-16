// 类型注解
let count4: number;
count4 = 123;

// 类型推断
let countInference = 213;

// 不用写类型注释
const one = 1;
const two = 2;
const three = one + two;

//需要写类型注解
function getTotal(funone: number, funtwo: number) {
  return funone + funtwo;
}
const total = getTotal(1, 2);

const Human4 = {
  name: "代罔",
  age: 18,
};
