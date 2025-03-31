import inquirer from "inquirer";
import qrcode from "qr-image";
import fs from "fs";
 const questions=[
    {
        type:'input',
        name:'web-address',
        message:'type your address',


    },
    {
       type:'input',
       name:'web-2',
       message:'enter another address'

    },

];


inquirer.prompt(questions).then((answers) => {
    console.log(answers);

    const qrCodeData = qrcode.image(answers['web-address'], { type: 'png' });
    qrCodeData.pipe(fs.createWriteStream('qrcode.png'));

    const qrCodeData1 = qrcode.image(answers['web-2'], { type: 'png' });
    qrCodeData1.pipe(fs.createWriteStream('qrcode1.png'));
   
    const data=answers['web-address']+"\n"+answers['web-2'];
     
     fs.writeFile('example.txt', data, (err) => {
        if (err) throw err;
        console.log('The file has been saved!');
      });
  });

