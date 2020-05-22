var studentModel = require('../models/student');

module.exports.findStudent = (req,res)=>{
    // console.log(req.body);
    studentModel.nameLayout = 'findtable';
    let index = 0;

    let student = (studentModel.studentList.find(function(el,indx){
        index = indx;
        return el.id == parseInt(req.body.id);
    }));

    
    if(student){
        studentModel.student = student;
        studentModel.index = index;
    }else{
        studentModel.student = undefined;
        studentModel.index = index;
    }
    console.log(index);
    console.log(student);
    // console.log(studentModel.studentList)
    res.redirect('/');
}