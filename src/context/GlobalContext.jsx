import { createContext, useContext, useReducer } from "react";

import AppReducer from "./AppReducer";

const initialState = {
  jobs: [],
  jobDetails: {},
  loading: false,
};

const baseURL = "https://remote-jobs-api.p.rapidapi.com";
const options = {
  method: "GET",
  headers: {
    "content-type": "application/octet-stream",
    "X-RapidAPI-Key": import.meta.env.VITE_JOBS_API_KEY,
    "X-RapidAPI-Host": "remote-jobs-api.p.rapidapi.com",
  },
};

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  async function getAllJobs() {
    // this dispatch is used to set loading state at first...
    dispatch({
      type: "FETCHING",
    });

    const response = await fetch(`${baseURL}/jobs`, options);

    const data = await response.json();
    console.log(data);

    if (response.ok) {
      //  if OK then this dispatch ...

      dispatch({
        type: "FETCHED",
        payload: data.items,
      });
    }
  }

  async function getJobDetails(id) {
    // console.log(id);

    dispatch({
      type: "FETCHING",
    });

    const response = await fetch(`${baseURL}/job/${id}`, options);

    const data = await response.json();

    console.log(data);

    if (response.ok) {
      dispatch({
        type: "FETCHED_JOB_DETAILS",
        payload: data,
      });
    }
  }

  return (
    <GlobalContext.Provider
      value={{
        jobs: state.jobs,
        loading: state.loading,
        jobDetails: state.jobDetails,
        getAllJobs,
        getJobDetails,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => useContext(GlobalContext);
