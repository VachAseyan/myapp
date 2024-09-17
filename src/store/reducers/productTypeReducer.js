const initialState = {
    productTypes: [],
    filters: {
        gender: 'female',
        femaleTypeIndex: 0,
        maleTypeIndex: 0
    }
};

const productTypeReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'NEW_PRODUCT_TYPE': {
            if (state.productTypes.find(pt => pt.name === action.payload.name)) {
                return state
            }
            return {
                ...state,
                productTypes: [
                    ...state.productTypes,
                    action.payload
                ]
            };
        }
        case 'CHANGE_GENDER_FILTER': {
            return {
                ...state,
                filters: {
                    ...state.filters,
                    gender: action.payload
                }
            };
        }
        case 'CHANGE_MALE_SELECTED_PRODUCT': {
            return {
                ...state,
                filters: {
                    ...state.filters,
                    maleTypeIndex: action.payload
                }
            };
        }
        case 'CHANGE_FEMALE_SELECTED_PRODUCT': {
            return {
                ...state,
                filters: {
                    ...state.filters,
                    femaleTypeIndex: action.payload
                }
            };
        }
        default:
            return state;
    }
};

export const createNewProductType = (payload) => {
    return {
        type: 'NEW_PRODUCT_TYPE',
        payload
    };
};

export const changeGenderFilter = (payload) => {
    return {
        type: 'CHANGE_GENDER_FILTER',
        payload
    };

};

export const changeFemaleSelectedIndex = (payload) => {
    return {
        type: 'CHANGE_FEMALE_SELECTED_PRODUCT',
        payload
    };

};

export const changeMaleSelectedIndex = (payload) => {
    return {
        type: 'CHANGE_MALE_SELECTED_PRODUCT',
        payload
    };

};



export default productTypeReducer;