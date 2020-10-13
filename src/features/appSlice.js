import { createSlice } from '@reduxjs/toolkit';

export const appSlice = createSlice({
  name: 'app',
  initialState: {
    channelId:null,
    channelName:null
  },
  reducers: {
    setChannelInfo:(state,action)=>{
       state.app =action.payload;
    },
  },
});

export const {setChannelInfo} = appSlice.actions;



export const selectChannelId = state => state.app.channelId;
export const selectChannelName=state=>state.app.channelName;


export default appSlice.reducer;