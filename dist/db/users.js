"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateuser = exports.deleteuserbyid = exports.createuser = exports.getuserbyid = exports.getusersbysessiontoken = exports.getusersbyEmail = exports.getusers = exports.usermodel = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const userschema = new mongoose_1.default.Schema({
    username: { type: String, required: true },
    email: { type: String, required: true },
    authentication: {
        password: { type: String, required: true, select: false },
        salt: { type: String, select: false },
        sessiontoken: { type: String, select: false },
    },
});
exports.usermodel = mongoose_1.default.model("new", userschema);
const getusers = () => exports.usermodel.find();
exports.getusers = getusers;
const getusersbyEmail = (email) => exports.usermodel.findOne({ email });
exports.getusersbyEmail = getusersbyEmail;
const getusersbysessiontoken = (sessiontoken) => exports.usermodel.findOne({
    "authentication.sessiontoken": sessiontoken,
});
exports.getusersbysessiontoken = getusersbysessiontoken;
const getuserbyid = (id) => exports.usermodel.findById({ id });
exports.getuserbyid = getuserbyid;
const createuser = (values) => new exports.usermodel(values).save().then((user) => user.toObject());
exports.createuser = createuser;
const deleteuserbyid = (id) => exports.usermodel.findOneAndDelete({ id: id });
exports.deleteuserbyid = deleteuserbyid;
const updateuser = (id, values) => exports.usermodel.findByIdAndUpdate({ id, values });
exports.updateuser = updateuser;
//# sourceMappingURL=users.js.map