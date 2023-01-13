import React from 'react';
import BusinessListItem from './BusinessListItem';

const BusinessList = ({businesses}) => {
    return (
        <div id="mainContainer">
            <h1 id="title">Local Businesses</h1>
            <div id ="module">              
            {businesses?.map((business, idx)=>(
                <BusinessListItem business={business} key={idx} />
                )
            )}
            </div>
        </div>
    );
}

export default BusinessList;