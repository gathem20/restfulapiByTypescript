import  Express  from "express";
import auth from "./auth";
const router = Express.Router()

export default():Express.Router =>{
    auth(router)
    return router
}