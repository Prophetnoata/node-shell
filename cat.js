const fs = require("fs");

module.exports = cat = (file) => {
  return fs.readFile(file, "utf8", function (err, data) {
    // Display the file content
    console.log(data);
  });
};
