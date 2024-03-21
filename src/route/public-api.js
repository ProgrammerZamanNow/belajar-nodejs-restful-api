import express from "express";
import userController from "../controller/user-controller.js";
import healthController from "../controller/health-controller.js";

const publicRouter = new express.Router();
publicRouter.post('/api/users', userController.register);
publicRouter.post('/api/users/login', userController.login);
publicRouter.get('/ping', healthController.ping);

export {
    publicRouter
}
