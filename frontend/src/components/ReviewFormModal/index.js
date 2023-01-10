import React, { useState } from 'react';
import { Modal } from '../../context/modal';
import ReviewForm from "./ReviewForm";

function ReviewformModal ({showModal, setShowModal}) {

    
    return (
        <>
            <button onClick={()=> setShowModal(true)} id="createButton">Create New Review</button>
            {showModal && (
                <Modal onClose={()=> setShowModal(false)} >
                    <ReviewForm setShowModal ={setShowModal}/>
                </Modal>
                )}
            
        </>
    );
}

export default ReviewformModal;