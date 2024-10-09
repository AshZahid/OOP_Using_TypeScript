import inquirer from "inquirer";
class Student {
    name;
    constructor(n) {
        this.name = n;
    }
}
class Person {
    students = [];
    addStudent(obj) {
        this.students.push(obj);
    }
}
const persons = new Person();
const programStart = async (persons) => {
    do {
        console.log("Welcom");
        const ans = await inquirer.prompt({
            name: "select",
            type: "list",
            message: "Whome would you like to interact with?",
            choices: ["Staff", "Students", "Exit"]
        });
        if (ans.select == "Staff") {
            console.log("You approach the staff room. Please feel free to ask anything");
        }
        else if (ans.select == "Students") {
            const ans = await inquirer.prompt({
                name: "student",
                type: "input",
                message: "Enter the student's name you want to engage with:"
            });
            const student = persons.students.find(val => val.name == ans.student);
            if (!student) {
                const name = new Student(ans.student);
                persons.addStudent(name);
                console.log(`Hello i am ${name.name}. Nice to meet you`);
                console.log("New student added.");
                console.log("Current students list");
                console.log((persons.students));
            }
            else {
                console.log(`Hello i am ${student.name}. Nice to talk to you`);
                console.log(("Existing student list"));
                console.log((persons.students));
            }
        }
        else if (ans.select == "Exit") {
            console.log("Exiting the program");
            process.exit();
        }
    } while (true);
};
programStart(persons);
