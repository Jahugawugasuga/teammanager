// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
const Employee = require("./Employee");

class Manager extends Employee {
    constructor (name, id, email, officeNumber) {
        super(name, id, email);
        this.officeNumber = officeNumber;
        this.role = "Manager";
        this.getOfficeNumber = function () {
            return this.officeNumber;
        }
        

    };
};
module.exports = Manager;
// const manager = new Manager (6, 2, "Manager");
// console.log(`${this.role}`)
// console.log(`${manager.role}`)
// console.log(`${manager.school}`)