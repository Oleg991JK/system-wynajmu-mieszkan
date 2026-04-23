document.addEventListener('DOMContentLoaded', () => {

    const listingsGrid = document.getElementById('listingsGrid');
    const sidePrice = document.getElementById('sidePrice');
    const priceVal = document.getElementById('priceVal');
    const filterSmoking = document.getElementById('filterSmoking');
    const filterPets = document.getElementById('filterPets');
    const resetBtn = document.getElementById('resetFilters');

    // otrzymujemy miasto z URL 
    const params = new URLSearchParams(window.location.search);
    const cityFromUrl = params.get('city') ? params.get('city').toLowerCase().trim() : "";

    // card render
    function renderResults(data) {
        if (!listingsGrid) return;
        
        if (data.length === 0) {
            listingsGrid.innerHTML = `
                <div class="no-results" style="grid-column: 1/-1; text-align: center; padding: 50px;">
                    <h2>Brak wyników</h2>
                    <p>Nie znaleziono mieszkań w mieście "${cityFromUrl}" spełniających Twoje kryteria.</p>
                </div>`;
            return;
        }

        listingsGrid.innerHTML = data.map(apt => `
            <div class="card" onclick="location.href='details.html?id=${apt.id}'">
                <div class="card-img-container">
                    <img src="${apt.img}" alt="${apt.title}" class="card-img">
                    <div class="card-price-badge">${apt.price} PLN</div>
                </div>
                <div class="card-info">
                    <h3>${apt.title}</h3>
                    <p class="card-city"> ${apt.city}</p>
                    <div class="card-tags">
                        ${apt.smoking ? '<span>Mozna palić</span>' : ''}
                        ${apt.pets ? '<span>Mozna mieć zwierzęta</span>' : ''}
                    </div>
                </div>
            </div>
        `).join('');
    }

    //filtracja
    function applyFilters() {
        const maxPrice = parseInt(sidePrice.value);
        
        //sidebar cena
        if (priceVal) priceVal.textContent = maxPrice;

        const filtered = apartments.filter(apt => {
            // filtry po miastu
            const matchCity = cityFromUrl === "" || apt.city.toLowerCase().includes(cityFromUrl);
            
            // filtry po cenie
            const matchPrice = apt.price <= maxPrice;
            
            // filtry smoking
            const matchSmoking = !filterSmoking.checked || apt.smoking === true;
            
            // filter zwierzata
            const matchPets = !filterPets.checked || apt.pets === true;

            return matchCity && matchPrice && matchSmoking && matchPets;
        });

        renderResults(filtered);
    }

    
    if (sidePrice) sidePrice.addEventListener('input', applyFilters);
    if (filterSmoking) filterSmoking.addEventListener('change', applyFilters);
    if (filterPets) filterPets.addEventListener('change', applyFilters);

    //reset
    if (resetBtn) {
        resetBtn.addEventListener('click', () => {
            sidePrice.value = sidePrice.max;
            filterSmoking.checked = false;
            filterPets.checked = false;
            applyFilters();
        });
    }

    
    applyFilters();
});