import { createSlice } from '@reduxjs/toolkit';

export const Searchslice = createSlice({
    name: 'searchSlice',
    initialState: 'hello',
    reducers: {
        setSearch(state, action):string {
            return action.payload;
        }
    }
})

export const { setSearch } = Searchslice.actions;

export default Searchslice.reducer;
