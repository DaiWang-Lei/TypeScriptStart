// 类的构造函数
 class Person12{
    //  如果没有construct 则默认如下，空的constructor
      constructor(){}
 }

 class Human12 extends Person12{
     constructor(public age:number){
        //  无论父类有无constructor ，子类都必须调用super
         super()
     }
 }

 const human = new Human12(12)
 console.log(human.age);
 
