import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchBusinesses } from "../../store/business";
import BusinessList from "./BusinessList";
import './BusinessIndexPage.css';


const BusinessIndexPage = () => {

    const businesses = useSelector((store)=> Object.values(store.businesses));
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(fetchBusinesses());
    }, [dispatch]);

    return (
        <>
          <BusinessList businesses={businesses} />
        </>
    );
};

export default BusinessIndexPage;