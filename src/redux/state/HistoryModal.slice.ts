import { createSlice } from '@reduxjs/toolkit';

export const HistoryModalslice = createSlice({
    name: 'historyModal',
    initialState: false,
    reducers: {
        setHistoryModal: (state):boolean => {
            return state = !state;
        }

    }
})

export const { setHistoryModal } = HistoryModalslice.actions;

export default HistoryModalslice.reducer;
