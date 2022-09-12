let hobbies: string[];
hobbies = ['sports', 'cooking'];

type Person = {
  name: string;
  age: number;
};

let person: Person;

person = {
  name: 'Donald',
  age: 34,
};

let people: Person[];

let course: string | number = 'React practice';

course = 12345;

function add(a: number, b: number) {
  return a + b;
}

function print(value: any) {
  value = 5;
  console.log(value);
}

function addToFront<T>(array: T[], value: T) {
  const newArray = [value, ...array];
  return newArray;
}

const demoArray = [1, 2, 3];

const updatedArray = addToFront(demoArray, -1);

const stringArray = addToFront(['a', 'b', 'c'], 'd');

stringArray[0].split('');

class Student {
  // one way

  // firstName: string;
  // lastName: string;
  // age: number;
  // courses: string[];

  // constructor(first: string, last: string, age: number, courses: string[]) {
  //   this.firstName = first;
  //   this.lastName = last;
  //   this.age = age;
  //   this.courses = courses;
  // }

  // also written like

  constructor(
    public firstName: string,
    public lastName: string,
    public age: number,
    public courses: string[]
  ) {}

  enroll(courseName: string) {
    this.courses.push(courseName);
  }

  listCourses() {
    return this.courses.slice();
  }
}

const student = new Student('Donald', 'Sincennes', 34, ['Angular']);
student.enroll('React');

console.log(student);

interface Human {
  firstName: string;
  age: number;

  greet: () => void;
}

let max: Human;

max = {
  firstName: 'Donald',
  age: 34,
  greet(){
    console.log('Hello');
  },
};

class Instructor implements Human{
  firstName: string;
  age: number;
  greet: () => void;

}
