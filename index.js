const connection = require('./db');
const express = require('express');
const cors = require('cors');

connection();

const authRoutes = require('./routes/auth.js');
const taskRoutes = require('./routes/tasks');

const app = express();
const PORT = process.env.PORT || 5000;

require('dotenv').config();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded());

app.get('/', (req, res) => {
  res.send('Hello, world!');
});

app.use('/auth', authRoutes);
app.use('/tasks', taskRoutes);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
