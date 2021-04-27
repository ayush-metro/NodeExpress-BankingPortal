const fs = require('fs');
const path = require('path');
const express = require('express');
const app = express();
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')
app.use(express.static(path.join(__dirname, 'public')));
const accountData = fs.readFileSync(__dirname+'/json/accounts.json',
{encoding:'utf8', flag:'r'});
const userData = fs.readFileSync(__dirname+'/json/users.json',
{encoding:'utf8', flag:'r'});
const accounts = JSON.parse(accountData);
const users = JSON.parse(userData);

app.get('/',function(req,res){
    res.render('index', {title: 'Account Summary',accounts: accounts,users:users })
})
app.get('/savings',function(req,res){
    res.render('account', {account: accounts.savings })
})
app.get('/credit',function(req,res){
    res.render('account', {account: accounts.credit })
})
app.get('/checking',function(req,res){
    res.render('account', {account: accounts.checking })
})
app.get('/profile',function(req,res){
    //console.log(users[0])
     res.render('profile', {user: users[0] })
})
app.listen(3000,function(req,res){
    console.log('PS Project Running on port 3000!')
})