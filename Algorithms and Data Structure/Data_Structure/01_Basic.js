class Student {
    constructor(firstName, lastName, year){
        this.firstName = firstName
        this.lastName = lastName
        this.grade = year
        this.absent = 0;
        this.scores = []
    }
    //instance
    fullName(){
        return `This student's full name is ${this.firstName + '' + this.lastName}`
    }

    markLate(){
        this.absent++
        if(this.absent >= 3){
            return "THIS STUDENT IS NOW EXPELLED"
        }
        return `This student's ${this.firstName + '' + this.lastName} has been absent for ${this.absent} times.`
    }

    addScore(score){
        this.scores.push(score)
        return this.scores
    }

    calculateAverage(){
        let sum = this.scores.reduce(function(a,b){return a+b})
        return sum/this.scores.length
    }
}

let firstStudent = new Student('Jin', 'Kim', 3)
let secondStudent = new Student('Perry', "Platypus")

firstStudent.addScore(88)
firstStudent.scores.push(99)
console.log(firstStudent);
console.log(firstStudent.calculateAverage())