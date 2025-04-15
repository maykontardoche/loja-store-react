import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import api from '../services/api';
import './Subscribe.css';

function Subscribe() {
    const { planId } = useParams();
    const navigate = useNavigate();
    const [plan, setPlan] = useState(null);
    const [user, setUser] = useState({ name: '', email: '' });
    const [message, setMessage] = useState('');

    useEffect(() => {
        api.get(`/plans/${planId}`)
            .then(res => setPlan(res.data))
            .catch(err => console.error(err));
    }, [planId]);

    const handleChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const payload = {
            user: user,
            planId: parseInt(planId)
        };
        api.post('/subscriptions', payload)
            .then(res => {
                setMessage('Assinatura realizada com sucesso!');
                setTimeout(() => navigate('/'), 2000);
            })
            .catch(err => {
                setMessage('Erro ao processar sua assinatura.');
                console.error(err);
            });
    };

    return (
        <div className="subscribe-page">
            <h2>Assinar Plano</h2>
            {plan && (
                <div className="plan-info">
                    <h3>{plan.name}</h3>
                    <p>{plan.description}</p>
                    <p>Preço: R$ {plan.price}</p>
                    <p>Duração: {plan.periodDays} dias</p>
                </div>
            )}
            <form onSubmit={handleSubmit} className="subscribe-form">
                <input
                    type="text"
                    name="name"
                    placeholder="Seu nome"
                    value={user.name}
                    onChange={handleChange}
                    required
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Seu email"
                    value={user.email}
                    onChange={handleChange}
                    required
                />
                <button type="submit">Assinar Agora</button>
            </form>
            {message && <p className="form-message">{message}</p>}
        </div>
    );
}

export default Subscribe;
