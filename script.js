
document.addEventListener('DOMContentLoaded', function() {
    const resultsList = document.getElementById('results');

    if (resultsList) {
        const urlParams = new URLSearchParams(window.location.search);
        
        if (urlParams.toString()) {
            resultsList.innerHTML = '';
        }
        
        urlParams.forEach((value, key) => {
            if (key !== 'sessionId' && value.trim()) { 
                const resultItem = document.createElement('div');
                resultItem.className = 'result-item';
                
                const fieldName = key.charAt(0).toUpperCase() + key.slice(1).replace(/([A-Z])/g, ' $1');
                
                resultItem.innerHTML = `
                    <strong>${fieldName}:</strong> ${value}
                `;
                
                resultsList.appendChild(resultItem);
            }
        });
        
        if (resultsList.children.length === 0) {
            resultsList.innerHTML = '<div class="no-results">No form data submitted yet. Please fill out the form first!</div>';
        }
    }
});