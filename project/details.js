document.addEventListener('DOMContentLoaded', () => {
    const params = new URLSearchParams(window.location.search);
    const id = params.get('id');
    const apt = apartments.find(a => a.id == id);

    if (apt) {
        document.getElementById('propertyTitle').textContent = apt.title;
        document.getElementById('mainImage').src = apt.img;
        document.getElementById('priceValue').textContent = apt.price;
        document.getElementById('propertyDesc').textContent = apt.desc;
        document.getElementById('propertyCity').textContent = apt.city;
        

        const accBtn = document.querySelector('.btn-account');
        if (accBtn) {
            accBtn.onclick = () => window.location.href = 'account.html';
        }
    }
});