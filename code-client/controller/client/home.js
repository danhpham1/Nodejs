const postModel = require('../../models/admin/post');

module.exports.getHome = async (req, res) => {
    let main = 'patials/index';

    //get random 6 posts
    const postsRandom = await postModel.getPostRandom(6);

    //get post with title
    const postJavscript = await postModel.getPostTitle('Javascript');
    const postNodejs = await postModel.getPostTitle('Nodejs');

    // console.log(postNodejs, postJavscript);
    res.render('client/index', {
        main: main,
        postsRandom: postsRandom,
        postJavscript: postJavscript,
        postNodejs: postNodejs
    });

};