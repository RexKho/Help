// import { useHistory } from "react-router-dom";
import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchBusinesses } from "../../store/business";
import BusinessList from "./BusinessList";
import './BusinessIndexPage.css';


const BusinessIndexPage = () => {



    const businesses = useSelector((store)=> Object.values(store.businesses));
    const reviews = useSelector((state) => Object.values(state.reviews))
    const dispatch = useDispatch();

    // const history = useHistory();
    useEffect(()=>{
        dispatch(fetchBusinesses());
    }, [dispatch]);

    return (
        <>
            {console.log(reviews)}
          <BusinessList businesses={businesses} reviews={reviews}/>
        </>
    );
};

export default BusinessIndexPage;