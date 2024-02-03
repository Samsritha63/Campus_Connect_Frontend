import { ADD_USER_INFO } from "../constants/actionTypes";
const initialState = {
    user_id: "",
    name: "",
    contact_no: "",
    email_id: "",
    roll_no: "",
    can_add_event: false,
    can_add_coupons: false,
    password: ""
}
const userInfoReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_USER_INFO:
            return {
                ...state,
                ...action.payload
            };
        case GET_USER_INFO:
            return state;
        default:
            return state;
    }
}
export default userInfoReducer;