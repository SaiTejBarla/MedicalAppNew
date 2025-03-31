const PDFDocument = require('pdfkit');
const fs = require('fs');

module.exports = function generatePDF(details, filePath) {
    const doc = new PDFDocument();
    doc.pipe(fs.createWriteStream(filePath));

    doc.fontSize(18).text('Prescription Summary', { align: 'center' });
    doc.moveDown();
    
    doc.fontSize(12).text(`Medication: ${details.medication}`);
    doc.text(`Dosage: ${details.dosage}`);
    doc.text(`Schedule: ${details.schedule}`);

    doc.end();
};