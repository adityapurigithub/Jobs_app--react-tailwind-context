import React, { useEffect } from "react";
import JobCard from "./JobCard";
import { useGlobalContext } from "../context/GlobalContext";
import loader from "../assets/loader.svg";

const Home = () => {
  const { jobs, getAllJobs, loading } = useGlobalContext();

  useEffect(() => {
    getAllJobs();
    console.log("app");
  }, []);
  return (
    <>
      {loading ? (
        <img
          className="w-20 absolute inset-0 top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]"
          src={loader}
        />
      ) : (
        <div className="w-full">
          <h1 className="m-10 text-4xl text-center font-extrabold">
            Recent Jobs
          </h1>

          <div className="jobs flex flex-col gap-5">
            {jobs.map((job) => (
              <JobCard job={job} />
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Home;
// {loading ? (
//     <img
//       className="w-28 absolute inset-0 top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]"
//       src={loader}
//     />
//   ) : (
//     <Outlet />
//   )}
