console.log("redrum")

const storyElement = document.getElementById('story');
const choicesElement = document.getElementById('choices');

let currentScene = 'start';

const scenes = {
    start: {
        image: '',
        story: 'De schooldag duurt al best lang, ik verveel me dood :(',
        choices: [
            { text: 'Probeer op te letten', nextScene: 'vervolg' },
            { text: 'Teken in je schrift', nextScene: 'vervolg' },
            { text: 'Staar voor je uit', nextScene: 'vervolg' }
        ]
    },
    vervolg: {
        image: '',
        story: 'Ik ben zo moe, ik val echt in slaap.',
        choices: [
            { text: '...', nextScene: '2' }
        ]
    },
    2: {
        image: '',
        story: 'Zzzzzzzz',
        choices: [
            { text: 'Wakker worden', nextScene: '3' }

        ]
    },
    3: {
        image: '',
        story: 'Huh, iedereen is al weg. Waarom heeft niemand mij wakker gemaakt? En hoezo is het hier al zo donker, hoe laat is het?',
        choices: [
            { text: 'Kijk naar de klok', nextScene: '4.1' },
            { text: 'Pak je telefoon', nextScene: '5.1' },
            { text: 'Kijk naar buiten', nextScene: '6' }
        ]
    },
    4.1: {
        image: '',
        story: 'De klok is stuk, waar zijn de wijzers?',
        choices: [
            { text: 'Kijk op de grond', nextScene: '4.2' },
            { text: 'Kijk op je telefoon', nextScene: '5.1' },
            { text: 'Kijk naar buiten', nextScene: '6' }
        ]
    },
    4.2: {
        image: '',
        story: 'Pootafdrukken van een dier? en ze lopen tot de deur van het lokaal, wat vreemd.',
        choices: [
            { text: 'Loop het lokaal uit', nextScene: '5.2' }

        ]
    },
    5.1: {
        image: '',
        story: 'Is mijn telefoon stuk, hoe kan dit?',
        choices: [
            { text: 'Kijk op de klok', nextScene: '4.1' },
            { text: 'Loop het lokaal uit', nextScene: '5.2' },
            { text: 'Kijk naar buiten', nextScene: '6' }
        ]
    },
    5.2: {
        image: '',
        story: 'Er is echt niemand ...',
        choices: [
            { text: 'Kijk in een ander lokaal', nextScene: '5.3' },
            { text: 'Ga naar de wc', nextScene: '5.4' },
            { text: 'Ga naar de uitgang', nextScene: '5.5' }
        ]
    },
    5.3: {
        image: '',
        story: 'Dit lokaal is ook leeg, maar er loopt een soort spoor naar het bureau.',
        choices: [
            { text: 'Kijk in de lade van het bureau', nextScene: '5.31' },
            { text: 'Ga naar de wc', nextScene: '5.4' },
            { text: 'Ga naar de uitgang', nextScene: '5.5' }
        ]
    },
    5.31: {
        image: '',
        story: 'Wat is dat onder de papieren?',
        choices: [
            { text: 'Haal de papieren uit de lade om het beter te zien.', nextScene: '5.32' },
            { text: 'Doe de lade weer dicht', nextScene: '5.34' },
            { text: 'Loop het lokaal weer uit', nextScene: '5.33' }
        ]
    },
    5.32: {
        image: '',
        story: 'Is dat nou een pentagram???',
        choices: [
            { text: '......', nextScene: '5.34' }
        ]
    },    
    5.33: {
        image: '',
        story: 'Je loopt richting de deur, maar opeens voel je een steek in je rug',
        choices: [
            { text: '.....', nextScene: 'Einde1' }
        ]
    },
    5.34: {
        image: '',
        story: 'Je voelt een hand op je rug',
        choices: [
            { text: 'Draai je om', nextScene: '5.35' }
        ]
    },
    5.35: {
        image: '',
        story: 'AAAAAAAAHHHHH',
        choices: [
            { text: '......', nextScene: 'Einde1' }
        ]
    },
    5.4: {
        image: '',
        story: 'Hier is ook niemand, maar is de spiegel nou gebroken?',
        choices: [
            { text: 'Kijk beter in de spiegel', nextScene: '5.41' },
            { text: 'Kijk achter de spiegel', nextScene: '5.42' },
            { text: 'Kijk in een hokje', nextScene: '5.43' }
        ]
    },
    5.41: {
        image: '',
        story: 'WTF IS DAT???!!!!',
        choices: [
            { text: '......', nextScene: 'Einde2' }
        ]
    },
    5.42: {
        image: '',
        story: 'Is dit een tunnel naar buiten?',
        choices: [
            { text: 'Kruip door de tunnel', nextScene: '5.44' }
        ]
    },
    5.43: {
        image: '',
        story: 'Is dat nou bloed op de muur?',
        choices: [
            { text: '......', nextScene: '5.45' }
        ]
    },
    5.44: {
        image: '',
        story: 'Je voet blijft ergens aan hangen.',
        choices: [
            { text: 'Probeer je voet los te trekken', nextScene: '5.46' }
        ]
    },
    5.45: {
        image: '',
        story: 'Je hoort voetsappen achter je.',
        choices: [
            { text: 'Draai je snel om', nextScene: '5.47' }
        ]
    },
    5.46: {
        image: '',
        story: 'Je word opeens heel hard terug getrokken.',
        choices: [
            { text: '......', nextScene: 'Einde2' }
        ]
    },
    5.47: {
        image: '',
        story: 'WTF IS DAT???!!!!',
        choices: [
            { text: '......', nextScene: 'Einde2' }
        ]
    },
    5.5: {
        image: '',
        story: 'Huh waarom zit er een hangslot om de deur?',
        choices: [
            { text: 'Probeer het los te trekken', nextScene: '5.53' },
            { text: 'Zoek naar de sleutel op de grond', nextScene: '5.51' },
            { text: 'Ga naar het hok van de conciërge', nextScene: '5.52' }
        ]
    },
    5.51: {
        image: '',
        story: 'Wow, daar ligt de sleutel',
        choices: [
            { text: 'probeer het slot open te maken', nextScene: '5.53' }
        ]
    },
    5.52: {
        image: '',
        story: 'Daar ligt een breekijzer, daar moet het wel mee lukken.',
        choices: [
            { text: 'Pak het breekijzer', nextScene: '5.54' }
        ]
    },
    5.53: {
        image: '',
        story: 'Je voelt een hand op je rug, terwijl je het slot los probeert te krijgen',
        choices: [
            { text: '......', nextScene: 'Einde3' }
        ]
    },
    5.54: {
        image: 'Het licht gaat uit en je hoort de deur dicht klappen',
        story: '',
        choices: [
            { text: 'Draai je om', nextScene: '1' }
        ]
    },
    5.55: {
        image: '',
        story: 'WIE IS DAAR????',
        choices: [
            { text: '.......', nextScene: '5.56' }
        ]
    },
    5.56: {
        image: '',
        story: 'HET KOMT STEEDS DICHTERBIJ!!!',
        choices: [
            { text: '.......', nextScene: 'Einde4' }
        ]
    },
    6: {
        image: '',
        story: 'Hoe is het zo donker buiten? Ik kan niks zien.',
        choices: [
            { text: 'Pak je telefoon', nextScene: '5.1' },
            { text: 'Kijk op de klok', nextScene: '4.1' },
            { text: 'Loop het lokaal uit', nextScene: '5.2' }
        ]
    },
    Einde1: {
        image: '',
        story: 'Je ben dood',
        choices: [
            { text: 'Probeer opnieuw', nextScene: 'start' }
        ]
    },
    Einde2: {
        image: '',
        story: 'Je ben dood',
        choices: [
            { text: 'Probeer opnieuw', nextScene: 'start' }
        ]
    },
    Einde3: {
        image: '',
        story: 'Je ben dood',
        choices: [
            { text: 'Probeer opnieuw', nextScene: 'start' }
        ]
    },
    Einde4: {
        image: '',
        story: 'Je ben dood',
        choices: [
            { text: 'Probeer opnieuw', nextScene: 'start' }
        ]
    },

};

function renderScene(scene) {
    const sceneImage = document.getElementById('sceneImage');
    sceneImage.src = scene.image;

    const storyText = document.getElementById('storyText');
    storyText.innerText = scene.story;

    choicesElement.innerHTML = '';
    scene.choices.forEach(choice => {
        const button = document.createElement('button');
        button.innerText = choice.text;
        button.addEventListener('click', () => goToScene(choice.nextScene));
        choicesElement.appendChild(button);
    });
}

function goToScene(sceneName) {
    currentScene = sceneName;
    renderScene(scenes[sceneName]);
}

// Start het spel
goToScene(currentScene);