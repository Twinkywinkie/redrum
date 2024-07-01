console.log("redrum")

//Leeftijd van de gebruiker
let leeftijd = prompt("Voer je leeftijd in: ");

if (isNaN(leeftijd)) {
    alert("Ongeldige invoer, voer een getal in");
    location.reload();
} else {
    if (leeftijd > 16) {
        alert("Welkom bij [redrum]");
    } else {
        alert("Je moet minimaal 16 zijn om [redrum] te spelen");
        window.location.href = "te-jong.html";
    }
}

const scenes = {
    beginscherm: {
        image: 'img/redrum-logo-rood.png',
        story: 'Het is tijd voor een nieuwe schooldag',
        choices: [
            { text: 'Start', nextScene: 'start' }
        ]
    },
    start: {
        image: 'img/Start.png',
        story: 'De schooldag duurt al best lang, ik verveel me dood :(',
        choices: [
            { text: 'Probeer op te letten', nextScene: 'vervolg' },
            { text: 'Teken in je schrift', nextScene: 'vervolg' },
            { text: 'Staar voor je uit', nextScene: 'vervolg' }
        ]
    },
    vervolg: {
        image: 'img/Vervolg.png',
        story: 'Ik ben zo moe, ik val echt in slaap.',
        choices: [
            { text: '...', nextScene: '2' }
        ]
    },
    2: {
        image: 'img/2.png',
        story: 'Zzzzzzzz',
        choices: [
            { text: 'Wakker worden', nextScene: '3' }

        ]
    },
    3: {
        image: 'img/3.png',
        story: 'Huh, iedereen is al weg. Waarom heeft niemand mij wakker gemaakt? En hoezo is het hier al zo donker, hoe laat is het?',
        choices: [
            { text: 'Kijk naar de klok', nextScene: '4.1' },
            { text: 'Pak je telefoon', nextScene: '5.1' },
            { text: 'Kijk naar buiten', nextScene: '6' }
        ]
    },
    4.1: {
        image: 'img/4.1.png',
        story: 'De klok is stuk, waar zijn de wijzers?',
        choices: [
            { text: 'Kijk naar de grond', nextScene: '4.2' },
            { text: 'Kijk op je telefoon', nextScene: '5.1' },
            { text: 'Kijk naar buiten', nextScene: '6' }
        ]
    },
    4.2: {
        image: 'img/4.2.png',
        story: 'Pootafdrukken van een dier? en ze lopen tot de deur van het lokaal, wat vreemd.',
        choices: [
            { text: 'Loop het lokaal uit', nextScene: '5.2' }

        ]
    },
    5.1: {
        image: 'img/5.1.png',
        story: 'Is mijn telefoon stuk, hoe kan dit?',
        choices: [
            { text: 'Kijk op de klok', nextScene: '4.1' },
            { text: 'Loop het lokaal uit', nextScene: '5.2' },
            { text: 'Kijk naar buiten', nextScene: '6' }
        ]
    },
    5.2: {
        image: 'img/5.2.png',
        story: 'Er is echt niemand ...',
        choices: [
            { text: 'Kijk in een ander lokaal', nextScene: '5.3' },
            { text: 'Ga naar de wc', nextScene: '5.4' },
            { text: 'Ga naar de uitgang', nextScene: '5.5' }
        ]
    },
    5.3: {
        image: 'img/5.3.png',
        story: 'Dit lokaal is ook leeg, maar er loopt een soort spoor naar het bureau.',
        choices: [
            { text: 'Kijk in de lade van het bureau', nextScene: '5.31' },
            { text: 'Ga naar de wc', nextScene: '5.4' },
            { text: 'Ga naar de uitgang', nextScene: '5.5' }
        ]
    },
    5.31: {
        image: 'img/5.31.png',
        story: 'Wat is dat onder de papieren?',
        choices: [
            { text: 'Haal de papieren uit de lade om het beter te zien.', nextScene: '5.32' },
            { text: 'Doe de lade weer dicht', nextScene: '5.34' },
            { text: 'Loop het lokaal weer uit', nextScene: '5.33' }
        ]
    },
    5.32: {
        image: 'img/5.32.png',
        story: 'Is dat nou een pentagram???',
        choices: [
            { text: '......', nextScene: '5.34' }
        ]
    },
    5.33: {
        image: 'img/5.33.png',
        story: 'Je loopt richting de deur, maar opeens voel je een steek in je rug',
        choices: [
            { text: '.....', nextScene: 'Einde1' }
        ]
    },
    5.34: {
        image: 'img/5.34.png',
        story: 'Je voelt een hand op je rug',
        choices: [
            { text: 'Draai je om', nextScene: '5.35' }
        ]
    },
    5.35: {
        image: 'img/5.35.png',
        story: 'AAAAAAAAHHHHH',
        choices: [
            { text: '......', nextScene: 'Einde1' }
        ]
    },
    5.4: {
        image: 'img/5.4.png',
        story: 'Hier is ook niemand, maar is de spiegel nou gebroken?',
        choices: [
            { text: 'Kijk beter in de spiegel', nextScene: '5.41' },
            { text: 'Kijk achter de spiegel', nextScene: '5.42' },
            { text: 'Kijk in een hokje', nextScene: '5.43' }
        ]
    },
    5.41: {
        image: 'img/5.41.png',
        story: 'WTF IS DAT???!!!!',
        choices: [
            { text: '......', nextScene: 'Einde2' }
        ]
    },
    5.42: {
        image: 'img/5.42.png',
        story: 'Is dit een tunnel naar buiten?',
        choices: [
            { text: 'Kruip door de tunnel', nextScene: '5.44' }
        ]
    },
    5.43: {
        image: 'img/5.43.png',
        story: 'Is dat nou bloed op de muur?',
        choices: [
            { text: '......', nextScene: '5.45' }
        ]
    },
    5.44: {
        image: 'img/5.44.png',
        story: 'Je voet blijft ergens aan hangen.',
        choices: [
            { text: 'Probeer je voet los te trekken', nextScene: '5.46' }
        ]
    },
    5.45: {
        image: 'img/5.45.png',
        story: 'Je hoort voetsappen achter je.',
        choices: [
            { text: 'Draai je snel om', nextScene: '5.47' }
        ]
    },
    5.46: {
        image: 'img/5.46.png',
        story: 'Je word opeens heel hard terug getrokken.',
        choices: [
            { text: '......', nextScene: 'Einde2' }
        ]
    },
    5.47: {
        image: 'img/5.47.png',
        story: 'WTF IS DAT???!!!!',
        choices: [
            { text: '......', nextScene: 'Einde2' }
        ]
    },
    5.5: {
        image: 'img/5.5.png',
        story: 'Huh waarom zit er een hangslot om de deur?',
        choices: [
            { text: 'Probeer het los te trekken', nextScene: '5.53' },
            { text: 'Zoek naar de sleutel op de grond', nextScene: '5.51' },
            { text: 'Ga naar het hok van de conciërge', nextScene: '5.52' }
        ]
    },
    5.51: {
        image: 'img/5.51.png',
        story: 'Wow, daar ligt de sleutel',
        choices: [
            { text: 'probeer het slot open te maken', nextScene: '5.53' }
        ]
    },
    5.52: {
        image: 'img/5.52.png',
        story: 'Daar ligt een breekijzer, daar moet het wel mee lukken.',
        choices: [
            { text: 'Pak het breekijzer', nextScene: '5.54' }
        ]
    },
    5.53: {
        image: 'img/5.53.png',
        story: 'Je voelt een hand op je rug, terwijl je het slot los probeert te krijgen',
        choices: [
            { text: '......', nextScene: 'Einde3' }
        ]
    },
    5.54: {
        image: 'img/5.54.png',
        story: 'Het licht gaat uit en je hoort de deur dicht klappen',
        choices: [
            { text: 'Draai je om', nextScene: '5.55' }
        ]
    },
    5.55: {
        image: 'img/5.55.png',
        story: 'WIE IS DAAR????',
        choices: [
            { text: '.......', nextScene: '5.56' }
        ]
    },
    5.56: {
        image: 'img/5.56.png',
        story: 'HET KOMT STEEDS DICHTERBIJ!!!',
        choices: [
            { text: '.......', nextScene: 'Einde4' }
        ]
    },
    6: {
        image: 'img/6.png',
        story: 'Hoe is het zo donker buiten? Ik kan niks zien.',
        choices: [
            { text: 'Pak je telefoon', nextScene: '5.1' },
            { text: 'Kijk op de klok', nextScene: '4.1' },
            { text: 'Loop het lokaal uit', nextScene: '5.2' }
        ]
    },
    Einde1: {
        image: 'img/Einde1.png',
        story: 'Je bent dood',
        choices: [
            { text: 'Probeer opnieuw', nextScene: 'start' }
        ]
    },
    Einde2: {
        image: 'img/Einde2.png',
        story: 'Je bent dood',
        choices: [
            { text: 'Probeer opnieuw', nextScene: 'start' }
        ]
    },
    Einde3: {
        image: 'img/Einde3.png',
        story: 'Je bent dood',
        choices: [
            { text: 'Probeer opnieuw', nextScene: 'start' }
        ]
    },
    Einde4: {
        image: 'img/Einde4.png',
        story: 'Je bent dood',
        choices: [
            { text: 'Probeer opnieuw', nextScene: 'start' }
        ]
    },

};

// dit is een functie die een scene laat zien door gebruik te maken van de sceneName
function showScene(sceneName) {
    const scene = scenes[sceneName];
    document.querySelector('#sceneImage').src = scene.image;
    document.querySelector('#storyText').innerText = scene.story;
    const choicesElement = document.querySelector('#choices');
    choicesElement.innerHTML = ''; // deze regel wist de bestaande knoppen
    //de regels hier onder maken nieuwe knoppen bij iedere scene
    scene.choices.forEach(choice => {
        const button = document.createElement('button'); // Maak een nieuw <button> element
        button.innerText = choice.text; // veranderd de tekst in de knop naar de tekst bij de choises
        // door te klikken op de button ga je naar de volgende scene die naast de button staat aangegeven
        button.addEventListener('click', () => showScene(choice.nextScene));
        choicesElement.appendChild(button); // Zo voeg je de knoppen steeds toe aan de html
    });
}

// zo weet het spel waar de code begint
showScene('beginscherm');






// bronnen : 
//https://youtu.be/PBcqGxrr9g8?si=RcryTVEwYKPMV5H5
//https://www.w3schools.com/jsref/met_document_createelement.asp,
//https://www.w3schools.com/jsref/met_node_appendchild.asp,
//https://www.w3schools.com/jsref/met_element_addeventlistener.asp
//https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_document_createelement3, 
//https://www.w3schools.com/jsref/dom_obj_document.asp, hier heb ik vooral gebruik gemaakt van de HTML Dom onderwerpen en de rest van de tutorials bekeken.
// https://www.w3schools.com/js/js_if_else.asp, hier heb ik meer informatie over de if else statments gezocht
// ook heb ik soms vragen gesteld aan chat GPT als ik ergens niet uit kwam, dit heb ik op de manier gedaan die je op de foto in de pdf kan zien.

