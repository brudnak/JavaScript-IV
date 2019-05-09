'use strict'

class Person {
    constructor(attributes) {
        this.name = attributes.name
        this.age = attributes.age
        this.location = attributes.location
        this.gender = attributes.gender
    }

    speak() {
        return `Hello my name is ${this.name}, I am from ${this.location}`
    }
}

class Instructor extends Person {
    constructor(attributes) {
        super(attributes)
        this.specialty = attributes.specialty
        this.favLanguage = attributes.favLanguage
        this.catchPhrase = attributes.catchPhrase
    }

    demo(subject) {
        return `Today we are learning about ${subject}`
    }

    grade(student, subject) {
        return `${student.name} receives a perfect score on ${subject}`
    }
}

class Student extends Person {
    constructor(attributes) {
        super(attributes)
        this.previousBackground = attributes.previousBackground
        this.className = attributes.className
        this.favSubjects = attributes.favSubjects
    }

    listsSubjects() {
        this.favSubjects.forEach((e) => {
           return console.log(`One of ${this.name}'s favorite subjects: ${e}`)
        })
    }

    PRAssignment(subject) {
        return `${this.name} has submitted a PR for ${subject}`
    }

    sprintChallenge(subject) {
        return `${this.name} has begun sprint challenge on ${subject}`
    }
}

class ProjectManager extends Instructor {
    constructor(attributes) {
        super(attributes)
        this.gradClassName = attributes.gradClassName
        this.favInstructor = attributes.favInstructor
    }

    standup(channel) {
        return `${this.name} announces to ${channel}, @channel standy times!`
    }

    debugsCode(student, subject) {
        return `${this.name} debugs ${student.name}'s code on ${subject}`
    }
}

const andrew = new Student({
    name: 'Andrew',
    location: 'Phoenix',
    age: 29,
    gender: 'male',
    previousBackground: 'Data Entry',
    className: 'WEB20',
    favSubjects: ['Go', 'JavaScript', 'Python']
})

const josh = new ProjectManager({
    name: 'Josh',
    location: 'Phoenix',
    age: 27,
    gender: 'male',
    previousBackground: 'Management',
    gradClassName: 'WEB17',
    favSubjects: ['JavaScript', 'React', 'Redux'],
    favInstructor: 'Dan'
})

const dan = new Instructor({
    name: 'Daniel Levy',
    location: 'Denver',
    age: 34,
    gender: 'male',
    favLanguage: 'JavaScript',
    previousBackground: 'Galvanize Inc',
    catchPhrase: 'If you can do the thing, you get paid'
})

const runLogs = () => {
    console.log(andrew.speak())
    andrew.listsSubjects()
    console.log(andrew.PRAssignment('Redux'))
    console.log(andrew.sprintChallenge('JavaScript'))
    console.log(josh.speak())
    console.log(dan.speak())
    console.log(dan.demo('Gatsby'))
    console.log(dan.grade(andrew, 'JavaScript'))
    console.log(josh.standup('WEB20'))
    console.log(josh.debugsCode(andrew, 'CSS'))
}

runLogs()