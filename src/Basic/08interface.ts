// 初识接口interface
interface Employee {
  name: string;
  age: number;
  iq: number;
  eq?: number;
}

const employee = {
  name: "代罔",
  age: 18,
  iq: 99,
  eq: 100,
};
const screenResume = (employee: Employee) => {
  employee.age < 30 &&
    employee.iq > 80 &&
    console.log(`${employee.name} 先生，进入二面`);
  employee.age >= 30 ||
    (employee.iq < 80 && console.log(`${employee.name} 先生，回家等通知`));
};

const getResume = (employee: Employee) => {
  console.log(`${employee.name} 年龄是 ${employee.age}`);
  console.log(`${employee.name} IQ是 ${employee.iq}`);
  employee.eq && console.log(`${employee.name} EQ是 ${employee.eq}`);
};
screenResume(employee);
getResume(employee);
