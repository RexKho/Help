import React from "react";
import { useHistory } from 'react-router-dom';

const BusinessListItem = ({ business }) => {

    const history = useHistory();

    const handleClick = (e) => {
        history.push(`/businesses/${business.id}`);
        return e.preventDefault;
        
    };

    return (
        <div onClick={handleClick} className="business-container">
            <h2>{business.name}</h2>
            <h2>Description: {business.description}</h2>
        </div>
    );
    };

export default BusinessListItem;