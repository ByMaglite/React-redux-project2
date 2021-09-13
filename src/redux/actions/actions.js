import { SELL_LAPTOP, SELL_COMP, SELL_WATCH, SELL_PHONE } from "../types/Types";

export const sellLaptop = () => {
    return{
        type: SELL_LAPTOP
    };
};
export const sellComputer = () => {
    return{
        type: SELL_COMP
    };
};
export const sellPhone = () => {
    return{
        type: SELL_PHONE
    };
};
export const sellWatch = () => {
    return{
        type: SELL_WATCH
    };
};