import { Router } from "express";
import userService from "../services/userService.js";

const authController = Router();

authController.get("/register", (req, res) => {
    res.render("auth/register")
});

authController.post("/register", async (req, res) => {
    const userData = req.body;
    console.log(userData);

    await userService.register(userData)

    res.redirect("/");
});

authController.get("/login", (req, res) => {
    res.render("auth/login")
})

export default authController;