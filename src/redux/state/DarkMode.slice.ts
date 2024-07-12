import { createSlice } from '@reduxjs/toolkit';
import { set } from 'react-hook-form';

export const DarkModeslice = createSlice({
    name: 'drakMode',
    initialState: false,
    reducers: {
        setDarkMode: (state, action):boolean => {
            return action.payload;
        }

    }
})

export const { setDarkMode } = DarkModeslice.actions;

export default DarkModeslice.reducer;
