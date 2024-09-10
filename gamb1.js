function losuj() {
    // Losowanie liczby 1 lub 2
    const wynik = Math.floor(Math.random() * 2) + 1;
    // Wyświetlenie wyniku
    document.getElementById("wynik").innerHTML = "Obstaw na drużynę: " + wynik;
}