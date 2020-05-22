var studentModel = require('../models/student');

module.exports.deleteStudent = (req,res)=>{
    studentModel.studentList.splice(req.params.index,1);
    studentModel.nameLayout = 'table';
    res.redirect('/');
}