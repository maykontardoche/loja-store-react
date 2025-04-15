import React from 'react';
import './Home.css';

function Home() {
    return (
        <div className="home-page">
            <div className="overlay">
                <h1>Bem-vindo ao MyNetflix</h1>
                <p>Experimente a melhor experiência de assinatura com um visual que impressiona.</p>
                <a href="/plans" className="explore-button">Explore os Planos</a>
            </div>
        </div>
    );
}

export default Home;
