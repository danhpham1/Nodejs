var studentModel = require('../models/student'); 

module.exports.getIndex = (req,res)=>{
    // console.log(studentModel.nameLayout);
    // console.log(req.query.page);

    // console.log(req.session);
    let page = parseInt(req.query.page) || 1;
    let perPage = 3;

    let start = (page - 1) * perPage;
    let end = page  * perPage;

    let numberPage=Math.ceil((studentModel.studentList.length)/perPage);
    // console.log(numberPage);

    if(studentModel.nameLayout == 'favicon.ico'){
        studentModel.nameLayout = 'table';
        res.render('index',{name:studentModel.nameLayout,
                            studentList:studentModel.studentList.slice(start,end),
                            totalPage:numberPage,
                            activePage:page,
                            updateStudent:studentModel.student,
                            student:studentModel.student,
                            indexStudent:studentModel.index,
                            username:req.session.passport.user,
                            });
    }else{
        
        res.render('index',{name:studentModel.nameLayout,
                            studentList:studentModel.studentList.slice(start,end),
                            totalPage:numberPage,
                            activePage:page,
                            updateStudent:studentModel.student,
                            student:studentModel.student,
                            indexStudent:studentModel.index,
                            username:req.session.passport.user,
                            });
    }
}