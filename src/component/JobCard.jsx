import React from "react";
import { Link, useNavigate } from "react-router-dom";
const JobCard = ({ job, handleJobDetails }) => {
  const navigate = useNavigate();

  return (
    <Link
      className="md:w-[85%] lg:w-[65%] md:min-h-[100px] md:p-4 p-1 w-full mx-auto flex justify-between shadow-md shadow-slate-600  rounded-md hover:scale-[102%] transition-all pr-2 cursor-pointer"
      key={job._id}
      to={`/job-details/${job.id}`}
    >
      <div className="company-details flex gap-1 items-center">
        <img
          src={job.company_logo}
          className="text-black bg-slate-200 rounded-xl md:h-24 md:w-24 h-16 w-16 border-r-2 p-1 md:mr-4 mr-1 object-contain  "
          alt={job.company_name}
        />
        <div className="details max-w-[400px] italic">
          <div className="company flex flex-col md:gap-2 gap-[2px]">
            <h2 className="md:text-xl text-sm font-semibold flex md:items-center gap-1">
              <p className="sm:flex hidden">Company:</p>{" "}
              <p className="text-gray-400 ">{job.company_name}</p>
            </h2>
            <h3 className="lg:text-base md:text-sm text-[12px] md:w-auto w-[165px] font-semibold">
              {job.title}
            </h3>
            <p className="text-blue-400 text-[12px] md:text-sm font-bold uppercase">
              {job.location}
            </p>
          </div>
        </div>
      </div>

      <div className="font-mono date w-[25%] text-right md:text-sm text-[11px] font-semibold p-1 mr-1">
        Posted On: {job.date.slice(0, 10)}
      </div>
    </Link>
  );
};

export default JobCard;
