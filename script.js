document.getElementById('userForm').addEventListener('submit', async function (e) {
    e.preventDefault();

    const data = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        age: document.getElementById('age').value,
        feedback: document.getElementById('feedback').value
    };

    const response = await fetch('https://c1af-2600-6c5a-467f-875e-9632-a308-4c16-3cc9.ngrok-free.app/api/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    });

    if (response.ok) {
        alert("Form submitted successfully!");
    } else {
        alert("Failed to submit form.");
    }
});

