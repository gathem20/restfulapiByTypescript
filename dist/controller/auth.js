"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.login = exports.register = void 0;
const users_1 = require("../db/users");
const index_1 = require("../helpers/index");
const register = async (req, res) => {
    try {
        const { email, password, username } = req.body;
        if (!email || !password || !username) {
            return res.sendStatus(400);
        }
        const existuser = await (0, users_1.getusersbyEmail)(email);
        if (existuser) {
            return res.sendStatus(400);
        }
        const salt = (0, index_1.random)();
        const user = await (0, users_1.createuser)({
            email,
            username,
            authentication: {
                salt,
                password: (0, index_1.authentication)(salt, password),
            },
        });
        return res.sendStatus(200).json(user).end();
    }
    catch (error) {
        console.log(error);
        return res.sendStatus(400);
    }
};
exports.register = register;
const login = async (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
        return res.sendStatus(400);
    }
    const user = await (0, users_1.getusersbyEmail)(email);
    if (!user) {
        return res.sendStatus(400);
    }
};
exports.login = login;
//# sourceMappingURL=auth.js.map