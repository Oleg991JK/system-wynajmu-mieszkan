# 1. Vindo.com — Rental Marketplace MVP

# 2. Opis projektu
**Vindo.com** to nowoczesna platforma typu Fullstack służąca do przeglądania i rezerwacji ofert wynajmu mieszkań. Projekt łączy dynamiczny interfejs użytkownika (Frontend) z autorskim serwerem (Backend), umożliwiając płynne wyszukiwanie ofert oraz symulację procesu płatności. Projekt został stworzony jako demonstracja umiejętności budowania aplikacji typu Single Page Application (SPA) z komunikacją asynchroniczną.
---

##  Instrukcja uruchomienia projektu (Lokalnie)

Aby uruchomić aplikację w środowisku lokalnym, należy wykonać poniższe kroki. Projekt wymaga zainstalowanego środowiska **Node.js** oraz połączenia z internetem w celu autoryzacji w bazie MongoDB Atlas.

### 1. Klonowanie repozytorium
Skopiuj projekt z repozytorium GitHub na swój komputer za pomocą terminala:
```bash
git clone [https://github.com/Oleg991JK/system-wynajmu-mieszkan.git](https://github.com/Oleg991JK/system-wynajmu-mieszkan.git)
cd system-wynajmu-mieszkan
### 2. Instalacja zależności
npm install
### 3. Konfiguracja zmiennych środowiskowych
PORT=3000
MONGO_URI=mongodb+srv://<username>:<password>@cluster0.abcde.mongodb.net/vindo_db
### 4. Uruchomienie aplikacji
npm start
### 5. Wyświetlenie w przeglądarce
Otwórz przeglądarkę internetową i przejdź pod adres:
 http://localhost:3000
   
# 3. Sprint plan
- [x] System logowania użytkowników
- [x] Projektowanie UI i struktury HTML/CSS.
- [x] Budowa serwera API w Node.js.
- [x] Integracja Fetch API dla dynamicznego ładowania danych.
- [x] Implementacja filtrów (cena, miasto, udogodnienia).
- [x] Stworzenie modułu płatności (Mock Payment).
- [x] Integracja z bazą danych MongoDB.

# 4. Autorzy
* **Oleh Hrushko
* **Nazar Shanhin
* **Roman Honcharuk
* **Tamirlan Ualikhan

# 5. Technologie
* **Frontend:** HTML5, CSS3 (Grid, Flexbox, Variables), JavaScript (ES6+).
* **Backend:** Node.js, Express.js.
* **Komunikacja:** REST API, Fetch API, JSON.


# 6. Funkcjonalności
* **Dynamiczny katalog:** Automatyczne generowanie kart mieszkań na podstawie danych z serwera.
* **Zaawansowane filtry:** Wyszukiwanie ofert według ceny (suwak), lokalizacji oraz akceptacji zwierząt/palenia.
* **Strony szczegółów:** Dynamiczne renderowanie informacji o obiekcie na podstawie ID z parametrów URL.
* **Symulacja płatności:** Interaktywny proces rezerwacji z walidacją karty i potwierdzeniem transakcji.

# 7. Architektura projektu
Aplikacja oparta jest na architekturze klient-serwer:
* **Klient (Frontend):** Odpowiada za prezentację danych i obsługę zdarzeń użytkownika.
* **Serwer (Backend):** Node.js/Express
