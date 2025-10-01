import jwt from "jsonwebtoken"
import { JWT_SECRET } from "../config/constants.js";

export default function authMiddleware(req, res, next) {
    const token = req.cookie['auth'];

    if (!token) {
        return next();
    }

    try {
        const decodedtoken = jwt.verify(token, JWT_SECRET);
        req.user = decodedtoken;
        req.isAuthenticated = true;
        // valid user
        next();
    } catch (err) {
        // invalid user
        res.clearCookie("auth");

        res.redirect('/auth/login');
    }
}