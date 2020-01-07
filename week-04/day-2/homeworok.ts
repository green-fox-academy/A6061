'use strict';

class Person {
  name: string;
  age: number;
  gender: string;

  constructor(name: string = 'unknown', age: number = 0, gender: string = 'unknown') {
    this.name = name;
    this.age = age;
    this.gender = gender;
  }
  introduce() {
    return "Hi, I\'m "+this.name+", a "+this.age+" year old "+this.gender+".";
  }
  getGoal() {
    return "My goal is: Live for the moment!";
  }
}

let person1 = new Person('Jane', 30, 'female');
let greeter = new Person("world");

console.log(person1);
console.log();

// 'use strict'

// class Person {
//   name: string; 
//   age: number;
//   gender: string;

//   introduce() :void {
//     console.log(`Hi, I'm ${this.name}, a ${this.age} old ${this.gender} `);
//   }
//   getGoal() :void {
//     console.log(`"My goal is: Live for the moment!"`);
//   }


//   constructor(name: string = 'Jane Doe', age: number = 30, gender: string = 'female') {
//     this.name = name;
//     this.age = age;
//     this.gender = gender;
//   }
// }

// class Student {
//   name: string; 
//   age: number;
//   gender: string;
//   previousOrganization: string;
//   skippedDays: number;

//   // introduce(): void {
//   //   console.log(`Hi, I'm ${this.name}, a ${this.age} old ${this.gender} `);
//   // }
//   // getGoal(): void {
//   //   console.log(`"My goal is: Live for the moment!"`);
//   // }
//   getGoal(): void {
//     console.log(`Be a junior software developer.`);
//   }
//   introduce(): void {
//     console.log(`Hi, I'm ${this.name}, a ${this.age} old ${this.gender} from ${this.previousOrganization} who skipped ${this.skippedDays} days from the course already.`);
//   }
//   skipDays(numberOfDays: number): void {
//     this.skippedDays += numberOfDays;
//   }

//   constructor(name: string = 'Jane Doe', age: number = 30, gender: string = 'female', previousOrganization: string = 'The School of Life') {
//     this.name = name;
//     this.age = age;
//     this.gender = gender;
//     this.previousOrganization = previousOrganization;
//     this.skippedDays = 0;
//   }
// }

// class Mentor {
//   name: string; 
//   age: number;
//   gender: string;
//   level: string;

//   getGoal(): void {
//     console.log(`Educate brilliant junior software developers.`);
//   }
//   introduce(): void {
//     console.log(`Hi, I'm ${this.name}, a ${this.age} old ${this.gender} ${this.level} mentor.`);
//   }

//   constructor(name: string = 'Jane Doe', age: number = 30, gender: string = 'female', level: string = 'intermediate') {
//     this.name = name;
//     this.age = age;
//     this.gender = gender;
//     this.level = level;
//   }
// }

// class Sponsor {
//   name: string; 
//   age: number;
//   gender: string;
//   company: string;
//   hiredStudents: number;

//   introduce(): void {
//     console.log(`Hi, I'm ${this.name}, a ${this.age} old ${this.gender} who represents ${this.company} and hired ${this.hiredStudents} students so far.`);
//   }

//   hire(): void {
//     this.hiredStudents++
//   }
//   getGoal(): void {
//     console.log(`Hire brilliant junior software developers.`)
//   }

//   constructor(name: string = 'Jane Doe', age: number = 30, gender: string = 'female', company: string = 'Google') {
//     this.name = name;
//     this.age = age;
//     this.gender = gender;
//     this.company = company;
//     this.hiredStudents = 0;
//     }
//   }

//   let people = [];
// let mark = new Person('Mark', 46, 'male');
// people.push(mark);
// let jane = new Person();
// people.push(jane);
// let john = new Student('John Doe', 20, 'male', 'BME');
// people.push(john);
// let student = new Student();
// people.push(student);
// let gandhi = new Mentor('Gandhi', 148, 'male', 'senior');
// people.push(gandhi);
// let mentor = new Mentor();
// people.push(mentor);
// let sponsor = new Sponsor();
// let elon = new Sponsor('Elon Musk', 46, 'male', 'SpaceX');
// people.push(elon);

// student.skipDays(3);

// for (let i = 0; i < 6; i++) {
//   elon.hire();
// }

// for (let i = 0; i < 4; i++) {
//   sponsor.hire();
// }

// people.forEach((person) => {
//   person.introduce();
//   person.getGoal();
// });

export {};