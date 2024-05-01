import { createSlice } from "@reduxjs/toolkit";


const userSlice = createSlice({
    name:"user",
    initialState:{
        userData:[]
    },reducers:{
        addUser: (state , action) =>{
            state.userData.push(action.payload);
        }
    }
});

export const  {addUser} = userSlice.actions;
export default userSlice.reducer;