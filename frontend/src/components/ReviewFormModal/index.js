import React, { useState } from 'react';
import { Modal } from '../../context/modal';
import ReviewForm from "./ReviewForm";

function ReviewformModal () {

    const [showModal, setShowModal] = useState(false);
    return (
        <>
            <button onClick={()=> setShowModal(true)}>Create New Review</button>
            {showModal && (
                <Modal onClose={()=> setShowModal(false)} >
                
                    <ReviewForm />
                </Modal>
                )}
            
        </>
    );
}

export default ReviewformModal;