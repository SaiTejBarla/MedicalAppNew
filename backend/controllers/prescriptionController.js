const Prescription = require('../models/Prescription');

exports.getPrescriptions = async (req, res) => {
    const prescriptions = await Prescription.find();
    res.json(prescriptions);
};

exports.addPrescription = async (req, res) => {
    const newPrescription = new Prescription(req.body);
    await newPrescription.save();
    res.json({ message: 'Prescription added successfully' });
};

exports.deletePrescription = async (req, res) => {
    await Prescription.findByIdAndDelete(req.params.id);
    res.json({ message: 'Prescription deleted successfully' });
};
