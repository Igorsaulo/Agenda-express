const Login = require ('../models/UsersDatabase');

exports.index = (req, res) => {
    res.render('login');
}

exports.register = (req, res) => {
    const login = new Login(req.body);
    login.register();
}