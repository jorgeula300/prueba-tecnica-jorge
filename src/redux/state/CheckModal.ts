import { createSlice } from '@reduxjs/toolkit';


export const CheckModal = createSlice({
    name: 'checkModal',
    initialState: false,
    reducers: {
        setCheckModal: (state, action):boolean => {
            return action.payload;
        }

    }
})

export const { setCheckModal } = CheckModal.actions;

export default CheckModal.reducer;
