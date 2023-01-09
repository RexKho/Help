import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom"
import { fetchBusiness } from "../../store/business";
import Review from "../ReviewShow";
import './BusinessShowPage.css';
import ReviewformModal from "../ReviewFormModal";



const BusinessShowPage = () => {
    const { businessId } = useParams();
    const business = useSelector((store) => store.businesses[businessId]);
    const dispatch = useDispatch();
    
    // console.log(business.reviews)
    // console.log("testing business")
    // console.log(business.reviews[0].photos)

    useEffect(()=>{
        dispatch(fetchBusiness(businessId));
    }, [dispatch])

   



    return (
        <>
            <h1 id="busName"> {business.name}</h1>
            <h2 id="busDes">{business.description}</h2>
            <h3 className="coordinates">Lat: {business.lat}</h3>
            <h3 className="coordinates">Long: {business.long}</h3>
            <div id="createReviewout">
                <ReviewformModal business = {business}/>
            </div>
       
            {/* {business.reviews?.map((review) => (
                review.photoUrl?.map((url, idx)=>(
                    <img src={url} alt="test" key ={idx}></img>
                ))
                )) } */}

            {business.reviews?.map((review, idx) => (
                <> 
                    <div className="scroller">
                        <div className="images-container">
                            {review.photoUrl?.map((url, idx) => <img src={url} alt="picture" key={idx} id="reviewPicture"/>)}
                        </div>
                    <Review review ={review} key={idx}/>  
                    </div>
                </>
            ))}

        </>
    )
}

export default BusinessShowPage;