import { SELL_PHONE} from "../types/Types";
const initialState = {
    numberOfPhone : 300,
}
const phoneReducer = (state = initialState, action) => {
    switch (action.type) {
        case SELL_PHONE:
            return{
                ...state,
                numberOfPhone: state.numberOfPhone - 1
            }
        default:
            return state;
    }
}
export default phoneReducer;