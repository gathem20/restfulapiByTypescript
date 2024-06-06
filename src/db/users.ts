import mongoose, { mongo } from "mongoose";
const userschema = new mongoose.Schema({
  username: { type: String, required: true },
  email: { type: String, required: true },
  authentication: {
    password: { type: String, required: true, select: false },
    salt: { type: String, select: false },
    sessiontoken: { type: String, select: false },
  },
});
export const usermodel = mongoose.model("new", userschema);
export const getusers = () => usermodel.find();
export const getusersbyEmail = (email: string) => usermodel.findOne({ email });
export const getusersbysessiontoken = (sessiontoken: string) =>
  usermodel.findOne({
    "authentication.sessiontoken": sessiontoken,
  });
interface idinter {
  id: string | number;
}
export const getuserbyid = (id: idinter) => usermodel.findById({ id });
export const createuser = (values: Record<string, any>) =>
  new usermodel(values).save().then((user) => user.toObject());
export const deleteuserbyid = (id: idinter) =>
  usermodel.findOneAndDelete({ id: id });
export const updateuser = (id: idinter, values: Record<string, any>) =>
  usermodel.findByIdAndUpdate({ id, values });
