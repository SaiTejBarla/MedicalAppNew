const sosButton = document.getElementById('sosBtn');

sosButton.addEventListener('click', () => {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
            const location = {
                latitude: position.coords.latitude,
                longitude: position.coords.longitude
            };

            fetch('/api/sos/alert', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ userId: '12345', location })
            })
                .then(response => response.json())
                .then(data => alert(data.message))
                .catch(error => console.error('Error:', error));
        });
    } else {
        alert('Geolocation is not supported by this browser.');
    }
});