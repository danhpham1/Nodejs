const mongoose = require('mongoose');
const titleModel = require('../../../models/admin/title');

//get Index post
module.exports.getPostIndex = (req,res)=>{
    let main = 'posts/index';
    res.render('admin/index',{main:main});
}


//get index post add
module.exports.getPostAdd = async (req,res)=>{
    //connect to mongo get title
    const listTitle = await titleModel.find();

    let main = 'posts/add';
    res.render('admin/index',{main:main,listTitle:listTitle});
}

module.exports.processPost = (req,res)=>{
    let view = 0;
    let date = new Date(Date.now());
    date = date.toISOString().split('T')[0];

    let post = {
        title:req.body.title,
        logo:req.file.filename,
        views:view,
        date:date,
        nametitle:req.body.nametitle,
        content:req.body.content
    }

    console.log(post);
}