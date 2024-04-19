import { Router } from "express";
import { getTodos, addTodo,deleteTodo,updateTodo } from "../controllers/todoController.js";
const router = Router()
router.get('/getTodos', getTodos);
router.post('/addTodo', addTodo);
router.put('/updateTodo/:id', updateTodo);
router.delete('/deleteTodo/:id', deleteTodo);


export default router 