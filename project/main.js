document.addEventListener('DOMContentLoaded', () => {
    const listingsGrid = document.getElementById('listingsGrid');
    const citySearch = document.getElementById('citySearch'); // Інпут на сторінці результатів
    const priceRange = document.getElementById('priceRange');

    //card render
    function renderResults(data) {
        if (!listingsGrid) return;
        if (data.length === 0) {
            listingsGrid.innerHTML = `<p class="no-results">Nie znaleziono mieszkań spełniających kryteria.</p>`;
            return;
        }

        listingsGrid.innerHTML = data.map(apt => `
            <div class="card" onclick="openProperty(${apt.id})">
                <div class="card-image-wrapper">
                    <img src="${apt.img}" alt="${apt.title}" class="card-img">
                    <div class="price-badge-card">${apt.price} PLN</div>
                </div>
                <div class="card-info">
                    <h3>${apt.title}</h3>
                    <p class="city">📍 ${apt.city}</p>
                </div>
            </div>
        `).join('');
    }

    //filtracja  
    function applyFilters() {
        const searchText = citySearch ? citySearch.value.toLowerCase().trim() : "";
        const maxPrice = priceRange ? parseInt(priceRange.value) : 10000;

        const filtered = apartments.filter(apt => {
            const matchCity = apt.city.toLowerCase().includes(searchText);
            const matchPrice = apt.price <= maxPrice;
            return matchCity && matchPrice;
        });

        renderResults(filtered);
    }

    // city searching
    const urlParams = new URLSearchParams(window.location.search);
    const cityFromUrl = urlParams.get('city');

    if (cityFromUrl && citySearch) {
        citySearch.value = cityFromUrl;
        applyFilters();
    } else {
        renderResults(apartments);
    }

    
    if (citySearch) citySearch.addEventListener('input', applyFilters);
    if (priceRange) priceRange.addEventListener('input', applyFilters);

    window.openProperty = (id) => {
        window.location.href = `property.html?id=${id}`;
    };
});