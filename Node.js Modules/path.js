const path = require('path');

const myPath = `C:\\Users\\Muhammad Raheel\\OneDrive - University of Engineering and Technology Taxila\\Node.js\\Node.js Concepts\\Node.js Modules\\app.js`;

const pathInfo = {
  fileName: path.basename(myPath),
  folderName: path.dirname(myPath),
  fileExtenstion: path.extname(myPath),
  absoluteOrNot: path.isAbsolute(myPath), // returns true if path originates from root C:\ etc
  detailInfo: path.parse(myPath),

} 

console.log(pathInfo);