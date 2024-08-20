document.addEventListener("DOMContentLoaded", function() {
    
    document.getElementById("burger").addEventListener("click", function(){
        document.querySelector("header").classList.toggle("open")
    });

    // Code below is for direction buttons

    const directionsData = [
        {
            title: "Erdarbeit",
            text: "Erdarbeiten sind die Grundlage eines jeden Bauprojekts. Wir bieten ein umfassendes Angebot an Dienstleistungen für die Vorbereitung und Bearbeitung von Grundstücken für die anschließende Bebauung.",
            imgSrc: "img/Erdarbeit.png"
        },
        {
            title: "Verlegung der Kommunikation",
            text: "Unsere Firma hilft Ihnen bei der Verlegung von Wasserleitungen, Stromkabeln und Gasleitungen. Wir sorgen dafür, dass alles schnell und sicher installiert wird, damit Sie sich um nichts kümmern müssen.",
            imgSrc: "img/kommunitionc.png"
        },
        {
            title: "Drainagesystem",
            text: "Unsere Drainagesysteme sorgen für eine effektive Ableitung von Regenwasser, um Schäden an Bauwerken und Grundstücken zu verhindern.",
            imgSrc: "img/Drainagesystem.png"
        },
        {
            title: "Straßenbau",
            text: "Unsere Straßenbau-Dienstleistungen umfassen Planung, Bau und Wartung von Straßen, um eine sichere und effiziente Verkehrsinfrastruktur zu gewährleisten.",
            imgSrc: "img/Straßenba.png"
        }
    ];

    document.querySelectorAll('.btnn').forEach((button) => {
        button.addEventListener('click', () => {
            document.querySelectorAll('.btnn').forEach(btn => btn.classList.remove('active-btn'));
            button.classList.add('active-btn');

            const directionIndex = button.getAttribute('data-direction');
            const direction = directionsData[directionIndex];

            document.getElementById('direction-title').innerText = direction.title;
            document.getElementById('direction-text').innerText = direction.text;
            document.getElementById('direction-img').src = direction.imgSrc;
        });
    });
    // Code above is for direction buttons
});