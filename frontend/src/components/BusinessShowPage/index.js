import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom"
import { fetchBusiness } from "../../store/business";
import './BusinessShowPage.css';

const BusinessShowPage = () => {
    const { businessId } = useParams();
    
    const business = useSelector((store) => store.businesses[businessId]);
    const dispatch = useDispatch();

    console.log("testing business")
    console.log(business)

    useEffect(()=>{
        dispatch(fetchBusiness(businessId));
    }, [dispatch, businessId])



    return (
        <>
            <h1 id="busName"> {business.name}</h1>
            <h2 id="busDes">{business.description}</h2>
            <h3 className="coordinates">Lat: {business.lat}</h3>
            <h3 className="coordinates">Long: {business.long}</h3>
        </>
    )
}

export default BusinessShowPage;