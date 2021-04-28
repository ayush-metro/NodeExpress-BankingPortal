const fs = require('fs');
const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const accountRoutes = require('./routes/accounts.js');
const servicesRoutes = require('./routes/services.js');
const data =require('./data')
const app = express();
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: true }));
const {accounts,users,writeJSON} = data

    
app.use('/account',accountRoutes);
app.use('/services',servicesRoutes);
app.get('/',function(req,res){
    res.render('index', {title: 'Account Summary',accounts: data.accounts,users:data.users })
})

app.get('/profile',function(req,res){
    //console.log(users[0])
     res.render('profile', {user: users[0] })
})
app.listen(3000,function(req,res){
    console.log('PS Project Running on port 3000!')
})