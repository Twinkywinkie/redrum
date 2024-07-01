console.log("redrum")

document.getElementById('choice1').addEventListener('click', function() {
    document.getElementById('sceneImage').src = 'img/4.1.png';
    document.getElementById('storyText').innerText = 'De klok is stuk, waar zijn de wijzers?';
    
    document.getElementById('choice1').innerText = 'Kijk naar de grond';
    document.getElementById('choice2').innerText = 'Kijk op je telefoon';
    document.getElementById('choice3').innerText = 'Kijk naar buiten';
});

document.getElementById('choice2').addEventListener('click', function() {
    document.getElementById('sceneImage').src = 'img/5.1.png';
    document.getElementById('storyText').innerText = 'Is mijn telefoon stuk, hoe kan dit?';
    
    document.getElementById('choice1').innerText = 'Kijk op de klok';
    document.getElementById('choice2').innerText = 'Loop het lokaal uit';
    document.getElementById('choice3').innerText = 'Kijk naar buiten';
});

document.getElementById('choice3').addEventListener('click', function() {
    document.getElementById('sceneImage').src = 'img/6.png';
    document.getElementById('storyText').innerText = 'Hoe is het zo donker buiten? Ik kan niks zien.';
    
    document.getElementById('choice1').innerText = 'Pak je telefoon';
    document.getElementById('choice2').innerText = 'Kijk op de klok';
    document.getElementById('choice3').innerText = 'Loop het lokaal uit';
});

// bronnen :
//https://youtu.be/PBcqGxrr9g8?si=RcryTVEwYKPMV5H5 
//https://www.w3schools.com/jsref/met_document_createelement.asp,
//https://www.w3schools.com/jsref/met_node_appendchild.asp,
//https://www.w3schools.com/jsref/met_element_addeventlistener.asp
//https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_document_createelement3, 
//https://www.w3schools.com/jsref/dom_obj_document.asp, hier heb ik vooral gebruik gemaakt van de HTML Dom onderwerpen en de rest van de tutorials bekeken.
// https://www.w3schools.com/js/js_if_else.asp, hier heb ik meer informatie over de if else statments gezocht
// ook heb ik soms vragen gesteld aan chat GPT als ik ergens niet uit kwam, dit heb ik op de manier gedaan die je op de foto in de pdf kan zien.
