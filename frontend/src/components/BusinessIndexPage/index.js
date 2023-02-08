import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchBusinesses } from "../../store/business";
import BusinessList from "./BusinessList";
import './BusinessIndexPage.css';

import SearchBar from "../SearchBar";



const BusinessIndexPage = () => {

    const businesses = useSelector((store)=> Object.values(store.businesses));
    const dispatch = useDispatch();
    const [term, setTerm] = useState();

   
    useEffect(()=>{
        dispatch(fetchBusinesses());
    }, []);
    
    return (
        <>
            <SearchBar setTerm={setTerm}/>
            <BusinessList businesses={businesses} term={term}/>
        
        </>
    );
};

export default BusinessIndexPage;