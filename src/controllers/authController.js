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

    res.redirect("/auth/login");
});

authController.get("/login", (req, res) => {
    res.render("auth/login")
});

authController.post("/login", async (req, res) => {
    const { email, password } = req.body;
    const token = await userService.login(email, password);

    // Attach token to cookie
    res.cookie("authCookie", token);
    res.redirect("/")
});

authController.get("/logut", (req, res) => {
    // Clear auth cookie

    res.clearCookie("auth")

    // Invalidate JWT token

    res.redirect("/")
})

export default authController;