import React from 'react';
import { Modal } from '../../context/modal';
import ReviewForm from "./ReviewForm";

function ReviewformModal ({showModal, setShowModal, currUserReviewId, setErrors, errors}) {

    return (
        <>
            <button onClick={()=> setShowModal(true)} id="createButton"> <i className="fa-regular fa-star"></i> &nbsp; Write a Review</button> 
            {showModal && (
                <Modal onClose={()=> setShowModal(false)} >
                    <ReviewForm setShowModal ={setShowModal} currUserReviewId={currUserReviewId} setErrors={setErrors} errors={errors}/>
                </Modal>
                )}
        </>
    );
}

export default ReviewformModal;