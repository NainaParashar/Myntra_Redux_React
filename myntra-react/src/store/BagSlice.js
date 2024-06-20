import {createSlice} from "@reduxjs/toolkit";





const BagSlice=createSlice({

    name:"bag",
    initialState:[],
    reducers:{
        addBagItem:(state,action)=>{

            state.push(action.payload);
        },
        removeBagItem:(state,action)=>{
          return state.filter(id=>{
            id!==action.payload;
          })
        }
    }
});

export const bagActions = BagSlice.actions;
export  default BagSlice;