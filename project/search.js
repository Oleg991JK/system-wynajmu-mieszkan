document.addEventListener('DOMContentLoaded', () => {
    const searchBtn = document.querySelector('.search-icon-btn');
    
    if (searchBtn) {
        searchBtn.addEventListener('click', () => {
            const city = document.getElementById('locationInput').value;
            // city list przresyłany jako  URL
            window.location.href = `list.html?city=${city}`;
        });
    }
});