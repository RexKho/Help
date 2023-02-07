import React from 'react';
import BusinessListItem from './BusinessListItem';

const BusinessList = ({businesses, term}) => {
    let listItems;

    if (term) {
        listItems =(
            businesses?.map((business, idx)=>{
                {console.log(business.name.toUpperCase() === term.toUpperCase())}
                if (business.name.toUpperCase() === term.toUpperCase()) {
                    return(
                        <BusinessListItem business={business} key={idx} />

                    )
                }
                }
        ))

    } else {
        listItems =(
            businesses?.map((business, idx)=>(
                <BusinessListItem business={business} key={idx} />
                )
            )
        )
    }


    return (
        <div id="mainContainer">
            <h1 id="title">Local Businesses</h1>
            <div id ="module">              
            {listItems}
            </div>
        </div>
    );
}

export default BusinessList;