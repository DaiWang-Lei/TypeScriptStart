// 类的概念和使用

class Father {
  content = "Hi,小子";
  sayHello() {
    return this.content;
  }
}

class Son extends Father {
  sayHello() {
    return `${super.sayHello()} . 你好`;
  }
  sayLove() {
    return "I Like you";
  }
}

const xiaozi = new Son();
console.log(xiaozi.sayHello());
console.log(xiaozi.sayLove());


