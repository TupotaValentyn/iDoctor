const User = require('../models/user');
const bcrypt = require('bcrypt');

exports.reg = async function(req, res) {
    let errors = [];
    if (req.body.fio == "") {
        errors.push("Введите логин");
    }
    if (req.body.email == "") {
        errors.push("Введите email");
    } else {
        if (!/\w+@\w+\.\w/i.test(req.body.email)) {
            errors.push('Неверный формат email');
        }
    }
    if (req.body.password == "") {
        errors.push("Введите пароль");
    } else {
        if (req.body.password.length < 6) {
            errors.push("Длина пароля должна быть не менее 6 символов");
        }
        if (req.body.password != req.body.passwordConf) {
            errors.push("Пароли не совпадают");
        }
    }
    if (errors.length > 0) {
        res.send({errors:errors});
    } else {
        let hashedPassw = bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(10));
        const us = await User.create({fio: req.body.fio, email: req.body.email, password: hashedPassw});
        res.send({success: "OK"});
    }
}