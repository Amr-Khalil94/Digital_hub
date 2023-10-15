//react
import React from "react";

//material ui
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";


//redux
import { useDispatch, useSelector } from "react-redux";
import { closeModal } from "../../../Store/popUpSlice"

//components
import Delete from "./deleteTask";
import AddEditTask from "./addEditTask"


//styles
import "./popUp.css";

export default () => {
  //redux
  const dispatch = useDispatch();
  const {
    isOpen,
    popUpTitle,
    componentName,
  } = useSelector((state) => state.popUpSlice);


  //dynamic component
  const componentsLookUp = {
    addEditTask: AddEditTask,
    delete: Delete,
  };
  let renderComponent;
  if (componentName) {
    const SelectedComponent = componentsLookUp[componentName];
    console.log(typeof SelectedComponent);
    if (SelectedComponent) {

      renderComponent = <SelectedComponent />;
    }
  }

  return (
    <Dialog
      className="popUp-parent"
      open={isOpen}
      onClose={() => {
        dispatch(closeModal());
      }}
      aria-labelledby="responsive-dialog-title"
    >
      <DialogTitle id="responsive-dialog-title" className="ps-0">
        {popUpTitle}
      </DialogTitle>

      <DialogContent className="p-0">{renderComponent}</DialogContent>
    </Dialog>
  );
};
