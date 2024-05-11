import inquirer from 'inquirer';
import qr from "qr-image"
import fs from "fs";

inquirer
  .prompt([
   {
    "message": "Type in your URL:",
    name:"URL",
    }
   
  ])
  .then((answers) => {
    const url=answers.URL;
    var qr_svg = qr.image(url);
    qr_svg.pipe(fs.createWriteStream('qrimage.png'));
    console.log('File is saved');
  })
  .catch((error) => {
    if (error.isTtyError) {
      console.log('Prompt couldnt be rendered in the current environment');
    } else {
      console.log('Something went wrong');
    }
  });