exports.getAllPost = (req,res) => {
   let {category, page, filter} = req.params;
    res.send('Render All Posts')
}