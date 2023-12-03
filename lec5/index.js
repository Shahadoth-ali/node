const os=require("os");
// console.log(os.homedir())
// console.log(os.hostname());
// console.log(os.userInfo())
// console.log(os.totalmem())
// console.log(os.freemem());

// console.log(__dirname);
// console.log(__filename);

const path=require("path");

// const extensionName=path.extname("index.html");
// console.log(extensionName);
const jointName=path.join(__dirname+"/../views");
console.log(jointName);