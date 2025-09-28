import { Router } from "express";

const castController = Router();

castController.get("/", (req, res) => {
    res.send('castController');
    
})

export default castController;