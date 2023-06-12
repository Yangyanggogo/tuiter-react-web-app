import { createSlice } from "@reduxjs/toolkit";
import tuits from "./tuits.json";

const exploreTuitsSlice = createSlice({
    name: 'tuits',
    initialState: { tuits }
})

export default exploreTuitsSlice.reducer