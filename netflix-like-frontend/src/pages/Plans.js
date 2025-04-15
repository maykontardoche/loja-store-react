import React, { useEffect, useState } from 'react';
import api from '../services/api';
import PlanCard from '../components/PlanCard';
import './Plans.css';

function Plans() {
    const [plans, setPlans] = useState([]);

    useEffect(() => {
        api.get('/plans')
            .then(res => setPlans(res.data))
            .catch(err => console.error(err));
    }, []);

    return (
        <div className="plans-page">
            <h2>Planos Exclusivos</h2>
            <div className="plans-container">
                {plans.length > 0 ? plans.map(plan => (
                    <PlanCard key={plan.id} plan={plan} />
                )) : <p>Carregando planos...</p>}
            </div>
        </div>
    );
}

export default Plans;
