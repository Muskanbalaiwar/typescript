"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var todos = [];
var router = (0, express_1.Router)();
router.get('/', function (req, res, next) {
    res.status(200).json({ todos: todos });
});
router.post('/todo', function (req, res, next) {
    var newTodo = {
        id: new Date().toISOString(),
        text: req.body.text,
    };
    console.log(newTodo);
    todos.push(newTodo);
    res.status(201).json({ message: 'todo added', todo: newTodo, todos: todos });
});
router.put('todo/:todoId', function (req, res, next) {
    var tid = req.params.todoId;
    var todoIndex = todos.findIndex(function (todoItem) { return todoItem.id === tid; });
    if (todoIndex >= 0) {
        todos[todoIndex] = { id: todos[todoIndex].id, text: req.body.text };
        return res.status(200).json({ message: 'todo updated', todos: todos });
    }
    res.status(404).json({ message: 'no todo find for this id' });
});
router.delete('todo/:todoId', function (req, res, next) {
    todos = todos.filter(function (todoItem) { return todoItem.id !== req.params.todoId; });
    res.status(200).json({ message: 'todo deleted', todos: todos });
});
exports.default = router;
