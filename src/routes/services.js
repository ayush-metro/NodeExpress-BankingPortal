const express = require('express');
const router = express.Router();
const data =require('../data');
const {accounts,users,writeJSON} = data

router.get('/transfer',function(req,res){
    res.render('transfer')
})
router.post('/transfer',function(req,res){
    accounts[req.body.from].balance=accounts[req.body.from].balance-req.body.amount;
    accounts[req.body.to].balance=parseInt(accounts[req.body.to].balance)+parseInt(req.body.amount);
    const accountsJSON = JSON.stringify(accounts);
    writeJSON(accountsJSON);
    //fs.writeFileSync(path.join(__dirname,'/json/accounts.json'), accountsJSON,"utf-8");
    res.render('transfer', {message: "Transfer Completed"})

})
router.get('/payment',function(req,res){
    res.render('payment', {account: accounts.credit})

})
router.post('/payment',function(req,res){
    accounts.credit.balance = accounts.credit.balance - req.body.amount;
    accounts.credit.available=parseInt(accounts.credit.available)+parseInt(req.body.amount);
    const accountsJSON = JSON.stringify(accounts);
    writeJSON(accountsJSON);
    res.render('payment', { message: "Payment Successful", account: accounts.credit })
})


module.exports = router;