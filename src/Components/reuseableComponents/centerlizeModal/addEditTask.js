//react and hooks
import React, { useEffect } from "react";

//formik
import { useFormik } from "formik";

//redux
import { useDispatch, useSelector } from "react-redux";
import { closeModal } from "../../../Store/popUpSlice";
import { addTask, editTask } from "../../../Store/addEditAndDeleteSlice"

//mui
import DialogActions from "@mui/material/DialogActions";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default (props) => {
    //redux
    const dispatch = useDispatch();
    const { addDataArg, modalId, modalData, modalType, status } = useSelector(
        (state) => state.popUpSlice
    );
    const { tasks } = useSelector(state => state.taskSlice)

    //useEffect
    useEffect(() => {
        console.log(modalData);
        if (modalType === 'view' || modalType === 'edit') {
            formik.setFieldValue('description', modalData)
            formik.setFieldValue('id', modalId)
            formik.setFieldValue('status', status)
        }
    }, [addDataArg, modalId, modalData]);

    //formik
    const formik = useFormik({
        initialValues: {
            description: "",
            status: "",
            id: modalType === 'add' ? tasks.length + 1 : '',
        },
        onSubmit: (values) => {
            if (modalType === 'add') {
                dispatch(addTask(values))
            } else {
                dispatch(editTask(values))
            }
            dispatch(closeModal())
        },
    });

    return (
        <form onSubmit={formik.handleSubmit} className="form-cont">
            <TextField
                disabled={modalType === 'view'}
                fullWidth
                id="description"
                name="description"
                label="Description"
                variant="filled"
                value={formik.values.description}
                onChange={formik.handleChange}
                helperText={
                    formik.touched.description && formik.errors.description
                        ? formik.errors.description
                        : null
                }
            />

            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Status</InputLabel>
                <Select
                    disabled={modalType === 'view'}
                    labelId="demo-simple-select-label"
                    name="status"
                    id="status"
                    value={formik.values.status}
                    label="status"
                    onChange={formik.handleChange}
                >
                    <MenuItem value='Not Started'>Not Started</MenuItem>
                    <MenuItem value='In progress'>In progress</MenuItem>
                    <MenuItem value='Finished'>Finished</MenuItem>
                </Select>
            </FormControl>

            <DialogActions className="btt-container">
                <Button
                    className="cancel"
                    autoFocus
                    onClick={() => {
                        dispatch(closeModal());
                    }}
                >
                    Cancel
                </Button>
                <Button type="submit" className="submit">
                    Submit
                </Button>
            </DialogActions>
        </form>
    );
};
