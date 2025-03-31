const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const prescriptionRoutes = require('./routes/prescriptionRoutes');
const reminderRoutes = require('./routes/reminderRoutes');
const sosRoutes = require('./routes/sosRoutes');

const app = express();
app.use(bodyParser.json());

// Database Connection
mongoose.connect('mongodb://localhost:27017/medicationApp', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});


// Routes
app.use('/api/prescriptions', prescriptionRoutes);
app.use('/api/reminders', reminderRoutes);
app.use('/api/sos', sosRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));