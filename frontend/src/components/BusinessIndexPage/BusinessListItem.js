import React from "react";
import { useHistory, Redirect, Link } from 'react-router-dom';

const BusinessListItem = ({ business }) => {
    
    const history = useHistory();

    

    const handleClick = (e) => {
        // history.push(`/businesses/${business.id}`);
        <Redirect to={`/businesses/${business.id}`}/>
        return e.preventDefault;
    };

    if (!business){
        return null;
    }

    return (
        <div  className="business-container">
        {/* <div onClick={handleClick} className="business-container"> */}
            <div id="prevPicture">
                <img src={business.photoUrls[0]} alt="picture" />

            </div>
            <Link to={`/businesses/${business.id}`} id="businessName" key={business.id}>{business.name}</Link>
            
            <h2 id="businessDescription">{business.description}</h2>


         
        </div>
    );
    };

export default BusinessListItem;