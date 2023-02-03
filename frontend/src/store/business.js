import csrfFetch from "./csrf";

const SET_BUSINESSES = "businesses/setBusinesses";
export const ADD_BUSINESS = "businesses/addBusiness";
// const ADD_REVIEW = "reviews/addReview";

const setBusinesses = (businesses) => ({
    type: SET_BUSINESSES,
    payload: businesses
});

const addBusiness = (business) => ({
    type: ADD_BUSINESS,
    payload: business
});

export const getBusiness = (businessId) => (state) => {
    if (state && state.businesses){
        return state.businesses[businessId];
    }
    return null;
}






export const fetchBusinesses = (query) => async (dispatch) => {
    let response;
    
    console.log("hieee")
    if (query) {
        response= await csrfFetch(`/api/businesses?&query=${query}`)
    } else {
        response = await csrfFetch('/api/businesses');
    }
    if (response.ok) {
        const businesses = await response.json();
        dispatch(setBusinesses(businesses));
    }
};

export const fetchSearchBusinesses = (searchTerm) => async (dispatch) => {
    const response = await fetch(`/api/search?query=${searchTerm}`);
    if (response.ok) {
        const data = await response.json();
        dispatch(setBusinesses(data));
    }
}

export const fetchBusiness = (businessId) => async (dispatch) => {
    const response = await csrfFetch(`/api/businesses/${businessId}`);
    if (response.ok) {
        const business = await response.json();
        dispatch(addBusiness(business));
    }
}

//no need for create for now, user cannot just create a business 


const businessReducer = (state = {}, action) => {
    switch (action.type) {
        case SET_BUSINESSES:
            return {...state, ...action.payload};
        case ADD_BUSINESS:

            return {...state, ...action.payload.business};
        // case ADD_REVIEW:
        //     let newState = {...state};
        //     newState[action.payload.businessId].reviews.push(action.payload);
        //     return newState;
        default:
            return state;
    }

};

export default businessReducer;
