import { Sequelize } from "sequelize";
import TodoModel from "./src/models/Todo.js";

export const MODELS = {}
const sequelize = new Sequelize(
    'todoapp', 'root', 'Armanpool7860',
    {
        host: 'localhost',
        dialect: 'mysql',
        logging: false,
    },
);
MODELS.sequelize = sequelize;
MODELS.Sequelize = Sequelize;
MODELS.Todo = TodoModel(sequelize, Sequelize)

sequelize.sync({ force: false })
export default sequelize
