const pool = require('./connection.js')
const express = require('express')

const app = express()

app.use(express.json())
app.get('/todo', async (req, res) => {
  pool.query('SELECT * FROM todo', (err, result) => {
    if (err) {
    //   handleQueryError(err, res)
      console.log(err)
    } else {
      res.status(200)
      res.json(result.rows) // Send the data as JSON
    }
  })
})

const todos = [];

// Rute untuk mendapatkan semua todo
app.get('/todos', (req, res) => {
  res.json(todos);
});

// Rute untuk menambahkan todo
app.post('/todos', (req, res) => {
  const newTodo = req.body;
  todos.push(newTodo);
  res.status(201).json(newTodo);
});

// Rute untuk menghapus todo berdasarkan ID
app.delete('/todos/:id', (req, res) => {
  const todoId = parseInt(req.params.id);
  const index = todos.findIndex((todo) => todo.id === todoId);
  if (index !== -1) {
    todos.splice(index, 1);
    res.status(204).send();
  } else {
    res.status(404).json({ error: 'Todo not found' });
  }
});

module.exports = app