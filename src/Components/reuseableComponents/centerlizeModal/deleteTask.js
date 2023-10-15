import React from "react";

//redux
import { useDispatch, useSelector } from "react-redux";
import { closeModal } from "../../../Store/popUpSlice";
import { deleteTask } from "../../../Store/addEditAndDeleteSlice"

//mui
import DialogActions from "@mui/material/DialogActions";
import Button from "@mui/material/Button";

export default (props) => {
    //redux
    const dispatch = useDispatch();
    const { modalId } = useSelector(
        (state) => state.popUpSlice);

    const handleSubmitDelete = () => {
        dispatch(deleteTask(modalId))
        dispatch(closeModal())
    };

    return (
        <DialogActions className="delete-btt-container">
            <Button
                className="cancel"
                onClick={() => {
                    dispatch(closeModal());
                }}
            >
                Cancel
            </Button>
            <Button onClick={() => handleSubmitDelete()} className="submit">
                Delete
            </Button>
        </DialogActions>
    );
};
