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
   
  //Part 2: Working with JSON
   const studentJSON = JSON.stringify(student);
   console.log("JSON String: ", studentJSON);

   const parsedStudent = JSON.parse(studentJSON);
   console.log("Parsed Object: ", parsedStudent);
   console.log("Are objects Identical?", student === parsedStudent);
   
   // Part 3: Using Destructuring Assignment
const { name, courses } = student;
console.log("Destructured Name:", name);
console.log("Destructured Courses:", courses);

const scores = [75, 82, 68, 80];
const [score1, score2, score3] = scores;
console.log("First Score:", score1);
console.log("Second Score:", score2);
console.log("Third Score:", score3);

// Part 4: Spread Operator
const clonedStudent = { ...student, graduationYear: 2026 };
console.log("Cloned Student:", clonedStudent);

const newCourses = ["Cybersecurity", "EthicalHacking, Cloursecurity"];
const mergedCourses = [...student.courses, ...newCourses];
console.log("Merged Courses:", mergedCourses);


   