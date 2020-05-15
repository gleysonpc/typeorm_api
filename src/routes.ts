import { Router, Request, Response } from "express";
import {
    getTasks,
    saveTask,
    getTask,
    updateTask,
    finishTask,
    removeTask,
} from "./controller/TasksController";

const routes = Router();

routes.get("/", (req: Request, res: Response) => {
    return res.json({ message: "hello world" });
});

routes.get("/tasks", getTasks);
routes.get("/tasks/:id", getTask);
routes.put("/tasks/:id", updateTask);
routes.post("/tasks", saveTask);
routes.patch("/tasks/:id", finishTask);
routes.delete("/tasks/:id", removeTask);

export default routes;
