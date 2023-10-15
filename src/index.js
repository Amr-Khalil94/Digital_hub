//react dom
import ReactDOM from "react-dom/client";

//router dom v6
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

//confg
import reportWebVitals from "./reportWebVitals";

//redux
import { Provider } from "react-redux";
import store from "./Store";


// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";

// Bootstrap Bundle JS
import "bootstrap/dist/css/bootstrap.min.css";

//style
import "./index.css";

//component - Login
import Login from "./Components/Login/login";

//Modal
import Modal from "./Components/reuseableComponents/centerlizeModal/popUp";

//component - Table tasks
import TasksTable from "./Components/TasksTable/parentComponent";

//routing
const routes = createBrowserRouter([
  {
    path: "/",
    element: (
      <div className="app-container p-5">
        <Outlet />
        <Modal />
      </div>
    ),
    errorElement: <h4>page not found</h4>,
    children: [
      { index: true, element: <TasksTable /> },
      {
        path: "/tableTasks",
        element: <TasksTable />,
      },
      {
        path: "/login",
        element: <Login />,
      },
    ]

  }
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <RouterProvider router={routes} />
  </Provider>
);


reportWebVitals();
