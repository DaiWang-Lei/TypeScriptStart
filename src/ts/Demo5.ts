function getTotal(one: number, two: number): number {
  return one + two;
}
const total5 = getTotal(1, 2);

//没有返回值的时候 要返回void
function sayHello(): void {
  console.log("Hello World");
}

//永远执行不完，要给返回值置为never
function errFun(): never {
  throw new Error();
  console.log("永远执行不到");
}

function forNever(): never {
  while (true) {}
  console.log("永远执行不完");
}

class addClass {
  one: number;
  two: number;
}
function add({ one, two }: addClass) {
  return one + two;
}
const res = add({ one: 1, two: 2 });

function getNum({ one }: { one: number }) {
  return one;
}
const one5 = getNum({ one: 1 });
