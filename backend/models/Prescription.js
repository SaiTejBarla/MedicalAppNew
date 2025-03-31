const mongoose = require('mongoose');

const PrescriptionSchema = new mongoose.Schema({
    medicationName: String,
    dosage: String,
    schedule: String,
    createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Prescription', PrescriptionSchema);
