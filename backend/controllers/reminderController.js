const Reminder = require('../models/Reminder');

exports.getReminders = async (req, res) => {
    const reminders = await Reminder.find();
    res.json(reminders);
};

exports.addReminder = async (req, res) => {
    const newReminder = new Reminder(req.body);
    await newReminder.save();
    res.json({ message: 'Reminder added successfully' });
};

exports.updateReminder = async (req, res) => {
    await Reminder.findByIdAndUpdate(req.params.id, req.body);
    res.json({ message: 'Reminder updated successfully' });
};
