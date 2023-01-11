import { useEffect, useState, useSyncExternalStore } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom"
import { fetchBusiness } from "../../store/business";
import { deleteReview } from "../../store/reviews"
import Review from "../ReviewShow";
import './BusinessShowPage.css';
import ReviewformModal from "../ReviewFormModal";
import editFrom from "../EditReview";



const BusinessShowPage = () => {
    const { businessId } = useParams();
    const dispatch = useDispatch();
    const [showModal, setShowModal] = useState(false);
    const [deleteClicked, setDeleteClicked] = useState(false);
    
    
    const business = useSelector((store) => store.businesses[businessId]);
    const currentUser = useSelector(state => state.session.user);
    const reviewss= useSelector((state)=> {
        if (state.reviews){
            return Object.values(state.reviews);
        }

    })
    

    // console.log(business.reviews)
    // console.log("testing business")
    // console.log(business.reviews[0].photos)

    useEffect(()=>{
        dispatch(fetchBusiness(businessId));
       
    }, [dispatch, businessId])
    
    const handleClick = (review) =>{
        console.log(review);
        setDeleteClicked(true);
        dispatch(deleteReview(business.id, review.id));
    }

    const editDeleteButton = (review) => {

        if (currentUser && review.author === currentUser.username) {
            return(
                <>
                    <button id="EditDelete" onClick={()=> handleClick(review)}>Delete Review</button>
                    <button id="EditDelete" onClick={()=> editFrom(review)}>Edit Review</button>
                </>
            ) 
        }
    }

    const createReviewButton = () => {
        if (currentUser){
            return (
                <div id="createReviewout">
                    <ReviewformModal business = {business} showModal={showModal} setShowModal={setShowModal} />
                </div>
            )
        }
    }

    if(!business){
        return null
    }

    return (
        <>
            <h1 id="busName"> {business.name}</h1>
            <h2 id="busDes">{business.description}</h2>
            <h3 className="coordinates">Lat: {business.lat}</h3>
            <h3 className="coordinates">Long: {business.long}</h3>
            {createReviewButton()}
            {/* {business.reviews?.map((review) => (
                review.photoUrl?.map((url, idx)=>(
                    <img src={url} alt="test" key ={idx}></img>
                ))
                )) } */}
            {console.log(reviewss)}
            {reviewss && reviewss?.map((review, idx) => (
                    <div className="scroller" key={idx}>
                        <div className="images-container">
                            {review.photoUrl?.map((url, idx) => <img src={url} alt="picture" key={idx} id="reviewPicture"/>)}
                        </div>
                    {editDeleteButton(review)}
                    <Review review ={review} key={idx}/> 
                    </div>
            ))}

        </>
    )
}

export default BusinessShowPage;