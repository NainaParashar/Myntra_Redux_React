import {createSlice,configureStore} from "@reduxjs/toolkit";
import {DEFAULT_ITEM} from "../data/items";





const itemsSlice=createSlice({

    name:"items",
    initialState:[],
    reducers:{
        addItems:(state,action)=>{

            return action.payload;
        }
    }
});

export const itemsActions = itemsSlice.actions;
export  default itemsSlice;