import express from "express";
import cors from "cors";
// import { addTodo,getTodos,} from "./src/controllers/TodoController.js";
import dotenv from "dotenv";
dotenv.config({ path: "./.env" })
const app = express();
const port = process.env.PORT

app.use(cors());
app.use(express.json({ limit: "16kb" }))
app.use(express.urlencoded({ extended: true, limit: "16kb" }))

import todoRouter from "./src/routes/todo.routes.js";
app.use(todoRouter)

// await sequelize.sync({ force: true });
app.listen(port, () => console.log(`server is running on ${port}`))