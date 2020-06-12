const mongoose = require('mongoose');
const titleModel = require('../../../models/admin/title')

//get index
module.exports.getTitleIndex = async (req, res) => {

    //connect to mongo get all title
    const listTitle = await titleModel.find();


    let main = 'title/index';
    res.render('admin/index', { main: main, listTitle: listTitle, username: req.session.passport.user });
    // console.log(titleList);
}

//add title
module.exports.getTitleAdd = async (req, res) => {
    //connect to db and find


    let main = 'title/add';
    res.render('admin/index', { main: main, username: req.session.passport.user });
}

module.exports.processPostTitle = (req, res) => {
    // let main = 'title/add';
    // res.render('admin/index',{main:main});
    //connect to mongodb and add title
    let title = new titleModel({
        name: req.body.nametitle
    })

    title.save(function (err) {
        if (err) {
            console.log('err');
        } else {
            console.log('add success');
            // let main = 'title/index';
            // res.render('admin/index',{main:main});
            res.redirect('/admin/title');
        }
    })
    // console.log(title);
}

//edit title
module.exports.getTitleEdit = async (req, res) => {
    //connect to mongo and find
    let title = await titleModel.findById(req.params.id);
    // console.log(title);

    let main = 'title/edit';
    res.render('admin/index', { main: main, title: title, username: req.session.passport.user });
}

module.exports.processEditTitle = async (req, res) => {
    let id = req.body.id;
    titleModel.findByIdAndUpdate(id, { name: req.body.nametitle }, { new: true }, function (err) {
        if (err) {
            console.log('not update');
        } else {
            res.redirect('/admin/title');
        }
    });
}

//delete title
module.exports.processDeleteTitle = async (req, res) => {
    titleModel.deleteOne({ _id: req.params.id }, function (err) {
        if (err) {
            console.log('err');
        } else {
            console.log('delete success');
            res.redirect('/admin/title');
        }
    })
}