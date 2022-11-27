// Met document.getElementById() halen we een element op, op basis van het ID.
// Vervolgens 'onthouden' we dat element door het in een constante te steken.
const formulier = document.getElementById("formulier");
const getalInput = document.getElementById("getal");
const boodschapSpan = document.getElementById("boodschap");

// Een input biedt heel wat events aan, zoals 'input' en 'change'. 
// 'input' gaat direct af bij elke verandering in het input veld, 'change' gaat enkel af wanneer je het input veld verlaat.
// Voor deze oefeninge is het 'input' event beter.
getalInput.addEventListener("input", function() {    
    // De test hier is op een truthy/false value: als er geen getal is ingevuld in de input box dan zal value de lege string "" teruggeven.
    // Een lege string is 'falsy' -> in dat geval zal de else tak uitgevoerd worden.
    if (getalInput.value) {
        // % is de modulo operator: het berekent de rest bij deling.
        // Een getal is uiteraard even als het deelbaar is door 2 (rest is dan 0).
        // Bemerk dat we een parseInt() doen van getalInput.value, dat is omdat value steeds van het type string is.
        // Met parseInt() zetten we die string expliciet om naar een number.
        if (parseInt(getalInput.value) % 2 === 0) {
            boodschapSpan.innerText = "Het getal is even";
            // We hadden hier ook direct de style van de span kunnen aanpassen via 'style':
            // Vb: boodschapSpan.style.color = "green"; 
            // Maar dat is minder clean: alle beslissingen over de stijl zouden in het CSS bestand moeten staan.
            // Vandaar werd er geopteerd om een CSS class te definieren die we dan hier op het element zetten via className.
            // Zo kan een web designer later beslissen om de kleur aan te passen en moeten wij onze code niet aanraken.
            boodschapSpan.className = "even";
        } else {
            boodschapSpan.className = "oneven";
            boodschapSpan.innerText = "Het getal is oneven";
        }
    } else {
        boodschapSpan.className = "";
        boodschapSpan.innerText = "Gelieve een getal in te voeren";
    }
});

// Door te luisteren naar het 'submit' event van het formulier kunnen we de browser tegenhouden om een postback te doen 
// (en de pagina te refreshen). Dit doen we door een aanroep van de methode preventDefault() op het event object.
// (Elk event dat 'gebeurt' wordt voorgesteld door een event object.)
formulier.addEventListener("submit", function(e) {
    e.preventDefault();
})