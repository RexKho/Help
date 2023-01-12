import React from "react";
import { useState, useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { editReview, getReview } from "../../store/reviews";


const EditFrom = (props) => {
//    console.log(review);
const dispatch = useDispatch();
const {reviewId} = useParams();
const review = useSelector(getReview(reviewId));
const {author, body, createdAt, id, rating} = review;

console.log(author);

const [rating2, setRating] = useState(review.rating);
const [body2, setBody] = useState(review.body);



    //What I have tried:
    // 1. passing in review in editDeleteButton to use as a prop 
    //    and deconstruct. Review would come up undefined
    // 2. use withRouter, does not get passed in. I can set the
    //    default to {} but will always be {}
    // 3. Tried to use useContext but already have a default function exported
    //



    // const currentUser = useSelector(state => state.session.user);
    // const dispatch = useDispatch();

    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     const data = {
    //         rating,
    //         body,
    //         businessId: businessId,
    //         authorId: currentUser.id,
    //         author: currentUser.username,
    //         createdAt: review.createdAt,
    //         id: review.id
    //     }
    //     // console.log(data);
    //     dispatch(editReview(data));
        
    // }

    return (
        <>
            {/* {console.log(review)} */}
        </>
        // <>
        //     <h1>Edit a Review</h1>
        //     <form id ="form" onSubmit={handleSubmit}>

        //         <div id="reviewbox">
        //             <label id ="ratingInput"> Rating: 
        //                 <label> 1
        //                     <input type="radio" name="rating" value={rating} onChange={(e)=> setRating(e.target.value)}></input> 
        //                 </label>
        //                 <label> 2
        //                     <input type="radio" name="rating" value={rating} onChange={(e)=> setRating(e.target.value)}></input> 
        //                 </label>
        //                 <label> 3
        //                     <input type="radio" name="rating" value={rating} onChange={(e)=> setRating(e.target.value)}></input> 
        //                 </label>
        //                 <label> 4
        //                     <input type="radio" name="rating" value={rating} onChange={(e)=> setRating(e.target.value)}></input> 
        //                 </label>
        //                 <label> 5
        //                     <input type="radio" name="rating" value={rating} onChange={(e)=> setRating(e.target.value)}></input> 
        //                 </label>     
        //                 {/* <input type="range" min="1" max="5" value={rating} onChange={(e)=> setRating(e.target.value)}/> */}
        //             </label>
        //                 <textarea placeholder="Review" value={body} id="reviewInput" rows="5" cols="33" onChange ={(e)=> setBody(e.target.value)}/>
        //                 {/* <input type="textarea" rows="5" cols="40" id="reviewInput" placeholder="Review"></input> */}
                    
        //         </div>

        //         <div id ="attachPhoto">
        //             <label>Attach a photo: </label>
        //             <input type="file"></input>
        //         </div>
        //         <button id ="formButton">Edit Review</button>
        //     </form>
        // </>
    )
}

export default EditFrom;

