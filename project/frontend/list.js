document.addEventListener('DOMContentLoaded', () => {
    // 1. Посилання на елементи (згідно з новою версткою)
    const grid = document.getElementById('listingsGrid');
    const priceRange = document.getElementById('priceRange');
    const priceValue = document.getElementById('priceValue');
    const smokingFilter = document.getElementById('smokingFilter');
    const petsFilter = document.getElementById('petsFilter');
    const resetBtn = document.getElementById('resetFiltersBtn');
    const accountBtn = document.querySelector('.btn-account'); // Кнопка акаунту

    let allApartments = [];

    // 2. Логіка кнопки "Konto"
    if (accountBtn) {
        accountBtn.addEventListener('click', () => {
            // Можеш змінити на 'login.html' або 'profile.html'
            window.location.href = 'account.html'; 
        });
    }

    // 3. Оновлення ціни при русі повзунка
    if (priceRange) {
        priceRange.addEventListener('input', (e) => {
            priceValue.textContent = `${e.target.value} PLN`;
            applyFilters(); // Фільтруємо відразу, як на професійних сайтах
        });
    }

    // 4. Додаємо слухачі на чекбокси (щоб фільтрувалося миттєво)
    [smokingFilter, petsFilter].forEach(filter => {
        if (filter) filter.addEventListener('change', applyFilters);
    });

    // 5. Функція створення картки (точно як на фото 2)
    function createCard(apt) {
        return `
            <div class="property-card" onclick="location.href='details.html?id=${apt.id}'">
                <div class="card-image">
                    <img src="${apt.img}" alt="${apt.title}" onerror="this.src='https://via.placeholder.com/400x300?text=Brak+zdjęcia'">
                    <div class="card-price-tag">${apt.price} PLN</div>
                </div>
                <div class="card-content">
                    <div class="title-row">
                        <h3>${apt.title}</h3>
                        <span class="rating">★ 4.9</span>
                    </div>
                    <p class="card-info">Palenie jest ${apt.smoking ? 'dozwolone' : 'zabronione'}</p>
                    <p class="card-info">Zwierzęta są ${apt.pets ? 'akceptowane' : 'nie akceptowane'}</p>
                    <p class="card-info" style="color: #fff; margin-top: 10px; font-weight: 500;">📍 ${apt.city}</p>
                </div>
            </div>
        `;
    }

    // 6. Завантаження даних
    async function loadData() {
        try {
            const response = await fetch('http://localhost:3000/api/apartments');
            if (!response.ok) throw new Error("Błąd serwera");
            
            allApartments = await response.json();
            applyFilters(); // Виводимо кімнати після завантаження
        } catch (error) {
            console.error("Помилка:", error);
            if (grid) grid.innerHTML = `<p style="color: white;">Błąd połączenia з Node.js!</p>`;
        }
    }

    // 7. Функція фільтрації
    function applyFilters() {
        const maxPrice = parseInt(priceRange.value);
        const wantsSmoking = smokingFilter.checked;
        const wantsPets = petsFilter.checked;

        // Отримуємо місто з URL (якщо ти прийшов з головної)
        const params = new URLSearchParams(window.location.search);
        const cityFilter = params.get('city');

        let filtered = allApartments.filter(apt => {
            const matchPrice = apt.price <= maxPrice;
            const matchSmoking = wantsSmoking ? apt.smoking === true : true;
            const matchPets = wantsPets ? apt.pets === true : true;
            const matchCity = cityFilter ? apt.city.toLowerCase().includes(cityFilter.toLowerCase()) : true;
            
            return matchPrice && matchSmoking && matchPets && matchCity;
        });

        renderList(filtered);
    }

    // 8. Вивід на екран
    function renderList(data) {
        if (!grid) return;
        if (data.length === 0) {
            grid.innerHTML = '<p style="color: #888;">Brak ofert spełniających kryteria.</p>';
        } else {
            grid.innerHTML = data.map(apt => createCard(apt)).join('');
        }
    }

    // 9. Кнопка скидання
    if (resetBtn) {
        resetBtn.addEventListener('click', () => {
            priceRange.value = 1000;
            priceValue.textContent = "1000 PLN";
            smokingFilter.checked = false;
            petsFilter.checked = false;
            // Очищуємо місто з URL без перезавантаження
            window.history.pushState({}, '', window.location.pathname);
            applyFilters();
        });
    }

    loadData();
});