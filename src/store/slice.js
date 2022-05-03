import {createSlice} from "@reduxjs/toolkit";

const marsSlice = createSlice({
    name: "mars",
    initialState: {
        photos: [],
        rovers: [],
        roverSelected: '',
    },
    reducers: {
        setPhoto(state, action) {
            state.photos = action.payload;
        },
        setRovers(state, action) {
            state.rovers = action.payload;
        },
        setRover(state, action) {
            state.roverSelected = action.payload;
        },
    }
})

export default marsSlice.reducer
export const { setPhoto, setRovers, setRover } = marsSlice.actions