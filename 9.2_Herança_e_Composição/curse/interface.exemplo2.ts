interface Person {
    name: string;
    info: string;
}

class Student implements Person {
    constructor(
        public name: string,
        public school: string,
    ) { }

    get info() {
        return `${this.name} estuda no colegio ${this.school}`
    }
}

class Professor implements Person {
    constructor(
        public name: string,
        public school: string,
        public subject:  string,
    ) { }

    get info() {
        return `O professor ${this.name} estuda no colegio ${this.school} e leciona ${this.subject}`
    }
}

// função que le
function printInfo(person: Person) {
    console.log(person.info);
    
}

// instancia o estudante
const students = new Student('Joao', 'Monsenhos');
const professors = new Professor('maria', 'google', 'matematica')

printInfo(students)
printInfo(professors)