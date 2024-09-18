const initialState = {
    femaleProductTypes: [],
    maleProductTypes: [],
    filters: {
        gender: 'female',
        femaleTypeIndex: 0,
        maleTypeIndex: 0,
        femaleSubTypeIndex: 0,
        maleSubTypeIndex: 0
    }
};

const productTypeReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'NEW_PRODUCT_TYPE': {
            if (action.payload.gender === 'female') {
                if (state.femaleProductTypes.find(pt => pt.name === action.payload.name)) {
                    return state
                }
                return {
                    ...state,
                    femaleProductTypes: [
                        ...state.femaleProductTypes,
                        action.payload
                    ]
                };
            }

            if (state.maleProductTypes.find(pt => pt.name === action.payload.name)) {
                return state
            }
            return {
                ...state,
                maleProductTypes: [
                    ...state.maleProductTypes,
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
        case 'ADD_NEW_SUB_TYPE': {
            let product = undefined
            if (state.filters.gender === 'female') {
                product = state.femaleProductTypes.find(p => p.name === action.payload.name)
            } else {
                product = state.maleProductTypes.find(p => p.name === action.payload.name)
            }

            if (!product) {
                return state
            }

            if (!product.subTypes) {
                product.subTypes = []
            }

            product.subTypes.push({
                name: action.payload.subTypeName
            })

            console.log(state)

            return {
                ...state
            };
        }
        case 'CHANGE_FEMALE_SUBTYPE_SELECTED_INDEX': {
            return {
                ...state,
                filters: {
                    ...state.filters,
                    femaleSubTypeIndex: action.payload
                }
            };
        }
        case 'CHANGE_MALE_SUBTYPE_SELECTED_INDEX': {
            return {
                ...state,
                filters: {
                    ...state.filters,
                    maleSubTypeIndex: action.payload
                }
            };
        }
        case 'ADD_NEW_PRODUCT': {
            let subTypeObj = undefined
            if (state.filters.gender === 'female') {
                const product = state.femaleProductTypes[state.filters.femaleTypeIndex]
                if (!product) {
                    return state
                }
                subTypeObj = product.subTypes[state.filters.femaleSubTypeIndex]
            } else {
                const product = state.maleProductTypes[state.filters.maleTypeIndex]
                if (!product) {
                    return state
                }
                subTypeObj = product.subTypes[state.filters.maleSubTypeIndex]
            }

            if (!subTypeObj) {
                return state
            }

            if (!subTypeObj.products) {
                subTypeObj.products = []
            }

            console.log('adding1', subTypeObj)

            subTypeObj.products.push({
                article: action.payload.article,
                price: action.payload.price,
                imgUrl: action.payload.imgUrl,
            })

            console.log('adding', state)

            return {
                ...state
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

export const changeFemaleSubTypeSelectedIndex = (payload) => {
    return {
        type: 'CHANGE_FEMALE_SUBTYPE_SELECTED_INDEX',
        payload
    };

};

export const changeMaleSubTypeSelectedIndex = (payload) => {
    return {
        type: 'CHANGE_MALE_SUBTYPE_SELECTED_INDEX',
        payload
    };
};

export const addNewSubType = (payload) => {
    return {
        type: 'ADD_NEW_SUB_TYPE',
        payload
    };
};

export const addNewProduct = (payload) => {
    return {
        type: 'ADD_NEW_PRODUCT',
        payload
    };
};

export default productTypeReducer;