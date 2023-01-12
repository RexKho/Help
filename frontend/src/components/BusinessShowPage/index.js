import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom"
import { fetchBusiness } from "../../store/business";
import { deleteReview } from "../../store/reviews"
import Review from "../ReviewShow";
import './BusinessShowPage.css';
import ReviewformModal from "../ReviewFormModal";
import { NavLink } from "react-router-dom";
import EditFrom from "../EditReview";
import { useContext } from "react";

const BusinessShowPage = () => {
    const { businessId } = useParams();
    const dispatch = useDispatch();
    const [showModal, setShowModal] = useState(false);
    
    const business = useSelector((store) => store.businesses[businessId]);
    const currentUser = useSelector(state => state.session.user);
    
    const reviewss= useSelector((state)=> {
        if (state.reviews){
            return Object.values(state.reviews);
        }
    })
    
    
    
    let currUserReviewId;
    
    
    useEffect(()=>{
        dispatch(fetchBusiness(businessId));
        //    console.log(reviewss.author);
        //    console.log(currentUser);
    }, [dispatch, businessId])
    
    const handleClick = (review) =>{
        dispatch(deleteReview(business.id, review.id));
    }
    
    const editDeleteButton = (review) => {
        if (currentUser && review.author === currentUser.username) {
            // currUserReviewId = review.id;
            
            return(
                <>
                    <button id="EditDelete" onClick={()=> handleClick(review)}>Delete Review</button>
                    
                    <NavLink id="EditDelete" to={{pathname: `/${businessId}/editreview/${review.id}`}} state={{review: review}}>Edit Review</NavLink>
                    {/* <button id="EditDelete" onClick={()=> setShowModal(true)}>Edit Review</button> */}
                
                </>
            ) 
        }
    }

    const createReviewButton = () => {
        if (currentUser){
            return (
                <div id="createReviewout">
                    <ReviewformModal currUserReviewId = {currUserReviewId} showModal={showModal}  setShowModal={setShowModal} />
                </div>
            )
        }
    }

    if(!business){
        return null
    }

    if(!reviewss.length){
        return null
    }

    return (
        <>
            <div className="topPicture">
                    <img src={reviewss[0].photoUrl[0]} alt="top picture" width="100%" id="pictureontop"></img>
                <h1 id="busName" className="bottom-left"> {business.name}</h1>
            </div>

                <h3 className="coordinates" >Long: {business.long}</h3>
                <h3 className="coordinates" >Lat: {business.lat}</h3>

            <div id="desContainer">
                <h1 id="aboutBusiness">About the Business</h1>
                <h2 id="busDes" >{business.description}</h2>
            </div>


            {createReviewButton(currUserReviewId)}
            <div id="reviewList">

                {reviewss && reviewss?.map((review, idx) => (
                    <div className="scroller" key={idx}>

                            <div className="images-container">
                                {review.photoUrl?.map((url, idx) => <img src={url} alt="picture" key={idx} id="reviewPicture"/>)}
                            </div>

                            {editDeleteButton(review)}
                            <Review review ={review} key={idx}/> 
                        </div>
                ))}
            </div>
        </>
    )
}

export default BusinessShowPage;