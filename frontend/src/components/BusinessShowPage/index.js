import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom"
import { fetchBusiness } from "../../store/business";

const BusinessShowPage = () => {
    const { businessId } = useParams();
    const business = useSelector((store) => store.business[businessId]);
    const dispatch = useDispatch();
    

    useEffect(()=>{
        dispatch(fetchBusiness(businessId));
    }, [dispatch, businessId])



    return (
        <>
        <h1> test </h1>
        </>
    )
}

export default BusinessShowPage;