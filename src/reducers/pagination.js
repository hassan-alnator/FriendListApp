import * as types from '../constants/ActionTypes';

const defaultState = {
    /*
        Every pagination has a paginiation key so i can use the paginiation on multipule components
        and datasets , this key will hold the pagination inofrmation for the specific key.
        i did this to be able to use this pagination with other components .
    */
    friendsById: {
        currentPage: 1,
        itemsPerPage: 1
    }
}

export default function pagination(state = defaultState, action) {

    const { key } = action;

    switch (action.type) {

        case types.NEXT_PAGE:
            return {
                ...state,
                [key]: {
                    ...state[key],
                    currentPage: state[key].currentPage + 1
                }
            }
        case types.PREV_PAGE:
            return {
                ...state,
                [key]: {
                    ...state[key],
                    currentPage: state[key].currentPage - 1
                }
            }
        case types.GOTO_PAGE:
            return {
                ...state,
                [key]: {
                    ...state[key],
                    currentPage: action.number
                }
            }

        default:
            return state;
    }
}