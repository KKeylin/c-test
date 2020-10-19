import { createSelector } from "reselect";

const getState = (state) => state.data;

export const getFlatList = createSelector([getState], (data) => {
    return data.reduce((acc, cur) => {
        return acc.concat(cur.columns.map(({ title, url }) => ({ title, url })));
    }, []);
});
