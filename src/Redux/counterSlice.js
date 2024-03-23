import { createSlice } from "@reduxjs/toolkit";
import Counter from "../component/Counter";



const counterSlice = createSlice({
    name:'counterApp',
    initialState:{
        value:0  //name of state:value

    },
    // actions are created inside this reducers key as object
    reducers:{
        //logics to update state
       
          // function to increment number
        increment:(state,action) => {
            state.value += action.payload

        },

         //function to decrement number
        decrement:(state,action) =>{
            state.value -= action.payload
        },

        // function to reset number

        reset:(state) => {
            state.value = 0
        }
        


    }
})


//reducer is required by component to change the state value
export const{increment,decrement,reset} = counterSlice.actions

//reducer is required to store to change the state value

export default counterSlice.reducer