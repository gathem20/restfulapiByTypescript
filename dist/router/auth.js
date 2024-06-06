"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const auth_1 = require("../controller/auth");
exports.default = (router) => {
    router.post("/auth/register", auth_1.register);
};
//# sourceMappingURL=auth.js.map