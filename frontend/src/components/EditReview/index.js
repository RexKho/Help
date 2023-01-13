import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { editReview, getReview } from "../../store/reviews";
import "./EditReview.css"


const EditFrom = () => {

const dispatch = useDispatch();
const {businessId} = useParams();
const {reviewId} = useParams();
const review = useSelector(getReview(reviewId));
const {author, createdAt, id} = review;


const [rating, setRating] = useState(review.rating);
const [body, setBody] = useState(review.body);

const currentUser = useSelector(state => state.session.user);
const history = useHistory();

const handleSubmit = (e) => {
    e.preventDefault();
    console.log(rating);
    const data = {
        rating,
        body,
        businessId: businessId,
        authorId: currentUser.id,
        author: author,
        createdAt: createdAt,
        id: id
    }
   
    dispatch(editReview(businessId, data));
    history.push(`/businesses/${businessId}`)
}

return (
        <>
        
            <h1 id="editTitle">Edit a Review</h1>
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
                            <input type="radio" name="rating" value={3} onChange={(e)=> setRating(e.target.value)}></input> 
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
        
                <div id ="attachPhotoEdit">
                    <label>Attach a photo: </label>
                    <input type="file"></input>
                </div>
                <button id ="editButton">Edit Review</button>
            </form>
        </>
        
    )
}

export default EditFrom;