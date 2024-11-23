const assignment = require("../assignments.json");
const fs = require("fs");
const path = require("path");

const newData = assignment.map((a) => ({
  ...a,
  description: `${a.title} description`,
}));

const filePath = path.join(__dirname, "assignments.json");

fs.writeFile(filePath, JSON.stringify(newData, null, 2), (err) => {
  if (err) {
    console.error("Error writing file:", err);
  } else {
    // Verify the file was actually updated
    fs.readFile(filePath, "utf8", (err, data) => {
      if (err) {
        console.error("Error reading file:", err);
      } else {
        console.log("Updated file contents:", data);
      }
    });
  }
});
