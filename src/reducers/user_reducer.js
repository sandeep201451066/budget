const initialState = {
    transactions: [],
    catagories: [],
    remaining_amount: null
}
export default (state = null, action) => {
    switch (action.type) {
        case 'user_transaction':
            return [
                ...state, { transactions: action.payload }
            ]
        case 'catagory':
            return [
                ...state, { catagories: action.payload }
            ]
        case 'remaining_amount':
            return [
                ...state, { remaining_amount: action.payload }
            ]
        default:
            return state;
    }
};
