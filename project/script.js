document.addEventListener('DOMContentLoaded', function() {
    
    
    const loginBtn = document.getElementById('btnLogin');
    if (loginBtn) {
        loginBtn.addEventListener('click', function(e) {
            e.preventDefault();
            const email = document.getElementById('emailInput').value;
            const name = document.getElementById('nameInput').value;
            const surname = document.getElementById('surnameInput').value;
            const phone = document.getElementById('phoneInput').value;
            const pass = document.getElementById('passwordInput').value;
            if (name === "Roman" && surname === "Honcharuk" && phone === "123456789" && email === "honchatuk2005@gmail.com" && pass === "123456") {
                window.location.href = 'main.html';
            } else {
                alert("Błędny e-mail lub hasło!");
            }
        });
    }

    
    const findBtn = document.getElementById('findBtn');
    if (findBtn) {
        findBtn.addEventListener('click', function() {
            const city = document.getElementById('locationInput').value;
            const checkIn = document.getElementById('checkInDate').value;
            const checkOut = document.getElementById('checkOutDate').value;

            if (!city) {
                alert("Wpisz lokalizację!");
                return;
            }

            //dany zapisany 
            localStorage.setItem('searchCity', city);
            localStorage.setItem('checkIn', checkIn);
            localStorage.setItem('checkOut', checkOut);
            localStorage.setItem('userMaxPrice', 1000); 

            
            window.location.href = 'list.html';
        });
    }

    
    const listingsGrid = document.getElementById('listingsGrid');
    if (listingsGrid) {
        const apartments = [
            { id: 1, title: "Hotel Stare Miasto", city: "Warszawa", price: 245, img: "room1.jpg", smoking: false, pets: true, rating: 4.9 },
            { id: 2, title: "Studio Centrum", city: "Kraków", price: 310, img: "room2.jpg", smoking: true, pets: false, rating: 4.7 },
            { id: 3, title: "Luksusowy Dom", city: "Warszawa", price: 850, img: "room4.jpg", smoking: false, pets: true, rating: 5.0 },
            { id: 4, title: "Tani Pokój", city: "Wrocław", price: 120, img: "room1.jpg", smoking: true, pets: true, rating: 4.2 },
            { id: 5, title: "Hostel B2B", city: "Lublin", price: 80, img: "room3.jpg", smoking: false, pets: false, rating: 3.1 },
            { id: 6, title: "Travellers", city: "Lublin", price: 400, img: "room3.jpg", smoking: true, pets: false, rating: 3.8 }
        ];

        const sidePrice = document.getElementById('sidePrice');
        const priceVal = document.getElementById('priceVal');
        const filterSmoking = document.getElementById('filterSmoking');
        const filterPets = document.getElementById('filterPets');
        const resetBtn = document.getElementById('resetFilters');

        
        let savedPrice = localStorage.getItem('userMaxPrice') || 1000;
        sidePrice.value = savedPrice;
        priceVal.innerText = savedPrice;

        function renderResults() {
            const maxP = parseInt(sidePrice.value);
            priceVal.innerText = maxP;

    const filtered = apartments.filter(apt => {
    
     let matchPrice = (apt.price <= maxP);

    
        let matchSmoking;
            if (filterSmoking.checked) {
                
                matchSmoking = apt.smoking; 
            } else {
                
                matchSmoking = true; 
            }

 
         let matchPets;
            if (filterPets.checked) {
                
                matchPets = apt.pets;
            } else {
                
                matchPets = true;
            }

    
            return matchPrice && matchSmoking && matchPets;
});

listingsGrid.innerHTML = filtered.map(apt => {
   
    let smokingText;
    if (apt.smoking) {
        smokingText = " Palenie jest dozwolone";
    } else {
        smokingText = " Palenie jest zabronione";
    }

    let petsText;
    if (apt.pets) {
        petsText = " Zwierzęta są akceptowane";
    } else {
        petsText = " Zwierzęta nie są akceptowane";
    }

    
    return `
        <div class="card">
            <div class="card-image-wrapper">
                <img src="${apt.img}" class="card-img" ">
                <div class="price-badge-card">${apt.price} PLN</div>
            </div>
            <div class="card-content">
                <div class="card-header">
                    <h3 class="card-title">${apt.title}</h3>
                    <span class="rating">★ ${apt.rating}</span>
                </div>
                
                <p class="desc">${smokingText}</p>
                <p class="desc">${petsText}</p>
                
                <p class="loc"> ${apt.city}</p>
            </div>
        </div>
    `;
}).join('');
        }

        sidePrice.addEventListener('input', renderResults);
filterSmoking.addEventListener('change', renderResults);
filterPets.addEventListener('change', renderResults);
        if(resetBtn) {
            resetBtn.addEventListener('click', () => {
                sidePrice.value = 1000;
                filterSmoking.checked = false;
                filterPets.checked = false;
                renderResults();
            });
        }
        renderResults();
    }
});