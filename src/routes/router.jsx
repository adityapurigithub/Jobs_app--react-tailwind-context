import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import JobDetail from "../component/JobDetail";
import Home from "../component/Home";
import SearchJobs from "../component/SearchJobs";

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/job-details/:id",
        element: <JobDetail />,
      },
      {
        path: "/search-job/:id",
        element: <SearchJobs />,
      },
    ],
  },
]);

export default router;
