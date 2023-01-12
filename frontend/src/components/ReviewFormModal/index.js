import React from 'react';
import { Modal } from '../../context/modal';
import ReviewForm from "./ReviewForm";

function ReviewformModal ({showModal, setShowModal, currUserReviewId}) {

    
    return (
        <>
        {console.log(currUserReviewId)}
            <button onClick={()=> setShowModal(true)} id="createButton"> <i className="fa-regular fa-star"></i> &nbsp; Write a Review</button> 
            {/* conditional to edit a review if review already there */}
            {showModal && (
                <Modal onClose={()=> setShowModal(false)} >
                    <ReviewForm setShowModal ={setShowModal} currUserReviewId={currUserReviewId}/>
                </Modal>
                )}
            
        </>
    );
}

export default ReviewformModal;