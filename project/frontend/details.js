document.addEventListener('DOMContentLoaded', async () => {
    // === 1. Отримання даних про квартиру ===
    const params = new URLSearchParams(window.location.search);
    const idFromUrl = params.get('id');

    if (!idFromUrl) {
        window.location.href = 'list.html';
        return;
    }

    try {
        const response = await fetch('http://localhost:3000/api/apartments');
        const apartments = await response.json();

        // Шукаємо квартиру ( == дозволяє порівняти string та number)
        const apartment = apartments.find(a => a.id == idFromUrl);

        if (apartment) {
            updatePage(apartment);
        } else {
            document.body.innerHTML = "<h1 style='color:white; text-align:center; margin-top:50px;'>Oferta nie znaleziona</h1>";
        }
    } catch (error) {
        console.error("Błąd ładowania danych:", error);
    }

    // === 2. Логіка модального вікна оплати ===
    const modal = document.getElementById('paymentModal');
    const reserveBtn = document.querySelector('.btn-message-outline'); // Твоя кнопка "Zarezerwuj"
    const closeBtn = document.querySelector('.close-btn');
    const paymentForm = document.getElementById('paymentForm');
    const successMessage = document.getElementById('successMessage');
    const modalTitle = document.getElementById('modalTitle');

    // Відкриття модалки
    if (reserveBtn) {
        reserveBtn.addEventListener('click', (e) => {
            e.preventDefault(); // Запобігаємо стандартній поведінці
            const title = document.getElementById('detailTitle').textContent;
            modalTitle.textContent = title;
            modal.style.display = "block";
        });
    }

    // Закриття модалки при натисканні на "X"
    if (closeBtn) {
        closeBtn.onclick = () => {
            modal.style.display = "none";
        };
    }

    // Закриття модалки при натисканні поза вікном
    window.onclick = (event) => {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    };

    // Імітація процесу оплати
    if (paymentForm) {
        paymentForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const payBtn = document.getElementById('confirmPayBtn');
            payBtn.textContent = "Przetwarzanie...";
            payBtn.disabled = true;


            setTimeout(() => {
    
                paymentForm.style.display = "none";
                document.querySelector('.modal-content h2').style.display = "none";
                document.querySelector('.modal-content p').style.display = "none";
                successMessage.style.display = "block";
            }, 2000);
        });
    }
});


function updatePage(apt) {

    const elements = {
        img: document.getElementById('detailImg'),
        title: document.getElementById('detailTitle'),
        price: document.getElementById('detailPrice'),
        city: document.getElementById('detailCity'),
        features: document.getElementById('detailFeatures')
    };

    if (elements.img) elements.img.src = apt.img;
    if (elements.title) elements.title.textContent = apt.title;
    if (elements.price) elements.price.textContent = `${apt.price} PLN / mies.`;
    if (elements.city) elements.city.textContent = `📍 ${apt.city}`;

    // Переклад на польську для зручностей
    if (elements.features) {
        const pets = apt.pets ? "🐾 Zwierzęta są akceptowane" : "🚫 Bez zwierząt";
        const smoking = apt.smoking ? "🚬 Palenie jest dozwolone" : "🚫 Zakaz palenia";

        elements.features.innerHTML = `
            <li>${pets}</li>
            <li>${smoking}</li>
        `;
    }
}