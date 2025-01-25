import React from 'react';
import '../styles/aboutpage.css';

const AboutUs = () => {
    console.log('Rendering About Page'); // Aggiungi questo
    return (
        <div className="aboutus-container">
            <h1 className="aboutus-title">ItaliaPros</h1>
            <section className="aboutus-content">
                <p className="aboutus-description">
                    <br/>
                    Anche se "Chi siamo" fa pensare a un gruppo, in realtà il team dietro ItaliaPros è composto <strong>solo
                    da me</strong>.
                    Ho sviluppato questa piattaforma mettendo insieme la mia passione per la tecnologia e gli esports,
                    con l’obiettivo di
                    contribuire attivamente alla crescita e al miglioramento della scena esports italiana. Ho voluto
                    mettere le mie competenze e il mio tempo al servizio di una community che merita di essere
                    valorizzata e promossa per il talento che ha da offrire. Attraverso un lavoro costante e
                    appassionato, mi impegno a raccogliere tutte le risorse, le informazioni e il supporto necessari per
                    aiutare giocatori, staff e team italiani a raggiungere il loro massimo potenziale.
                    <br/>
                    <br/>
                    Il mio sogno è vedere l’Italia competere ai massimi livelli del panorama europeo, dimostrando che
                    anche la nostra scena può ritagliarsi uno spazio di rilievo tra le eccellenze internazionali. Credo
                    fermamente nel valore delle persone che animano questa community: giocatori dedicati, staff
                    instancabili e fan appassionati, tutti fondamentali per rendere l’esports un fenomeno sempre più
                    importante. Lavoro per costruire uno spazio inclusivo e stimolante, dove passione, dedizione e
                    ambizione possano
                    crescere insieme, creando opportunità concrete per chiunque desideri far parte di questo mondo. Non
                    mi muovono interessi economici, ma il desiderio di fare la differenza e di gettare le basi per un
                    futuro più luminoso per l’esports italiano.
                    <br/>
                    <br/>
                    Che tu sia un giocatore determinato a migliorare, un membro dello staff che sogna di portare il
                    proprio team al successo, oppure un appassionato che vive ogni partita con entusiasmo, questo
                    progetto è anche il tuo. Insieme possiamo costruire una scena esports che l’Italia possa finalmente
                    chiamare “casa” e che l’Europa riconosca come una realtà di talento e professionalità.
                    <br/>
                    <br/>
                    Insieme possiamo scrivere la storia dell’esports italiano.
                </p>
            </section>
        </div>
    );
};

export default AboutUs;
