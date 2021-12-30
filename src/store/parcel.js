import { createSlice } from "@reduxjs/toolkit";

// const initialParcelState = [
//   {
//     parcel_info: "",
//     parcel_cost: "",
//     parcel_starting_location: "",
//     parcel_ending_location: "",
//     sender_name: "",
//     sender_address: "",
//     sender_phone: "",
//     receiver_name: "",
//     receiver_address: "",
//     receiver_phone: "",
//   },
// ];
const initialParcelState = {
  parcelDataa: [],
};

//const arr = [];
const parcelSlice = createSlice({
  name: "parcel",
  initialState: initialParcelState,
  reducers: {
    add(state, action) {
      const parcelPayload = action.payload;
      // state.parcelDataa = parcelPayload.parcel_info;
      state.parcelDataa.push(parcelPayload);
      console.log(state.parcelDataa);
    },
  },
});
export const parcelAction = parcelSlice.actions;
export default parcelSlice.reducer;
