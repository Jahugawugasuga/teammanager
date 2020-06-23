// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee");

class Intern extends Employee {
    constructor(name, id, email, school) {
       super(name, id, email);
       this.school = school;
       this.role = "Intern"
      this.getSchool = function () {
          return this.school;
      }
    
        
    }



}
module.exports = Intern;
// const intern = new Intern (35, "BYU", "Intern");
// console.log(`${this.role}`)
// console.log(`${intern.role}`)
// console.log(`${intern.school}`)