import React from 'react';

//redux
import { useDispatch } from "react-redux";
import { openModal } from '../../Store/popUpSlice';

//mui
import { IconButton } from '@mui/material';

//mui icons
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';


const Task = ({ task, onDelete }) => {
    //redux
    const dispatch = useDispatch()

    return (
        <div className='row'>
            <div className='d-flex justify-content-between'>
                <span>{task.description}</span>
                <span>{task.status}</span>

                <div >
                    <IconButton onClick={() => dispatch(openModal({
                        componentName: "addEditTask",
                        modalType: "view",
                        taskId: task.id,
                        tittle: 'View task',
                        modalData: task.description,
                        status: task.status
                    }))}>
                        <RemoveRedEyeIcon />
                    </IconButton>
                    <IconButton onClick={() => dispatch(openModal({
                        componentName: "addEditTask",
                        modalType: "edit",
                        taskId: task.id,
                        tittle: 'Edit task',
                        modalData: task.description,
                        status: task.status
                    }))}
                        className='text-primary'>
                        <EditIcon />
                    </IconButton>

                    <IconButton onClick={onDelete} className="text-danger">
                        <DeleteIcon />
                    </IconButton>
                </div>

            </div>

        </div>
    );
};

export default Task;
