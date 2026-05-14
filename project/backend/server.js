const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

const apartments = [
    { 
        id: 1, 
        title: "Hotel Stare Miasto", 
        city: "Warszawa", 
        price: 245, 
        img: "https://images.unsplash.com/photo-1566073771259-6a8506099945",
        pets: true,
        smoking: false 
    },
    { 
        id: 2, 
        title: "Studio Centrum", 
        city: "Kraków", 
        price: 310, 
        img: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267",
        pets: true,
        smoking: true 
    },
    { 
        id: 3, 
        title: "Luksusowy Dom", 
        city: "Warszawa", 
        price: 850, 
        img: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750",
        pets: false,
        smoking: false 
    },
    { 
        id: 4, 
        title: "Tani Pokój", 
        city: "Wrocław", 
        price: 120, 
        img: "https://images.unsplash.com/photo-1598928506311-c55ded91a20c",
        pets: true,
        smoking: true 
    },
    { 
        id: 5, 
        title: "Hostel B2B", 
        city: "Lublin", 
        price: 80, 
        img: "https://images.unsplash.com/photo-1555854817-5b2260d50c63",
        pets: false,
        smoking: false 
    },
    { 
        id: 6, 
        title: "Travellers", 
        city: "Lublin", 
        price: 400, 
        img: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688",
        pets: true,
        smoking: true 
    }
];

app.get('/api/apartments', (req, res) => {
    res.json(apartments);
});

app.listen(PORT, () => {
    console.log(` Serwer Vindo started athttp://localhost:${PORT}`);
});