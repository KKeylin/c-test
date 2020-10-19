import axios from "axios";
import * as actionType from "../actionTypes";

export const fetchData = () => {
    return (dispatch) => {
        dispatch(fetchDataStarted());

        axios
            .get(`https://storage.googleapis.com/aller-structure-task/test_data.json`)
            .then((res) => {
                dispatch(fetchDataSuccess(res.data));
            })
            .catch((err) => {
                dispatch(fetchDataFailure(err.message));
            });
    };
};

const fetchDataStarted = () => ({
    type: actionType.FETCH_ALL,
});

const fetchDataSuccess = (todo) => ({
    type: actionType.FETCH_ALL_SUCCESS,
    payload: {
        ...todo,
    },
});

const fetchDataFailure = (error) => ({
    type: actionType.FETCH_ALL_FAILURE,
    payload: {
        error,
    },
});

export const updateTitle = (itemIndex, value) => ({
    type: actionType.UPDATE_ARTICLE,
    payload: {
        itemIndex,
        value,
    },
});

export const deleteArticle = (itemID) => ({
    type: actionType.DELETE_ARTICLE,
    payload: {
        itemID,
    },
});
