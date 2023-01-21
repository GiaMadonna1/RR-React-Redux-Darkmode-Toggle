import { configureStore } from '@reduxjs/toolkit'
import toggleModeReducer from './ducks/toggleSlice'

export const store = configureStore({
    reducer: {
        mode: toggleModeReducer
    }
})