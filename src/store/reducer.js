import { SET_SELECTED_SEATS } from './constants';

const initState = {
    selectedSeats: [],
};

function reducer(state, action) {
    switch (action.type) {
        case SET_SELECTED_SEATS:
            return {
                ...state,
                selectedSeats: action.payload,
            };
        default:
            throw new Error('Invalid action.');
    }
}

export { initState };
export default reducer;
