import { configureStore } from "@reduxjs/toolkit";

//popUp Slices
import loginSlice from "./loginSlice"
import popUpSlice from "./popUpSlice";
import taskSlice from "./addEditAndDeleteSlice"

export default configureStore({
  reducer: {
    login: loginSlice,
    popUpSlice: popUpSlice,
    taskSlice: taskSlice
  },
});
