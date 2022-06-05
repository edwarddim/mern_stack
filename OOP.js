/* 
Model a lecture with an instructor and students who are attending the lecture.
Allow for there to be multiple lectures going on at the same time.

Give students a collection hobbies.

Create a way to find students who are attending a lecture who have shared
hobbies.

Find the student in a lecture whom has the largest number of hobbies.

Get a list of alphabetized full names of students attending a lecture.
*/

class Person{
    // CONSTRUCTOR
    constructor(firstName, lastName, hobbies=[]){
        this.firstName = firstName
        this.lastName = lastName
        this.hobbies = hobbies
    }

    // retrieving the full name
    fullName(){
        // return this.firstName + " "  +this.lastName
        return `Hello my name is ${this.firstName} ${this.lastName}`
    }

    addHobby(data){
        this.hobbies.push(data)
    }
}

class Lecture{
    constructor(instructor, topic, students=[]){
        this.instructor = instructor
        this.topic = topic
        this.students = students
    }

    getStudentsWithSharedHobbies(){
        const hobbyObj = {}
        for(const student of this.students){
            for(const hobby of student.hobbies){
                // the hobby already exsits as a key in the obj
                if(hobbyObj.hasOwnProperty(hobby)){
                    hobbyObj[hobby].push(student.fullName())
                }
                // the hobby doesn't exist as a key in the obj
                else{
                    hobbyObj[hobby] = [student.fullName()]
                }
            }
        }
        return hobbyObj
    }

    getStudentSharedHobby(hobby){
        const arr = []
        for(const student of this.students){
            for(const studentHobby of student.hobbies){
                if(studentHobby === hobby){
                    arr.push(student.fullName())
                }
            }
        }
        return arr
    }

    getStudentSharedHobby2(hobby){
        return this.students.filter((student) =>  student.hobbies.includes(hobby)).map(student => student.fullName())
    }
}

const Edward = new Person("Edward", "Im",[
    "coding",
    "music"
])

const Shawn = new Person("Shawn", "Converse", [
    "gaming",
    "music",
    "cooking"
])

const Vincent = new Person("Vincent", "Guerena", [
    "gaming",
    "cooking",
    "exercise"
])

const Patrick = new Person("Patrick", "Dewey", [
    "gaming",
    "exercise",
    "drawing"
])

const Dustine = new Person("Dustine", "Hacbang", [
    "photography",
    "videography",
    "dancing",
    "exercise"
])

const algo = new Lecture(Shawn, "SORTING", [Edward, Vincent, Patrick, Dustine])
// console.log(algo.getStudentsWithSharedHobbies())
// console.log(algo.getStudentSharedHobby("gaming"))
// console.log(algo.getStudentSharedHobby("exercise"))
console.log(algo.getStudentSharedHobby3("gaming"))
console.log(algo.getStudentSharedHobby3("exercise"))