import csrfFetch from "./csrf";
import { ADD_BUSINESS } from "./business";

const REMOVE_REVIEW ="reviews/removeReview";
const ADD_REVIEW = "reviews/addReview";

export const addReview = (review) => ({
    type: ADD_REVIEW,
    payload: review,
});

export const removeReview = (reviewId) => ({
    type: REMOVE_REVIEW,
    reviewId
});

export const getReview = (reviewId) => (store) => {
    if(store.reviews && store.reviews[reviewId]) return store.reviews[reviewId];
    return null;
}


export const createReview = (reviewData, businessId) => async (dispatch) =>{
    console.log(reviewData);
    const response = await csrfFetch(`/api/businesses/${businessId}/reviews`,{
        method: "POST",
        body: reviewData
    });
    if(response.ok) {
        const review = await response.json();
        dispatch(addReview(review));
    }
};



export const deleteReview = (businessId, reviewId) => async (dispatch) => {
    const response = await csrfFetch(`/api/businesses/${businessId}/reviews/${reviewId}`,{
        method: "DELETE"
    });
    if (response.ok) {
        dispatch(removeReview(reviewId));
    }
};

export const editReview = (businessId, review) => async (dispatch) =>{
    const response = await csrfFetch(`/api/businesses/${businessId}/reviews/${review.id}` , {
        method: "PATCH",
        body: JSON.stringify(review),
        headers: {
            "Content-Type": "application/json",
        },
    });
    if (response.ok){
        let data = await response.json();
        dispatch(addReview(data));
    }
}

const reviewsReducer = (state = {}, action) => {
    let newState = {...state};
    switch(action.type) {
        case ADD_BUSINESS:
            return {...action.payload.reviews};
        case ADD_REVIEW:
            newState[action.payload.id] = (action.payload);
            return newState;
        case REMOVE_REVIEW:
            delete newState[action.reviewId]
            return newState;
        default:
            return newState;
    }
};

export default reviewsReducer;