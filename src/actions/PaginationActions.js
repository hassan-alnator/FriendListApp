import * as types from '../constants/ActionTypes';

export const nextPage = (key, NumberOfItems) => ({
    type: types.NEXT_PAGE,
    key
});

export const prevPage = (key, NumberOfItems) => ({
    type: types.PREV_PAGE,
    key
});

export const goToPage = (number, key) => ({
    type: types.GOTO_PAGE,
    key,
    number
});
