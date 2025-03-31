const express = require('express');
const { getPrescriptions, addPrescription, deletePrescription } = require('../controllers/prescriptionController');
const router = express.Router();

router.get('/', getPrescriptions);
router.post('/', addPrescription);
router.delete('/:id', deletePrescription);

module.exports = router;