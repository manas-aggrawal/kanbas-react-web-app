const modules = require('../modules.json');
const courses = require('../courses.json');
const fs = require('fs');
const path = require('path');
  
  const modulesNames = modules.map(m=>m.name);
  
  const generateModule = (courseId, moduleId) => {
    return {
      _id: moduleId,
      name: `${modulesNames[moduleId.charCodeAt(1) - '0'.charCodeAt(0)]}`,
      description: `Description for ${modulesNames[moduleId.charCodeAt(1) - '0'.charCodeAt(0)]}.`,
      course: courseId,
      lessons: Array.from({ length: 3 }, (_, lessonIndex) => {
        return {
          _id: `L${moduleId.charAt(1)}0${lessonIndex + 1}`,
          name: `Lesson ${lessonIndex + 1} for ${modulesNames[moduleId.charCodeAt(1) - '0'.charCodeAt(0)]}`,
          description: `This lesson covers the fundamentals of ${modulesNames[moduleId.charCodeAt(1) - '0'.charCodeAt(0)]} topic.`,
          module: moduleId,
        };
      }),
    };
  };
  
  const data = courses.flatMap((course) => {
    return Array.from({ length: 7 }, (_, index) => {
      const moduleId = `M${course._id.charAt(2)}${index + 1}`;
      return generateModule(course._id, moduleId);
    });
  });
  
  // Log the generated data
  console.log(JSON.stringify(data, null, 2));

  const filePath2 = path.join(__dirname, 'modules.json');
  fs.writeFile(filePath2, JSON.stringify(data, null, 2), (err) => {
    if (err) {
      console.error('Error writing file:', err);
    } else {
      console.log('File successfully written to assignments.json');
      
      // Verify the file was actually updated
      fs.readFile(filePath2, 'utf8', (err, data) => {
        if (err) {
          console.error('Error reading file:', err);
        } else {
          console.log('Updated file contents:', data);
        }
      });
    }
  });
  