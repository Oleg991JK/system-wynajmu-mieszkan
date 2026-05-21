# 1. Vindo.com — Rental Marketplace MVP

# 2. Opis projektu
**Vindo.com** to nowoczesna platforma typu Fullstack służąca do przeglądania i rezerwacji ofert wynajmu mieszkań. Projekt łączy dynamiczny interfejs użytkownika (Frontend) z autorskim serwerem (Backend), umożliwiając płynne wyszukiwanie ofert oraz symulację procesu płatności. Projekt został stworzony jako demonstracja umiejętności budowania aplikacji typu Single Page Application (SPA) z komunikacją asynchroniczną.
---

##  Jak uruchomić projekt na komputerze

### Krok 1: Pobierz pliki projektu
1. Pobierz ten projekt jako plik ZIP (kliknij zielony przycisk **"Code"** na górze strony, a następnie **"Download ZIP"**).
2. Rozpakuj pobrany plik na swój dysk (np. na Pulpit).

### Krok 2: Przygotuj dostęp do bazy danych
1. W głównym folderze projektu utwórz zwykły plik tekstowy i nazwij go: **`.env`**
2. Otwórz go (np. w Notatniku) i wklej tam link do bazy danych:
   ```env
   MONGO_URI=tutaj_wklej_link_do_mongodb_atlas
   PORT=3000
   
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
