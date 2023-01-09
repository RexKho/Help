import "./ReviewFormModal.css";
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { createReview } from '../../store/reviews.js';

const ReviewForm = () => {

    // let business = useSelector(getBusiness(businessId));
    
    const { businessId } = useParams();
    const [rating, setRating] = useState(3);
    const [body, setBody] = useState();
    const currentUser = useSelector(state => state.session.user);
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        const data = {
            rating,
            body,
            business_id: Number(businessId),
            author_id: currentUser.id
        }
        // console.log(data);
        dispatch(createReview(data));
    }

    return (
        <div id="wholeModal">
        {/* put business name for create title */}
            <h1 id="CreateTitle">Create a Review:</h1> 
            <form id ="form" onSubmit={handleSubmit}>

                <div id="reviewbox">
                    <label id ="ratingInput"> Rating: 
                        <label> 1
                            <input type="radio" name="rating" value={rating} onChange={(e)=> setRating(e.target.value)}></input> 
                        </label>
                        <label> 2
                            <input type="radio" name="rating" value={rating} onChange={(e)=> setRating(e.target.value)}></input> 
                        </label>
                        <label> 3
                            <input type="radio" name="rating" value={rating} checked onChange={(e)=> setRating(e.target.value)}></input> 
                        </label>
                        <label> 4
                            <input type="radio" name="rating" value={rating} onChange={(e)=> setRating(e.target.value)}></input> 
                        </label>
                        <label> 5
                            <input type="radio" name="rating" value={rating} onChange={(e)=> setRating(e.target.value)}></input> 
                        </label>     
                        {/* <input type="range" min="1" max="5" value={rating} onChange={(e)=> setRating(e.target.value)}/> */}
                    </label>
                        <textarea placeholder="Review" value={body} id="reviewInput" rows="5" cols="33" onChange ={(e)=> setBody(e.target.value)}/>
                        {/* <input type="textarea" rows="5" cols="40" id="reviewInput" placeholder="Review"></input> */}
                    
                </div>

                <div id ="attachPhoto">
                    <label>Attach a photo: </label>
                    <input type="file"></input>
                </div>
            <button id ="formButton">Post Review</button>
            </form>
        </div>
    )
}

export default ReviewForm;