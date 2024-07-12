import { configureStore } from '@reduxjs/toolkit'
import FontSlice from './state/Font.slice'
import Searchslice from './state/Search.slice'
import DarkModeSlice from './state/DarkMode.slice'
import HistorySlice from './state/History.slice'
import HistoryModalSlice from './state/HistoryModal.slice'
import CheckModal from './state/CheckModal'


export const store = configureStore({
  reducer:{
    FontSlice,
    Searchslice,
    DarkModeSlice,
    HistorySlice,
    HistoryModalSlice,
    CheckModal
  
  }
})


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch