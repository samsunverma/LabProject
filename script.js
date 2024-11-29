// Part 1: Understanding and creating object
const student = {
    name: "Samsun",
    age: 30,
    enrolled: true,
    courses: ["Math", "English", "Physics"],
    displayInfo: function () {
      return `Student: ${this.name}, Age: ${this.age}`;
    },
  };
  
  console.log("Name:", student.name);
  console.log("Age:", student.age);
  console.log("Info:", student.displayInfo());
  