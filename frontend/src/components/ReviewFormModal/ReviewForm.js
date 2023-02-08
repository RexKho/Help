import "./ReviewFormModal.css";

import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { createReview, getReview } from '../../store/reviews.js';

const ReviewForm = ({setShowModal, currUserReviewId}) => {

    const { businessId } = useParams();
    const [photoUrl, setPhotoUrl] = useState(null);
    const [rating, setRating] = useState(3);
    const [body, setBody] = useState();
    const [imageFiles, setImageFiles] = useState([]);
    const currentUser = useSelector(state => state.session.user);
    const dispatch = useDispatch();

    const revieww = useSelector(getReview(currUserReviewId));

    const handleFile = e => {
        const file = e.currentTarget.files[0];
        if (file) {
            const fileReader = new FileReader();
            fileReader.readAsDataURL(file);
            fileReader.onload = () => {
                setImageFiles([...imageFiles, file]);
                setPhotoUrl(fileReader.result);
            };
        }
       
      
    }
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('review[rating]', rating);
        formData.append('review[body]', body);
        formData.append('review[business_id]', businessId);
        formData.append('review[author_id]', currentUser.id);
        if (imageFiles.length !== 0) {
            imageFiles.forEach(image => {
                formData.append('review[photos][]', image);

            })
        }
        const data = {};
        for(let pair of formData.entries()){
            data[pair[0]] = pair[1];
            console.log(pair[0], pair[1])
        }

        dispatch(createReview(formData, businessId));
        setShowModal(false);
        
    }

    
    const preview = photoUrl ? <img src={photoUrl} alt="" height="200" /> : null;
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
                    <input type="file" onChange={handleFile} multiple></input>
                    <h3>Image preview</h3>
                    {preview}
                    
                </div>
            <button id ="formButton">Post Review</button>
            </form>
        </div>
    )
}

export default ReviewForm;