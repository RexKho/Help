import { useEffect, useState } from "react";
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
    const [showModal, setShowModal] = useState(false);

    const currentUser = useSelector(state => state.session.user);

    // console.log(business.reviews)
    // console.log("testing business")
    // console.log(business.reviews[0].photos)

    useEffect(()=>{
        dispatch(fetchBusiness(businessId));
    }, [dispatch, showModal])

    const editDeleteButton = (review) => {
        if (review.author === currentUser.username) {
            return(
                <>
                    <button>Edit Review</button>
                    <button>Delete Review</button>
                </>
            ) 
        }
    }

   



    return (
        <>
            <h1 id="busName"> {business.name}</h1>
            <h2 id="busDes">{business.description}</h2>
            <h3 className="coordinates">Lat: {business.lat}</h3>
            <h3 className="coordinates">Long: {business.long}</h3>
            <div id="createReviewout">
                <ReviewformModal business = {business} showModal={showModal} setShowModal={setShowModal}/>
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
                    {editDeleteButton(review)}
                    <Review review ={review} key={idx}/> 
                    {/* {console.log(review.author)}
                    {console.log(currentUser.username)} */}
                    </div>
                </>
            ))}

        </>
    )
}

export default BusinessShowPage;