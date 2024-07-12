import { createSlice } from '@reduxjs/toolkit';


export interface HistoryData {
    text: string;
    data: string;
}

export const Historyslice = createSlice({
    name: 'history',
    initialState: [
        {
            text: '',
            data: ''
        }
    ],
    reducers: {
        setHistory: (state, action) => {
            let history: HistoryData = action.payload;
            state.push(history);
        }

    }
})

export const { setHistory } = Historyslice.actions;

export default Historyslice.reducer;
