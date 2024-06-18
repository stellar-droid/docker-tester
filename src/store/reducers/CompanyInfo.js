import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    companyName: "fsdfs",
    companyAddress: "sdf",
    companyContact: { email: "esds@esds.co.in", phone: "1800 209 3006" }
};

const portfolio = createSlice({
    name: 'portfolio',
    initialState,
    reducers: {
        companyNameSet(state, action) {
            state.companyName = action.payload
        },
        companyAddressSet(state, action) {
            state.companyAddress = action.payload
        },
        companyContactSet(state, action) {
            state.companyContact = action.payload
        },
    }
});

export default portfolio.reducer;

export const { companyNameSet, companyAddressSet, companyContactSet } = portfolio.actions;
