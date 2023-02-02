import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchBusinesses } from "../../store/business";
import BusinessList from "./BusinessList";
import './BusinessIndexPage.css';
import { StringParam, useQueryParam } from 'use-query-params';


const BusinessIndexPage = () => {

    const businesses = useSelector((store)=> Object.values(store.businesses));
    const dispatch = useDispatch();
    const [query, setQuery] = useQueryParam('query', StringParam);

    useEffect(()=>{
        dispatch(fetchBusinesses({query}));
    }, [dispatch]);

    return (
        <>
          <BusinessList businesses={businesses} />
        </>
    );
};

export default BusinessIndexPage;