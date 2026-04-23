document.addEventListener('DOMContentLoaded', () => {

    const registerForm = document.querySelector('.login-form');

    if (registerForm) {
        registerForm.addEventListener('submit', (e) => {
            e.preventDefault();
            

            const userData = {
                firstName: document.getElementById('firstName').value,
                lastName: document.getElementById('lastName').value,
                email: document.getElementById('emailInput').value,
                password: document.getElementById('passwordInput').value 
            };

            localStorage.setItem('userVindo', JSON.stringify(userData));
            
         
            window.location.href = 'main.html'; 
        });
    } else {
        console.error("Error: Nie znaleziono formularza rejestracji.");
    }


    //account logic 
    const displayFullName = document.getElementById('displayFullName');
    if (displayFullName) {
        const savedData = localStorage.getItem('userVindo');
        
        if (savedData) {
            const user = JSON.parse(savedData);
            
            //textowy kontent
            if (document.getElementById('displayFullName')) {
                document.getElementById('displayFullName').textContent = `${user.firstName} ${user.lastName}`;
            }
            if (document.getElementById('displayEmail')) {
                document.getElementById('displayEmail').textContent = user.email;
            }
            
           // ikonka avatara
            const avatar = document.querySelector('.avatar-large');
            if (avatar && user.firstName && user.lastName) {
                avatar.textContent = (user.firstName[0] + user.lastName[0]).toUpperCase();
            }
        } else {
            console.log("Nie znaleziono danych użytkownika w localStorage.");
        }
    }
});