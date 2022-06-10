const express = require('express');
const postgresClient = require('../config/db');

const router = express.Router();

exports.addCategory = async (req, res) => {
    try {
        const text = 'INSERT INTO category (title) VALUES ($1);';
        const values = [req.body.title];
        const { rows } = postgresClient.query(text, values);
        res.status(200).json({
            message: 'New Category Added Successfully',
            rows
        })
    } catch (error) {
        console.log(error);
        res.status(400).json({
            status: 'fail',
            error
        });
    }
}

exports.deleteCategory = async (req, res) => {
    try {
        const text = 'DELETE FROM category WHERE ID = $1;';
        const values = [req.body.id];
        const { row } = await postgresClient.query(text, values);
        res.status(200).json({
            message: 'Category Deleted Succesfully',
            row
        })
    } catch (error) {
        console.log(error);
        res.status(400).json({
            status: 'fail',
            error
        });
    }
}

exports.getCategory = async (req, res) => {
    try {
        const text = 'SELECT title FROM category;';
        const { rows } = await postgresClient.query(text);
        console.log(rows);
        res.status(200).json({ rows });
    } catch (error) {
        console.log(error);
        res.status(400).json({
            status: 'fail',
            error
        });
    }
}