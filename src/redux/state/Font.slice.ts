import { createSlice } from '@reduxjs/toolkit';

export const Fontslice = createSlice({
    name: 'font',
    initialState: 'font-serif',
    reducers: {
        setFont( state, action ):string {
            return action.payload
        } 

    }
})

export const { setFont } = Fontslice.actions;

export default Fontslice.reducer;
