const User = require('../models/user');
const bcrypt = require('bcrypt');

exports.reg = async function(req, res) {
    let errors = [];
    if (req.body.fio == "") {
        errors.push("Введіть ПІБ");
    }
    if (req.body.num == "") {
        errors.push("Введіть номер лікарні");
    }
    if (req.body.email == "") {
        errors.push("Введіть email");
    } else {
        if (!/\w+@\w+\.\w/i.test(req.body.email)) {
            errors.push('Неправильний формат email');
        }
    }
    if (req.body.password == "") {
        errors.push("Введіть пароль");
    } else {
        if (req.body.password.length < 6) {
            errors.push("Довжина пароля має бути не менше 6 символів");
        }
        if (req.body.password != req.body.passwordConf) {
            errors.push("Паролі не співпадають");
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

exports.login = async function(req, res) {
    let errors = [];
    const user = await User.findOne({email: req.body.email},'_id password').exec();
    if (req.body.email == "") {
        errors.push("Введіть email");
    }
    if (req.body.password == "") {
        errors.push("Введите пароль");
    }
    if (user == null) {
        errors.push("Аккаунт не знайдений");
    } else {
        const match = bcrypt.compareSync(req.body.password, user.password);
        if (!match) {
            errors.push("Пароль неправильний");
        }
    }
    if (errors.length > 0) {
        res.send({errors:errors});
    } else {
        res.send({success: "OK"});
    }
}