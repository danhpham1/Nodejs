const axios = require('axios');
const nameQueryModel = require('../model/name-query');

module.exports.getHome = async(req,res)=>{
    const rs = await axios.get(`https://jav-rest-api-htpvmrzjet.now.sh/api/actress?name=${nameQueryModel.nameQuery}`);
    
    let pageCurrent = req.query.page || 1;
    let totalEl = rs.data.result.length;
    let perPage = 8 ;
    let page = Math.ceil(totalEl/perPage);

    let start = (pageCurrent - 1) * perPage;
    let end = pageCurrent * perPage;
    
    res.render('index',{listIdol:rs.data.result.slice(start,end),totalPage:page,pageCurrent:pageCurrent});
}

module.exports.findName = (req,res)=>{
    nameQueryModel.nameQuery = req.body.name;
    res.redirect('/');
}