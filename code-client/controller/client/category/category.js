module.exports.getCategoryIndex = (req, res) => {
    let main = 'category/category';
    res.render('client/index', { main: main });
}