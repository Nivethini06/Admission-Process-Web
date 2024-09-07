document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contactForm');
    const queryResultDiv = document.getElementById('queryResult');

    // Retrieve form data array from localStorage if it exists
    let storedFormDataArray = localStorage.getItem('contactFormDataArray');
    storedFormDataArray = storedFormDataArray ? JSON.parse(storedFormDataArray) : [];

    // Display all stored form data initially
    storedFormDataArray.forEach(formData => displayQuery(formData));

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent form submission
        
        // Get form data
        const formData = {
            name: form.elements['name'].value,
            email: form.elements['email'].value,
            message: form.elements['message'].value
        };

        // Add new form data to the array
        storedFormDataArray.push(formData);

        // Store updated form data array in localStorage
        localStorage.setItem('contactFormDataArray', JSON.stringify(storedFormDataArray));

        // Display the query below the form
        displayQuery(formData);

        // Clear the form fields
        form.reset();
    });

    function displayQuery(formData) {
        const queryDiv = document.createElement('div');
        queryDiv.innerHTML = `
            <p><strong>Name:</strong> ${formData.name}</p>
            <p><strong>Email:</strong> ${formData.email}</p>
            <p><strong>Message:</strong> ${formData.message}</p>
            <button class="deleteBtn">Delete</button>
            <hr>
        `;
        queryResultDiv.prepend(queryDiv); // Add new query at the beginning

        // Add event listener to delete button
        const deleteBtn = queryDiv.querySelector('.deleteBtn');
        deleteBtn.addEventListener('click', function() {
            // Find index of formData in storedFormDataArray
            const index = storedFormDataArray.findIndex(data => data === formData);
            if (index !== -1) {
                // Remove formData from storedFormDataArray
                storedFormDataArray.splice(index, 1);
                // Update localStorage
                localStorage.setItem('contactFormDataArray', JSON.stringify(storedFormDataArray));
                // Remove queryDiv from DOM
                queryResultDiv.removeChild(queryDiv);
            }
        });
    }
});

