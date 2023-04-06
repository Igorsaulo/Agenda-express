exports.checkCsrfError = (err,req,res,next) =>{
    if (err && 'EBADCSRFTOKEN' === err.code){
        return res.render('404')
    }
};
exports.csrfMiddlewares = (req,res,next) =>{
    res.locals.csrfToken = req.csrfToken();
    next();
}