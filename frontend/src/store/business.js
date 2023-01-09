import csrfFetch from "./csrf";

const SET_BUSINESSES = "businesses/setBusinesses";
const ADD_BUSINESS = "businesses/addBusiness"

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


export const fetchBusinesses = () => async (dispatch) => {
    const response = await csrfFetch('/api/businesses');
    if (response.ok) {
        const businesses = await response.json();
        dispatch(setBusinesses(businesses));
    }
};

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
            return {...state, ...action.payload};
        default:
            return state;
    }

};

export default businessReducer;
