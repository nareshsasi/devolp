import * as types from "./actionTypes";


const initialState = {
    contacts: {},
    loading: false,
    error: null,

};

const contactReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.GET_CONTACTS_START:
            return {
                ...state,
                loading: true,
    };

    case types.GET_CONTACTS_SUCCESS:
        return {
            ...state,
            loading: false,
            error: action.payload
        };
        case types.GET_CONTACTS_FAIL:
            return {
                ...state,
                loading:false,
                error: action.payload
            }

            case types.DELETE_CONTACT_START:
                case types.ADD_CONTACT_START:
                    case types.EDIT_CONTACT_START:
                    
                return {
                    ...state,
                    loading: true,
                };
                case types.DELETE_CONTACT_SUCCESS:
                    case types.ADD_CONTACT_SUCCESS:
                        case types.EDIT_CONTACT_SUCCESS:
                    return {
                        ...state,
                        loading: false,
                    };
                    case types.DELETE_CONTACT_FAIL:
                        case types.ADD_CONTACT_FAIL:
                            case types.EDIT_CONTACT_FAIL:
                        return {
                            ...state,
                            loading: false,
                            error: action.payload,
                        };
            default:
                return state;
    }
};

export default contactReducer;