import Express from "express";
import { createuser, getusersbyEmail } from "../db/users";
import { authentication, random } from "../helpers/index";
export const register = async (req: Express.Request, res: Express.Response) => {
  try {
    const { email, password, username } = req.body;

    if (!email || !password || !username) {
      return res.sendStatus(400);
    }
    const existuser = await getusersbyEmail(email);
    if (existuser) {
      return res.sendStatus(400);
    }
    const salt = random();
    const user: any = await createuser({
      email,
      username,
      authentication: {
        salt,
        password: authentication(salt, password),
      },
    });
    return res.sendStatus(200).json(user).end();
  } catch (error) {
    console.log(error);
    return res.sendStatus(400);
  }
};
export const login = async (req: Express.Request, res: Express.Response) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.sendStatus(400);
  }
  const user = await getusersbyEmail(email);
  if (!user) {
    return res.sendStatus(400);
  }
};
