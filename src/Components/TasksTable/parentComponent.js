import React, { useEffect, useState } from 'react';

//redux
import { useDispatch, useSelector } from "react-redux";

//modalSlice
import { openModal } from "../../Store/popUpSlice";
import { resetTaskUpdatedToggle } from "../../Store/addEditAndDeleteSlice"

//chilled component
import TaskTable from './tableOfTasks';

//styles
import './styles/table.css'

const App = () => {
  //redux
  const dispatch = useDispatch()
  const { tasks, isTasksUpdated } = useSelector(state => state.taskSlice)

  //states
  const [editingTask, setEditingTask] = useState(null);

  //listen to tasks update to set localStorage
  useEffect(() => {
    if (isTasksUpdated) {
      localStorage.setItem('tasks', JSON.stringify(tasks))
    }
    dispatch(resetTaskUpdatedToggle())
  }, [isTasksUpdated])

  const handleEdit = (task) => {
    dispatch(openModal({
      componentName: "addEditTask",
      modalType: "edit",
      taskId: task.id,
      tittle: 'Edit task',
      modalData: 'data dummy '
    }))
  };

  const handleDelete = (task) => {
    dispatch(openModal({
      componentName: "delete",
      modalType: "delete",
      taskId: task.id,
      tittle: 'Are you sure you want to delete this task'
    }))
  };

  const handleCreate = () => {
    dispatch(openModal({
      componentName: "addEditTask",
      modalType: "add",
      taskId: tasks.length + 1,
      tittle: 'Add task',

    }))

  }

  console.log(tasks)
  return (
    <div>
      <div className='titleAndbutton-cont mt-auto d-flex justify-content-between mb-5' >
        <h2>Task List</h2>
        <button className='createRow-butt' onClick={() => handleCreate()}>Create New Task</button>
      </div>


      <TaskTable
        tasks={localStorage.getItem('tasks') ? JSON.parse(localStorage.getItem('tasks')) : tasks}
        handleEdit={handleEdit}
        onDelete={handleDelete}
        onEditRequest={(task) => setEditingTask(task)}
        editingTask={editingTask}
      />
    </div>
  );
};

export default App;