var studentModel = require('../models/student');

module.exports.getLayout = (req,res)=>{
    if(req.params.name == 'sort'){
        studentModel.nameLayout = 'table';
        res.redirect('/');
    }else{
        studentModel.nameLayout = req.params.name;
        res.redirect('/');
    }
}