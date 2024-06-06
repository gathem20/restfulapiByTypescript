import Express from "express";
import { register, login } from "../controller/auth";
import router from "router";

export default (Router: Express.Router) => {
  Router.post("/signup", register);
  Router.post("/login", login);
  return Router;
};
