class Student{
    name = 'Name';
    age = 'Age';
    faculty = 'Faculty';

    constructor(name, age, faculty){
        this.name = name;
        this.age = age;
        this.faculty = faculty;
    }
}

class MedicalStudent extends Student{
    specilization = 'none';

    constructor(name, age, faculty, specilization){
        super(name, age, faculty)
        this.specilization = specilization;
    };

    studentInfo(){
        return `${this.name} is ${this.age} years old,${this.name}'s faculty is the ${this.faculty} and specializtion is the ${this.specilization}.`
    }
}

class AviationStudent extends MedicalStudent{
    constructor(){
        super('Denis', 21, 'Aviation technics and technologies', 'Air Traffic Controller' )
    }
}

class ITStudent extends MedicalStudent{
    constructor(){
        super('Isa', 22, 'IT techonologies', 'Front-end developer')
    }
}

class ManagementStudent extends MedicalStudent{
    constructor(){
        super('Vladimir', 19, 'Management', 'Sales manager')
    }
}

const surgeon = new MedicalStudent('David', 20, 'Medical', 'Surgeon');
const airTrafficController = new AviationStudent();
const developer = new ITStudent();
const manager = new ManagementStudent();

console.group('Students');
console.log(surgeon.studentInfo());
console.log(airTrafficController.studentInfo());
console.log(developer.studentInfo());
console.log(manager.studentInfo());
console.groupEnd();