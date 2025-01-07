import React from 'react';
import '../styles/aboutpage.css';

const AboutUs = () => {
    console.log('Rendering About Page'); // Aggiungi questo
    return (
        <div className="aboutus-container">
            <section className="aboutus-header">
                <h1 className="aboutus-title">Chi Siamo</h1>
                <p className="aboutus-description">
                    Siamo una piattaforma dedicata alla crescita e al miglioramento della scena esports italiana, nata
                    con l’obiettivo di valorizzare e promuovere il talento che la nostra community ha da offrire.
                    <br/>
                    Attraverso un lavoro costante e appassionato, ci impegniamo a raccogliere tutte le risorse, le
                    informazioni e il supporto necessari per aiutare giocatori, staff e team italiani a raggiungere il
                    loro massimo potenziale.
                </p>
            </section>

            <section className="aboutus-mission">
                <h2 className="aboutus-subtitle">La nostra missione:</h2>
                <p className="aboutus-description">
                    Il nostro sogno è vedere l’Italia competere ai massimi livelli del panorama europeo, dimostrando che
                    anche la nostra scena può ritagliarsi uno spazio di rilievo tra le eccellenze internazionali.
                    <br/>
                    Crediamo fermamente nel valore delle persone che animano questa community: giocatori dedicati, staff
                    instancabili, fan appassionati, tutti fondamentali per rendere l’esports un fenomeno sempre più
                    importante.
                </p>
            </section>

            <section className="aboutus-commitment">
                <h2 className="aboutus-subtitle">Il nostro impegno:</h2>
                <p className="aboutus-description">
                    Lavoriamo per costruire uno spazio inclusivo e stimolante, dove passione, dedizione e ambizione
                    possano crescere insieme, creando opportunità concrete per chiunque desideri far parte di questo
                    mondo. Non ci muovono interessi economici, ma il desiderio di fare la differenza e di gettare le basi per
                    un futuro più luminoso per l’esports italiano.
                </p>
                <p className="aboutus-description">
                    Unisciti a noi, che tu sia: un giocatore determinato a migliorare, un membro dello staff che sogna
                    di portare il proprio team al successo, oppure un appassionato che vive ogni partita con entusiasmo,
                    questo progetto è anche il tuo. Costruiremo una scena esports che l’Italia possa finalmente chiamare “casa” e che l’Europa riconosca
                    come una realtà di talento e professionalità.
                </p>
                <p className="aboutus-description">
                    Insieme possiamo scrivere la storia dell’esports Italiano.
                </p>
            </section>
        </div>
    );
};

export default AboutUs;
