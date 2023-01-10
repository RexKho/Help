import csrfFetch from "./csrf";

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





export const createReview = (reviewData) => async (dispatch) =>{
    const response = await csrfFetch(`/api/businesses/${reviewData.businessId}/reviews`,{
        method: "POST",
        body: JSON.stringify(reviewData),
        headers: {
            "Content-Type": "application/json"
        }
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

const reviewsReducer = (state = {}, action) => {
    let newState = {...state};
    switch(action.type) {
        // case ADD_REVIEW:
        //     debugger
        //     newState.businesses[action.payload.businessId].reviews.push(action.payload);
        //     console.log(newState);
        //     return newState;
        case REMOVE_REVIEW:
            delete newState[action.reviewId]
            return newState;
        default:
            return newState;
    }
};

export default reviewsReducer;