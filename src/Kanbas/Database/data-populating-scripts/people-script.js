const people = require('../people.json');
const enrollments = require('../enrollments.json');
const courses = require('../courses.json');
const fs = require('fs');
const path = require('path');

// Sample user and enrollment data
let users = people;
  
//   let enrollments = db.enrollments;
  
//   let courses = db.courses;
  
  let roles = ["STUDENT", "FACULTY", "TA"];
  
  function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }
  
  // Function to generate a random user
  function generateRandomUser(userId) {
    const firstNames = ["John", "Jane", "Alex", "Bruce", "Clark", "Diana", "Peter", "Natasha", "Barry", "Steve", "Tony", "Hemin", "Ojas", "Ashutosh", "Harish", "Sumit", "Ritesh", "Jose"];
    const lastNames = ["Doe", "Wayne", "Kent", "Parker", "Romanoff", "Allen", "Rogers", "Prince", "Jordan", "Annunziato", "Patel", "Misra", "Agrawal", "Kumar", "Deshmukh", "Bhardwaj", "Stark"];
    const userRole = roles[getRandomInt(0, roles.length)];
    const randomFirstName = firstNames[getRandomInt(0, firstNames.length)];
    const randomLastName = lastNames[getRandomInt(0, lastNames.length)];
    const dobYear = getRandomInt(1950, 2005); // Random birth year
    const randomEmail = `${randomFirstName.toLowerCase()}.${randomLastName.toLowerCase()}@example.com`;
    
    return {
      "_id": userId.toString(),
      "username": `${randomFirstName.toLowerCase()}_${randomLastName.toLowerCase()}`,
      "password": `${randomFirstName.toLowerCase()}123`,
      "firstName": randomFirstName,
      "lastName": randomLastName,
      "email": randomEmail,
      "dob": `${dobYear}-01-01T00:00:00.000Z`,
      "role": userRole,
      "loginId": `0012345${userId}S`,
      "section": `S${getRandomInt(100, 110)}`,
      "lastActivity": `2020-${getRandomInt(1, 12).toString().padStart(2, '0')}-${getRandomInt(1, 28).toString().padStart(2, '0')}`,
      "totalActivity": `${getRandomInt(10, 30)}:${getRandomInt(10, 60)}:${getRandomInt(10, 60)}`
    };
  }
  
  // Function to generate random enrollments for a user
  function generateRandomEnrollments(userId, enrollmentId) {
    const enrollmentsCount = getRandomInt(1, 4); // Each user enrolled in 1-3 courses
    let newEnrollments = [];
    
    for (let i = 0; i < enrollmentsCount; i++) {
      const course = courses[getRandomInt(0, courses.length)];
      newEnrollments.push({
        "_id": (enrollmentId + i).toString(),
        "user": userId.toString(),
        "course": course._id
      });
    }
    
    return newEnrollments;
  }
  
  // Main function to add more users and enrollments
  function addMoreUsersAndEnrollments(numberOfUsersToAdd) {
    let startingUserId = users.length + 1;
    let startingEnrollmentId = enrollments.length + 1;
  
    for (let i = 0; i < numberOfUsersToAdd; i++) {
      const newUser = generateRandomUser(startingUserId + i);
      users.push(newUser);
  
      const newUserEnrollments = generateRandomEnrollments(startingUserId + i, startingEnrollmentId);
      enrollments.push(...newUserEnrollments);
      
      startingEnrollmentId += newUserEnrollments.length;
    }
  }
  
  // Example: Add 10 more users
  addMoreUsersAndEnrollments(100);
  
  // Logging the updated users and enrollments
  console.log("Users:", JSON.stringify(users, null, 2));
  console.log("Enrollments:", JSON.stringify(enrollments, null, 2));

  const filePath = path.join(__dirname, 'people.json');
  fs.writeFile(filePath, JSON.stringify(users, null, 2), (err) => {
    if (err) {
      console.error('Error writing file:', err);
    } else {
      console.log('File successfully written to assignments.json');
      
      // Verify the file was actually updated
      fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
          console.error('Error reading file:', err);
        } else {
          console.log('Updated file contents:', data);
        }
      });
    }
  });

  const filePath2 = path.join(__dirname, 'enrollments.json');
  fs.writeFile(filePath2, JSON.stringify(enrollments, null, 2), (err) => {
    if (err) {
      console.error('Error writing file:', err);
    } else {
      console.log('File successfully written to assignments.json');
      
      // Verify the file was actually updated
      fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
          console.error('Error reading file:', err);
        } else {
          console.log('Updated file contents:', data);
        }
      });
    }
  });
  