var fs = require('fs');
fs.open('iniconfig.txt','w', function (err, file) {
	if (err) throw err;
	console.log('Success'); //hapus
});

var fs = require('fs');
fs.appendFile('iniconfig.txt','pic_bulboff.gif', function (err) {
	if (err) throw err;
	console.log('Success'); //timpa
});

var fs = require('fs');
fs.writeFile('iniconfig.txt','pic_bulbon.gif', function (err) {
	if (err) throw err;
	console.log('Success'); //tulis
});

//https://www.tutorialkart.com/nodejs/create-file-in-nodejs-using-node-fs-module/
