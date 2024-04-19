import { MODELS } from "../../sequelize.js";
// import Todo from "../models/Todo.js";
const { Todo } = MODELS;

// add new Todo
const addTodo = async (req, res) => {
    console.log("requested add Todo");
    const { todo } = req.body
    if (todo) {
        const detail = await Todo.create({ todo })
        res.status(200).json(detail)
    }
}

// get all Todos
const getTodos = async (req, res) => {
    console.log("requested get Todos");
    const detail = await Todo.findAll()
    res.status(200).json(detail)
}


// update todo
const updateTodo = async (req, res) => {
    console.log("requested update Todo");
    const { id } = req.params;
    const { todo } = req.body;
    try {
        const todoInstance = await Todo.findByPk(id);
        if (!todoInstance) {
            return res.status(404).json({ error: "Todo not found" });
        }
        await todoInstance.update({ todo });
        return res.status(200).json(todoInstance);
    } catch (error) {
        return res.status(500).json({ error: "Internal Server Error" });
    }
}

const deleteTodo = async (req, res) => {
    console.log("requested delete Todo");
    const { id } = req.params
    const detail = await Todo.destroy({ where: { id: id } })
    res.status(200).json(detail)

}

export { getTodos, addTodo, deleteTodo, updateTodo };