import React from "react";
import { Link } from 'react-router-dom';

const BusinessListItem = ({ business }) => {
    
    if (!business){
        return null;
    }

    return (
        <div  className="business-container">

            <div id="prevPicture">
                <img src={business.photoUrls[0]} alt="picture" id="imageId" />
            </div>
            
            <Link to={`/businesses/${business.id}`} id="businessName" >{business.name} </Link>
            
            <h2 id="businessDescription">{business.description}</h2>

        </div>
    );
    };

export default BusinessListItem;