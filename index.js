const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();
const source = process.env.ATLAS_CONNECTION;
const PORT = process.env.PORT || 5000;

const authRoutes = require('./routes/auth.js');
const taskRoutes = require('./routes/tasks');

const app = express();

app.use(cors());
app.use(express.json());
app.use('/auth', authRoutes);
app.use('/tasks', taskRoutes);

mongoose.connect(source, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const connection = mongoose.connection;
connection.once('open', () => {
  console.log('DB is connected');
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
