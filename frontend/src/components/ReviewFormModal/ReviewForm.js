import "./ReviewFormModal.css";
import { useParams } from 'react-router-dom';
import { useState, useRef } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { createReview, editReview, getReview } from '../../store/reviews.js';

const ReviewForm = ({setShowModal, currUserReviewId}) => {

    const { businessId } = useParams();
    const [rating, setRating] = useState(3);
    const [body, setBody] = useState();
    const currentUser = useSelector(state => state.session.user);
    const dispatch = useDispatch();

    const revieww = useSelector(getReview(currUserReviewId));
    
    const handleSubmit = (e) => {
        e.preventDefault();
       
        if (currUserReviewId){
            const data = {
                rating,
                body,
                businessId: Number(businessId),
                authorId: currentUser.id,
                createdAt: revieww.createdAt 
            }
            dispatch(editReview(data));
        } else {
            const data = {
                rating,
                body,
                businessId: Number(businessId),
                authorId: currentUser.id
            }
            dispatch(createReview(data));
            setShowModal(false);
        }
    }

    return (
        <div id="wholeModal">
            <h1 id="CreateTitle">{currUserReviewId? "Edit a Review" : "Create a Review:" }</h1> 
            <form id ="form" onSubmit={handleSubmit}>
                <div id="reviewbox">
                    <label id ="ratingInput"> Rating: 
                        <label> 1
                            <input type="radio" name="rating" value={1} onChange={(e)=> setRating(e.target.value)}></input> 
                        </label>
                        <label> 2
                            <input type="radio" name="rating" value={2} onChange={(e)=> setRating(e.target.value)}></input> 
                        </label>
                        <label> 3
                            <input type="radio" name="rating" value={3} checked onChange={(e)=> setRating(e.target.value)}></input> 
                        </label>
                        <label> 4
                            <input type="radio" name="rating" value={4} onChange={(e)=> setRating(e.target.value)}></input> 
                        </label>
                        <label> 5
                            <input type="radio" name="rating" value={5} onChange={(e)=> setRating(e.target.value)}></input> 
                        </label>     
                    </label>
                        <textarea placeholder="Review" value={body} id="reviewInput" rows="5" cols="33" onChange ={(e)=> setBody(e.target.value)}/>
                </div>

                <div id ="attachPhoto">
                    <label>Attach a photo: </label>
                    <input type="file" ></input>
                </div>
            <button id ="formButton">Post Review</button>
            </form>
        </div>
    )
}

export default ReviewForm;