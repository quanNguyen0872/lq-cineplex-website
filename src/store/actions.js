import { SET_SELECTED_SEATS, SET_ACTIVE_STEP, ADD_FOOD } from './constants';

export const setSelectedSeats = (payload) => ({
    type: SET_SELECTED_SEATS,
    payload,
});

export const setActiveStep = (payload) => ({
    type: SET_ACTIVE_STEP,
    payload,
});

export const addFood = (payload) => ({
    type: ADD_FOOD,
    payload,
});
