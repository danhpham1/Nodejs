var studentModel = require('../models/student');

module.exports.processPOST = (req,res)=>{
    if( req.params.name == 'add'){
        //set name layout
        studentModel.nameLayout = 'table';

        //push student 
        studentModel.studentList.push({
            id:req.body.idStudent,
            name:req.body.name,
            dob:req.body.dob,
            adress:req.body.adress,
            email:req.body.email
        });

        res.redirect('/');
    }else{
        
        studentModel.nameLayout = 'table';
        // console.log();
        
        // console.log(studentModel.studentList[parseInt(req.body.indexUpdate)]);
        studentModel.studentList[parseInt(req.body.indexUpdate)] = {
                id:req.body.idStudent,
                name:req.body.name,
                dob:req.body.dob,
                adress:req.body.adress,
                email:req.body.email
        }
        res.redirect('/');
    }
}

module.exports.processGET = (req,res)=>{
        studentModel.nameLayout = 'update';
        console.log(studentModel.nameLayout);
        studentModel.student = studentModel.studentList[req.params.index];
        // console.log(studentModel.student);   
        res.redirect('/');
}