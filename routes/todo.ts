import { Router } from "express";
import { Todos } from "../models/todos";

const router = Router();

const todos: Todos[] = [];

router.get('/', (req, res, next) => {
    res.status(200).json({ todos: todos });
});

router.post('/todo', (req, res, next) => {
    const newTodo: Todos = {
        id: new Date().toISOString(),
        text: req.body.text,

    }

    todos.push(newTodo);
    res.status(200).json({ message: 'added todo' });
});

router.put('/todo/:id', (req, res, next) => {

    const id: string = req.params.id;

    const toIndex = todos.findIndex(todoItem => {
        todoItem.id === id;
    })

    if (toIndex > 0) {
        todos[toIndex] = { id: todos[toIndex].id, text: req.body.text };
        return res.status(200).json({ message: 'updated todo' });

    }
     res.status(200).json({ id: id });
});

router.delete('/todo/:id', (req, res, next) => {

    const id = req.params.id;

    todos.forEach((result) => {
        if (result.id === id) {
            todos.pop();
           return  res.status(200).json({ message: 'deleted todo' });
        }
    });


    res.status(401).json({ message: 'faild' });
});




export default router;