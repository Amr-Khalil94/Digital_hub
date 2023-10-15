import React from 'react';

//mui
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Task from './addEditDelete';


const TaskTable = ({ tasks, onDelete }) => {

    const rows = [];

    // Group tasks into pairs
    for (let i = 0; i < tasks?.length; i += 2) {
        rows.push(tasks.slice(i, i + 2));
    }

    return (
        <TableContainer component={Paper}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>
                            <div className='d-flex justify-content-between'>
                                <span>Description</span>
                                <span>Status</span>
                                <span>Actions</span>
                            </div>
                        </TableCell>

                        <TableCell>
                            <div className='d-flex justify-content-between'>
                                <span>Description</span>
                                <span>Status</span>
                                <span>Actios</span>
                            </div>
                        </TableCell>
                    </TableRow>

                </TableHead>

                <TableBody>
                    {rows.map((row, rowIndex) => (
                        <TableRow key={rowIndex}>
                            {row.map((task) => (
                                //change background color depend on status dinamic
                                <TableCell key={task.id} className={task.status.substring(0, 2)}>
                                    <Task task={task}
                                        onDelete={() => onDelete(task)} />
                                </TableCell>

                            ))}
                        </TableRow>
                    ))}
                </TableBody>

            </Table>
        </TableContainer >
    );
};

export default TaskTable;
