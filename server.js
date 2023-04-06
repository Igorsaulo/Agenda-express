require('dotenv').config();
const { json } = require('body-parser');
const express = require('express');
const app = express();
const path = require('path')
const router = require('./router');
const { checkCsrfError,csrfMiddlewares } = require ('./src/middlewares/global');
const flash = require('connect-flash');
const helmet = require('helmet');
const csrf = require('csurf');
const session = require('express-session');
const MongoStore = require('connect-mongo');
const mongoose = require('mongoose');

mongoose.connect(process.env.DATABASE_URL).then(()=>app.emit('ok')).catch(erro => console.log(erro));
app.use(session({
    secret:"12345",
    store: MongoStore.create({ mongoUrl: process.env.DATABASE_URL }),
    resave:false,
    saveUninitialized:false,
    coockie: {
        maxAge: 1000 *60 * 60 * 24 * 7,
        httpOnly:true
    }
}));
app.use(flash());
app.use(express.json());
app.use(express.urlencoded({ extended:true }));
app.use(express.static(path.resolve(__dirname,'public')));
app.use(csrf());
app.use(checkCsrfError);
app.use(csrfMiddlewares);
app.use(router);
app.use(helmet());

app.set('views', path.resolve(__dirname, 'src', 'views'));
app.set('view engine','ejs');
app.on('ok', ()=> app.listen(3000));

module.exports = app