// C R U D

//const fs= require("fs");

// fs.writeFileSync("index.html","Enter Text Here");
// console.log("File Created Successfully!");

// const boilerplate=`<!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Document</title>
// </head>
// <body>
    
// </body>
// </html>`;

//creating a file
// fs.writeFileSync("index3.html",boilerplate);
// console.log("File Created Successfully!");

// const cssboilerplate = `*{
//     margin: 0;
//     padding: 0;
//     box-sizing: border-box;
//}`;

//creating the file
//fs.writeFileSync("style.css", cssboilerplate);
//console.log("file created");

// reading the file
 // const data = fs.readFileSync("style.css");
 //console.log(data);

//console.log(data);
//console.log(data.toString());

// const moreboilerplate = `\nhtml,body{
//     width: 100%;
//     height: 100%;
// }`;

// updating data
// fs.appendFileSync("style.css", moreboilerplate);
// console.log("file updated");

// deleting file
// fs.unlinkSync("main.js");
//  console.log("File deleted");

// renaming the file
// fs.renameSync("script.js", "main.js");
// console.log("file renamed");

// fs.renameSync("main.js","script.js");
// console.log("file renamed");

 // creating the folder
// fs.mkdirSync("new folder");
// console.log("folder creater");

// read dir
// const files = fs.readdirSync("new folder");
// console.log(files);

// delete folder
// fs.rmdirSync("javascript");
// console.log("folder removed");

// rename
// fs.renameSync("new folder", "nayafolder");
// console.log("folder renamed");

// fs.renameSync( "nayafolder","new folder");
//  console.log("folder renamed");

const fs = require("fs");

// fs.writeFileSync("file.txt", "");
// console.log("File Created!");

// fs.appendFileSync("file.txt", "Writing data in existing file");
// console.log("Data Updated in File!");

// const filedata = fs.readFileSync("index.html", "utf-8");
// console.log(filedata);
// console.log(filedata.toString());

// fs.unlinkSync("file.txt");
// console.log("file deleted!");

// fs.mkdirSync("level1");
// console.log("Folder Created!");

// const dirdata = fs.readdirSync("level1");
// console.log(dirdata);

// fs.rmdirSync("level1");
// console.log("Folder Removed!");

// fs.renameSync("old file/folder path", "new file/folder path");

// ------------------------------------------

// No-SQL-MONGODB -> JSON
// single object is known as document
// collection of documents is known as Collections/Model/Schema
// collection of collections is known as Database
const profile = [
    { id: "79834thj", name: "Anurag", skill: "AI/ML" },
    { id: "546lkn", name: "Hitesh", skill: "Backend" },
    { id: "9854jkfd", name: "Sarthak", skill: "Frontend" },
    { id: "9078lkgf", name: "Muskan", skill: "DSA" },
    { id: "1265shj", name: "Rishika", skill: "UIUX" },
    { id: "9078lkgf", name: "Muskan", skill: "Backend" },
 ];

// console.log(profile[2])
  //  console.log(profile[2].name)



//  profile.forEach(function(elem){
//     console.log(profile[2].name)
//  })

// traverse
//profile.forEach((e) => console.log(e.name));

// profile.forEach((e) => console.log(`<h1>${e.name}</h1>`));
// const t = profile.map((e) => `<h1>${e.name}</h1>`);
// console.log(t);

// updating existing data
// const idx = profile.findIndex((p) => p.id === '1265shj'); // findIndex data by id
// console.log(idx);
//overwrite the data
// const upatedData = {
//     name: "Ankur",
//     skill:"frontend",
// };


 //profile[idx] = { ...profile[idx], ...upatedData };
//   console.log(profile);

// deleting data
// const filteredProfile = profile.filter((p) => p.skill !== "DSA");
// console.log(filteredProfile);

// finding data or index of data
// const user = profile.findIndex((p) => p.skill === "Backend");
//const user = profile.find((p) => p.skill === "Backend"); //provides singe data
//const user = profile.filter((p) => p.skill === "Backend"); // provides multiple data
// console.log(user);

// adding new document
const newdata = {
    id: "7834hjfd",
    name: "Rohit",
    skill: "UIUX Developer",
};
console.log(profile);
profile.push(newdata);
console.log(...profile);
//console.log(newdata)
 

//profile.forEach((e) => console.log(e.name) )