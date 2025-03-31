const scanButton = document.getElementById('scanBtn');
const resultDiv = document.getElementById('result');

scanButton.addEventListener('click', () => {
    const fileInput = document.getElementById('file');
    const file = fileInput.files[0];

    if (file) {
        const formData = new FormData();
        formData.append('image', file);

        fetch('/api/prescriptions/scan', {
            method: 'POST',
            body: formData
        })
            .then(response => response.json())
            .then(data => {
                resultDiv.innerHTML = `<p>Medication: ${data.details.medication}</p>
                                        <p>Dosage: ${data.details.dosage}</p>
                                        <p>Schedule: ${data.details.schedule}</p>`;
            })
            .catch(error => console.error('Error:', error));
    }
});