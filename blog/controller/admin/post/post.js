
const mongoose = require('mongoose');
const path = require('path');
const fs = require('fs');
const titleModel = require('../../../models/admin/title');
const postModel = require('../../../models/admin/post');

//get Index post
module.exports.getPostIndex = async (req,res)=>{
    let main = 'posts/index';

    //connect to get posts
    const listPosts = await postModel.find()

    res.render('admin/index',{main:main,listPosts:listPosts});
}


//get index post add
module.exports.getPostAdd = async (req,res)=>{
    //connect to mongo get title
    const listTitle = await titleModel.find();

    let main = 'posts/add';
    res.render('admin/index',{main:main,listTitle:listTitle});
}

//process post
module.exports.processPost = async (req,res)=>{
    let views = 0;
    let date = new Date(Date.now());
    let post;
    
    date = date.toISOString().split('T')[0];
    console.log(req.body.nametitle);

    titleModel.find({_id:req.body.nametitle},function(err,nameTitle){
        // console.log(nameTitle);
        if(err){
            console.log('not find title');
        }else{
            // console.log();
            post = new postModel({
                    title:req.body.title,
                    logo:req.file.filename,
                    views:views,
                    date:date,
                    idTitle:req.body.nametitle,
                    content:req.body.content,
                    nameTitle:nameTitle[0].name,
                    contentSub:req.body.contentsub
                });

                post.save(function(err){
                        if(err){
                            console.log('save post faild');
                        }else{
                            res.redirect('/admin/posts');
                        }
                    })
        }
    });
}

//get one post

module.exports.getPostEdit = async (req,res)=>{
    const listTitle = await titleModel.find();
    const post = await postModel.findById(req.params.id);

    let main = 'posts/edit';
    res.render('admin/index',{main:main,listTitle:listTitle,post:post});

}

//process edit post

module.exports.processEdit = async (req,res)=>{
    // console.log(req.body);
    let nameTitle = await titleModel.find({_id:req.body.nametitle});
    // console.log(nameTitle[0].name);

    postModel.findByIdAndUpdate(req.body.id,{
        title:req.body.title,
        logo:req.body.logo,
        views:req.body.views,
        date:req.body.date,
        idTitle:req.body.nametitle,
        content:req.body.content,
        nameTitle:nameTitle[0].name,
        contentSub:req.body.contentsub
    },function(err){
        if(err){
            console.log('update faild');
        }else{
            console.log('update success');
            res.redirect('/admin/posts');
        }
    })
}

//delete post
module.exports.processDelete = async (req,res)=>{

    let post = await postModel.findById(req.params.id);

    // console.log(post.logo);

    let dir = path.join(__dirname + '../../../../public/img/logo');
    // console.log(dir);
    if(fs.existsSync(`${dir}/${post.logo}`)){
        fs.unlinkSync(`${dir}/${post.logo}`);
    };

    postModel.deleteOne({_id:req.params.id},function(err){
        if(err){
            console.log('Delete faild');
        }else{
            console.log('Delete');
            res.redirect('/admin/posts');
        }
    })
}