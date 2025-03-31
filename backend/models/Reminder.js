
const mongoose = require('mongoose');

const ReminderSchema = new mongoose.Schema({
    prescriptionId: mongoose.Schema.Types.ObjectId,
    reminderTime: Date,
    status: { type: String, enum: ['Pending', 'Taken', 'Missed'], default: 'Pending' }
});

module.exports = mongoose.model('Reminder', ReminderSchema);
