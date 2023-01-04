import React from 'react';
import BusinessListItem from './BusinessListItem';

const BusinessList = ({businesses}) => {
    return (
        <div>
            <h1 id="title">Businesses</h1>
            {businesses?.map((business, idx)=>(
                <BusinessListItem business={business} key={idx} />
            )
            )}
        </div>
    );
}

export default BusinessList;