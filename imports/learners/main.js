class Person {
  constructor(name = 'Anonymous', age = 0) {
    this.name = name;
    this.age = age;
  }
  getGreeting() {
    return `Hi! I am ${this.name}.`;
  }
  getPersonDescription() {
    return `${this.name} is ${this.age} year(s) old.`;
  }
}

class Employee extends Person {
  constructor(name, age, title){
    super(name, age);
    this.title = title;
  }
  getGreeting(){
    if(this.title) {
      return `Hi! I am ${this.name}. I work as a ${this.title}.`
    } else {
      return super.getGreeting();
    }
  }
  hasJob() {
    return !!this.title;
  }
}

class Programer extends Person {
  constructor(name, age, perfLanguage = 'C++') {
    super(name, age);
    this.perfLanguage = perfLanguage;
  }
  getGreeting() {
    if(this.perfLanguage) {
      return `Hi! I am ${this.name}. I am a ${this.perfLanguage}.`
    } else {
      return super.getGreeting();
    }
  }
}

let me = new Programer('Boris', 33);
console.log(me.getGreeting());
