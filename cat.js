const fs = require("fs");

const cat = (file) => {
  return fs.readFile(file, "utf8", function (err, data) {
    // Display the file content
    console.log(data);

    // readFile('/etc/passwd', (err, data) => {
    //     if (err) throw err;
    //     console.log(data);
    //   });
  });
};

module.exports = cat;
