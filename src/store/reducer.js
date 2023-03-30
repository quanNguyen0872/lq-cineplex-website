import { SET_SELECTED_SEATS, SET_ACTIVE_STEP, ADD_FOOD } from './constants';

const initState = {
    selectedSeats: [],
    activeStep: 0,
    selectedFoods: [],
};

function reducer(state, action) {
    switch (action.type) {
        case SET_SELECTED_SEATS:
            return {
                ...state,
                selectedSeats: action.payload,
            };
        case SET_ACTIVE_STEP:
            return {
                ...state,
                activeStep: action.payload,
            };
        case ADD_FOOD:
            return {
                ...state,
                selectedFoods: action.payload,
            };
        default:
            throw new Error('Invalid action.');
    }
}

export { initState };
export default reducer;
