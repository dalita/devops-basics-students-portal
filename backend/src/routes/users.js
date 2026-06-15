const express = require('express');
const { pool } = require('../db/connect');

const router = express.Router();

router.get('/', async (req, res) => {
    const result = await pool.query(
        'SELECT * FROM users ORDER BY id'
    );

    res.json(result.rows);
});

router.post('/', async (req, res) => {
    const { name, email } = req.body;

    const result = await pool.query(
        'INSERT INTO users(name,email) VALUES($1,$2) RETURNING *',
        [name, email]
    );

    res.status(201).json(result.rows[0]);
});

router.delete('/:id', async (req, res) => {
    await pool.query(
        'DELETE FROM users WHERE id=$1',
        [req.params.id]
    );

    res.json({
        success: true
    });
});

module.exports = router;
