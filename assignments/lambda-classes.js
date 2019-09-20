// CODE here for your Lambda Classes

class Person {
    constructor(attributes){
        this.name = attributes.name,
        this.age = attributes.age,
        this.location = attributes.location
    }//ends attributes

    speak (){
        console.log(`Hello my name is ${this.name}, I am from ${this.location}.`);
    }//ends speak
}//ends Person

class Instructor extends Person {
    constructor(instructorAttributes){
        super(instructorAttributes),
        this.speciality = instructorAttributes.speciality,
        this.favLanguage = instructorAttributes.favLanguage,
        this.catchPhrase = instructorAttributes.catchPhrase
    }//ends InstructorAttributes

    demo (subject){
        console.log(`Today we are learning about ${subject}.`);
    }//ends demo

    grade (student, subject){
        console.log(`${student} receives a perfect score on ${subject}.`);
    }//ends grade

    changeGrade (studentObject){
        let newGrade = 0;
        if (Math.random() <= 0.5){
           newGrade = (studentObject.currentGrade - (Math.floor(Math.random() * 100)));
        } else if (Math.random() > 0.5){
           newGrade = (studentObject.currentGrade + (Math.floor(Math.random() * 100)));
            }
        console.log(`${studentObject.name} now has a grade of ${newGrade}`);
        }
}//ends Instructor

class Student extends Instructor {
    constructor(studentAttributes){
        super(studentAttributes),
        this.previousBackground = studentAttributes.previousBackground,
        this.className = studentAttributes.className,
        this.favSubjects = studentAttributes.favSubjects,
        this.currentGrade = studentAttributes.currentGrade
    }//ends studentAttributes

    listsSubjects (){
        for (let i = 0; i < this.favSubjects.length; i++){
            console.log(this.favSubjects[i]);
        }
    }//ends listsSubjects

    PRAssignment (subject){
        console.log(`${student1.name} has submited a PR for ${subject}.`)
    }//ends PRAssignment

    sprintChallenge (subject){
        console.log(`${student2.name} has begun sprint challenge on ${subject}.`)
    }//ends sprintChallenge
}//ends Student

class ProjectManager extends Student {
    constructor(projectManagerAttributes){
        super(projectManagerAttributes),
        this.gradClassName = projectManagerAttributes.gradClassName,
        this.favInstructor = projectManagerAttributes.favInstructor
    }//ends projectManagerAttributes

    standup (channel){
        console.log(`${this.name} announces to ${channel}, @channel standy times!`);
    }//ends standup

    debugsCode (studentObject, subject){
        console.log(`${this.name} debugs ${studentObject.name}'s code on ${subject}.`);
    }//ends debugsCode
}//ends Instructor


const instructor1 = new Instructor({
    name: 'Kevin',
    age: 42,
    location: 'Kenya' ,
    speciality: 'Python',
    favLanguage: 'French',
    catchPhrase: 'You can never react too much!'
})

const instructor2 = new Instructor({
    name: 'Laura M',
    age: 38,
    location: 'Arkansas, USA', 
    speciality: 'IOS',
    favLanguage: 'Ruby',
    catchPhrase: 'Rubies are a girls best friend!'
});

const student1 = new Student({
    name: 'Landon',
    age: 25,
    location: 'Ireland', 
    speciality: 'Front End Development',
    favLanguage: 'JavaScript',
    catchPhrase: 'Always just beginning.',
    previousBackground: 'Math Teacher',
    className: 'PTWEB2',
    favSubjects: ['HTML', 'CSS', 'PHP', 'JavaScript'],
    currentGrade: 99
});

const student2 = new Student({
    name: 'Petra',
    age: 45,
    location: 'Jamaica', 
    speciality: 'Back End Development',
    favLanguage: 'PHP',
    catchPhrase: 'I am ROCK steady.',
    previousBackground: 'Mountain Climbing Instructor',
    className: 'WEBFT12',
    favSubjects: ['Ruby', 'PHP', 'Java', '.NET', 'Python'],
    currentGrade: 72
});

const projectManager1 = new ProjectManager({
    name: 'Akimbo',
    age: 66,
    location: 'Secret Base',
    speciality: 'Robotics',
    favLanguage: 'C++',
    catchPhrase: 'Manual labor is for AI!',
    previousBackground: 'Construction Laborer',
    className: 'CS4',
    favSubjects: ['LISP', 'C++', 'MATLAB', 'Java', 'Python'],
    gradClassName: 'CS1',
    favInstructor: 'Kevin'
});

const projectManager2 = new ProjectManager({
    name: 'Star',
    age: 18,
    location: 'California, USA', 
    speciality: 'everything',
    favLanguage: 'COW',
    catchPhrase: 'There is nothing I cannot do!',
    previousBackground: 'Genius',
    className: 'WEB15',
    favSubjects: ['React', 'UX', 'AI', 'Data Science'],
    gradClassName: 'DS1',
    favInstructor: 'Deanna'
});

console.log(projectManager2.name);
console.log(projectManager2.catchPhrase);
console.log(instructor2.name);
console.log(student2.catchPhrase);

student1.speak();
student2.speak();
instructor1.speak();
instructor2.speak();
projectManager1.speak();
projectManager2.speak();

student1.demo('Spiders');
instructor1.demo('Prototypes');
projectManager2.demo('how awesome I am!');

instructor2.grade(student1.name, 'HTML');
projectManager1.grade(student2.name, 'React');
student1.grade(student1.name, 'Self Care');

student2.listsSubjects();
projectManager2.listsSubjects();

student1.PRAssignment('DOM');
student2.sprintChallenge('JavaScript Fundamentals');
projectManager1.PRAssignment('LOVE');


projectManager1.standup('WEB24 Help');
projectManager2.standup('Random');
projectManager1.debugsCode(student1, 'HTML');
projectManager2.debugsCode(student2, 'JavaScript');

console.log(student2.currentGrade);
console.log(student1.currentGrade);

instructor2.changeGrade(student2);
instructor2.changeGrade(student2);
instructor2.changeGrade(student1);
instructor2.changeGrade(student1);