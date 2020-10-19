import * as actionType from "../actionTypes";

const initialState = {
    loaded: false,
    loading: false,
    data: [],
    error: null,
};

export default function todosReducer(state = initialState, action) {
    switch (action.type) {
        case actionType.FETCH_ALL:
            return {
                ...state,
                loading: true,
            };

        case actionType.FETCH_ALL_SUCCESS:
            const rows = Object.values(action.payload[0]);

            return {
                ...state,
                loading: false,
                error: null,
                loaded: true,
                data: [...state.data, ...rows],
            };

        case actionType.FETCH_ALL_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload.error,
            };

        case actionType.UPDATE_ARTICLE:
            const { itemIndex, value } = action.payload;
            const newData = [...state.data];
            newData[itemIndex[0]].columns[itemIndex[1]].title = value;
            return {
                ...state,
                data: newData,
            };

        case actionType.DELETE_ARTICLE:
            const { itemID } = action.payload;
            const Data = [...state.data];
            Data[itemID[0]].columns.splice(itemID[1], 1);
            return {
                ...state,
                data: Data,
            };

        default:
            return state;
    }
}
