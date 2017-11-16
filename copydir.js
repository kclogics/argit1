
const chalk = require('chalk');
const fs = require('fs-extra')


var date = new Date();
var time = date.getTime();

var dest = "../backup" + "/" + time;
var dest2 = "../latest" + "/" + "recent";


var src = "../advance-react";
var src2 = dest;


 // Async with promises:
 fs.copy(src, dest)
 .then(() => console.log(chalk.blue('\n' + 'loading...')))
 .then(() => fs.copy(src2, dest2)
 .then(() => console.log(chalk.grey('\n' + ' Backup log saved in backup folder.')))
 .then(() => console.log(chalk.green('\n' + 'success!!! Backup file saved in latest folder.')))

 .then(() => console.log('Happy carefree coding :-D'))


 .catch(err => console.error(err)))

 .catch(err => console.error(err))




console.log(chalk.gray("Backup folder unique ID"+ ":" + " "+ " "+ time));
console.log(chalk.gray("Files are copying to path"+ " " + chalk.blue(dest)));



console.log(chalk.white('\n' + "We had initiated backup, it will take few seconds"));
console.log(chalk.yellow("Meanwhile stay coding or sip a hot cup of coffee..."));


