const fs = require('fs');
const path = require('path');
const accountData = fs.readFileSync(__dirname+'/json/accounts.json',
{encoding:'utf8', flag:'r'});
const userData = fs.readFileSync(__dirname+'/json/users.json',
{encoding:'utf8', flag:'r'});
const accounts = JSON.parse(accountData);
const users = JSON.parse(userData);

writeJSON=(data)=>{
    fs.writeFileSync(path.join(__dirname,'/json/accounts.json'), data,"utf-8");
}

exports.accounts = accounts;
exports.users = users;
exports.writeJSON = writeJSON