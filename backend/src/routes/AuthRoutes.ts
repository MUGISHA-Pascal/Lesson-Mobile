import { Router } from "express";
import {
  login,
  loginForUser,
  signup,
  signup_Not_admin,
  webAdminLogin,
} from "../controllers/AuthController";

const AuthRoutes = Router();

AuthRoutes.post("/login", login);
AuthRoutes.post("/web_login", webAdminLogin);
AuthRoutes.post("/loginForUser", loginForUser);
AuthRoutes.post("/signup", signup);
AuthRoutes.post("/usersignup", signup_Not_admin);
AuthRoutes.post("/test", (req, res) => {
  res.status(200).json({ message: "Auth route is working!" });
});
export default AuthRoutes;
