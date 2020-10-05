// 类的Getter、Setter和static

class Person13 {
   constructor(private _age:number){}
   get age(){
       return this._age - 10
   }
   set age(age:number){
        this._age = age + 3
   }
   static sayLove(){
       return "I Love You";
   }
}

const human13 = new Person13(28)
human13.age=25
console.log(human13.age);
console.log(Person13.sayLove());


