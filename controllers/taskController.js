const express = require('express');
const postgresClient = require('../config/db');

const router = express.Router();

exports.getTasks = async (req, res) => {
    try {
        const text = 'SELECT * FROM tasks;';
        const { rows } = await postgresClient.query(text);
        console.log(rows);
        res.status(200).json({ rows });
    } catch (error) {
        console.log(error);
        res.status(400).json({
            status: 'fail',
            error,
          });
    }
}

exports.createTask = async (req, res) => {
    try {
        if(req.body.category) {
            const text = 'INSERT INTO tasks (title, description, category) VALUES ($1, $2, $3)'
            const values = [req.body.title, req.body.description, req.body.category];
            const { rows } = await postgresClient.query(text, values);
            console.log(rows);
            res.status(200).json({ rows });
        }
        else {
            const text = 'INSERT INTO tasks (title, description) VALUES ($1, $2)'
            const values = [req.body.title, req.body.description];
            const { rows } = await postgresClient.query(text, values);
            console.log(rows);
            res.status(200).json({ rows });
        }
    } catch (error) {
        console.log(error);
        res.status(400).json({
            status: 'fail',
            error,
        })
    }
}

exports.deleteTask = async (req, res) => {
    try {
        const text = 'DELETE FROM tasks WHERE title = $1;';
        const values = [req.body.title];
        await postgresClient.query(text, values);
        res.status(200).json({
            message: 'Task Deleted Successfully'
        });
    } catch (error) {
        console.log(error);
        res.status(400).json({
            status: 'fail',
            error
        });
    }
}

exports.updateTask = async (req, res) => {
    try {
        const text = 'UPDATE tasks SET title = $1, description = $2 WHERE ID = $3;';
        const values = [req.body.title, req.body.description, req.body.id];
        await postgresClient.query(text, values);
        res.status(200).json({
            message: 'Task Updated Successfully!'
        });
    } catch (error) {
        console.log(error);
        res.status(400).json({
            status: 'fail',
            error
        });
    }
}