System wynajmu mieszkań

Opis projektu

•	Co robi aplikacja: Aplikacja umożliwia użytkownikom przeglądanie ofert oraz dokonywanie rezerwacji mieszkań online.
•	Dla kogo jest: System jest przeznaczony dla osób szukających zakwaterowania (najemców) 
•	Jaki problem rozwiązuje: Projekt rozwiązuje problem trudnego i czasochłonnego procesu rezerwacji, oferując intuicyjny interfejs do sprawdzania dostępności miejsc w czasie rzeczywistym.
Sprint plan
•	Sprint 1 | Cel (Kamień milowy): Project setup, Design prototype, Logo | Done
•	Sprint 2 | Cel (Kamień milowy): User log/reg page, Konto panel, Apartment listing page, Filtracja mieszkań | Done
•	Sprint 3 | Cel (Kamień milowy): Frontend & Backend setup, Apartment details page | In Progress
•	Sprint 4 | Cel (Kamień milowy): Testowanie logowania, filtracji oraz dodawania miast i dat | In test

Autorzy
•	Oleh Hrushko (Oleg991JK) — Frontend, system logowania i filtracji, lista mieszkan, panel konta
•	Roman Honcharuk (2MIDIA3) — Prototypowanie, testy funkcjonalne, baza danych
•	Tamirlan Ualikhan (dirolfx228) — Widoki mieszkań, design logo i testy, Prezentacja
•	Nazar Shanhin (Liccentia) — Backend, logika systemowa, GitHub
Technologie
Frontend:
•	HTML
•	CSS
•	JavaScript
Backend:
•	Node.js
•	Express
Baza danych:
•	MongoDB



Funkcjonalności:
•	Rejestracja użytkownika – umożliwia stworzenie nowego konta w systemie.
•	Logowanie – bezpieczny dostęp do profilu użytkownika.
•	Zarządzanie profilem – edycja danych użytkownika i widok panelu konta.
•	Tworzenie rezerwacji – proces wybierania i rezerwowania dostępnych mieszkań lub hoteli.

Architektura
Projekt opiera się na modelu klient-serwer:
•	Frontend: Statyczne pliki HTML i CSS odpowiadające za interfejs użytkownika.
•	Logika po stronie klienta: Pliki JavaScript (np. main.js, search.js) obsługujące interakcje i komunikację z API.
•	Backend: Serwer Node.js przetwarzający logikę biznesową oraz zapytania do bazy danych MongoDB.
•	Komunikacja: Wymiana danych między frontendem a backendem odbywa się za pomocą standardu REST.
Instalacja
1.	Sklonuj repozytorium:
git clone https://github.com/Oleg991JK/system-wynajmu-mieszkan.git
2.	Przejdź do katalogu projektu:
cd system-wynajmu-mieszkan/project
3.	Zainstaluj wymagane pakiety:
npm install
4.	Uruchom projekt
Uruchomienie aplikacji
1.	Pobierz repozytorium:
Bash
git clone https://github.com/Oleg991JK/system-wynajmu-mieszkan.git
2.	Uruchomienie lokalne: Ponieważ projekt opiera się na plikach statycznych, wystarczy otworzyć plik main.html lub index.html bezpośrednio w przeglądarce internetowej.

Instrukcja użytkownika
1.	Otwórz plik main.html w swojej przeglądarce.
2.	Na stronie głównej możesz przeglądać dostępne oferty mieszkań.
3.	Skorzystaj z wyszukiwarki, aby filtrować oferty (za logikę odpowiada script.js).
4.	Przejdź do zakładki account.html, aby zarządzać swoim profilem.
5.	Wybierz konkretną ofertę, aby zobaczyć szczegóły w list.html.

Struktura projektu
•	Pliki HTML: main.html (strona główna), account.html (profil), index.html, list.html.
•	Style CSS: style.css, list-style.css, account.css, search-style.css (odpowiadają za wygląd poszczególnych modułów).
•	Logika JavaScript: main.js search.js auth.js data.js detail.js Zasoby: Pliki .jpg oraz .svg (obrazy pokoi i logotypy).
API / Logika
•	Filtracja: Obsługiwana lokalnie w pliku script.js na podstawie danych wejściowych użytkownika.
•	Autoryzacja: Prosta weryfikacja danych logowania zaimplementowana w logice klienckiej.
Status projektu
Projekt w trakcie intensywnego rozwoju (wersja Beta). Wszystkie podstawowe widoki (HTML/CSS) zostały zaimplementowane.

Licencja
Projekt edukacyjny – realizowany w ramach zajęć akademickich 2026.
