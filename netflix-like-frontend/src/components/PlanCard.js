import React from 'react';
import { Link } from 'react-router-dom';
import './PlanCard.css';

function PlanCard({ plan }) {
    return (
        <div className="plan-card">
            <h3>{plan.name}</h3>
            <p>{plan.description}</p>
            <p className="price">R$ {plan.price}</p>
            <p>{plan.periodDays} dias de assinatura</p>
            <Link to={`/subscribe/${plan.id}`} className="subscribe-button">
                Assinar
            </Link>
        </div>
    );
}

export default PlanCard;
