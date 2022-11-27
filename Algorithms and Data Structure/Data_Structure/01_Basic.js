class Student {
    constructor(firstName, lastName, year){
        this.firstName = firstName
        this.lastName = lastName
        this.grade = year
    }
    //instance
    fullName(){
        return `This student's full name is ${this.firstName + '' + this.lastName}`
    }
}

let firstStudent = new Student('Jin', 'Kim')
let secondStudent = new Student('Perry', "Platypus")