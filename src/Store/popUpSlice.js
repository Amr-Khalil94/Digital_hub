import { createSlice } from "@reduxjs/toolkit";

const modalSlice = createSlice({
    initialState: {
        isOpen: false,
        popUpTitle: "",
        modalId: "",
        modalType: "",
        componentName: null,
        addDataArg: '',
        modalData: null,
        status: '',
    },
    name: "modal",
    reducers: {
        openModal: (state, action) => {
            console.log(action.payload)
            state.modalData = action.payload.modalData
            state.isOpen = true;
            state.modalType = action.payload.modalType;
            state.componentName = action.payload.componentName;
            state.popUpTitle = action.payload.tittle;
            state.modalId = action.payload.taskId;
            state.status = action.payload.status
        },
        closeModal: (state, action) => {
            state.isOpen = false;
        },
    },
});

export const { openModal, closeModal, modalId, modalType, deleteURL, subTitlle } =
    modalSlice.actions;
export default modalSlice.reducer;
