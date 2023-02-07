import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchBusinesses } from "../../store/business";
import BusinessList from "./BusinessList";
import './BusinessIndexPage.css';
import { StringParam, useQueryParam } from 'use-query-params';
import SearchBar from "../SearchBar";



const BusinessIndexPage = () => {

    const businesses = useSelector((store)=> Object.values(store.businesses));
    const dispatch = useDispatch();
    const [term, setTerm] = useState();
    const [query, setQuery] = useQueryParam('query', StringParam);
   
    useEffect(()=>{
        dispatch(fetchBusinesses(query));
    }, [query]);
    
    return (
        <>
            <SearchBar setTerm={setTerm}/>
            <BusinessList businesses={businesses} term={term}/>
        
        </>
    );
};

export default BusinessIndexPage;