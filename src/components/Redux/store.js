import { configureStore } from "@reduxjs/toolkit";
import dataReducer from './data/dataSlice'

const store = configureStore({
    reducer: {
      Data: dataReducer,
    }
})

export default store