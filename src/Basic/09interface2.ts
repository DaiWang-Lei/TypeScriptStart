// interface2
// 初识接口interface
interface Employee9 {
  name: string;
  age: number;
  iq: number;
  eq?: number;
  [propname: string]: any;
  say(): string;
}

// 接口继承接口
interface Advance extends Employee9 {
  teach(): string;
}

const employee9 = {
  name: "代罔",
  age: 18,
  iq: 99,
  eq: 100,
  cq: 77,
  say() {
    return "很高兴认识你们";
  },
  teach() {
    return "你好，我是高级工程师";
  },
};
// 用接口约束类
class Robuta implements Employee9 {
  name = "罗卜大";
  age = 18;
  iq = 100;
  say() {
    return "Hi yes";
  }
}
const screenResume9 = (employee: Employee9) => {
  employee.age < 30 &&
    employee.iq > 80 &&
    console.log(`${employee.name} 先生，进入二面`);
  employee.age >= 30 ||
    (employee.iq < 80 && console.log(`${employee.name} 先生，回家等通知`));
};

const getResume9 = (employee: Advance) => {
  console.log(`${employee.name} 年龄是 ${employee.age}`);
  console.log(`${employee.name} IQ是 ${employee.iq}`);
  employee.eq && console.log(`${employee.name} EQ是 ${employee.eq}`);
  employee.cq && console.log(`${employee.name} CQ是 ${employee.cq}`);
};
employee9.say();
screenResume9(employee9);
getResume9(employee9);
