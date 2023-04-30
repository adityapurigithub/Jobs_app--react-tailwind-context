import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useGlobalContext } from "../context/GlobalContext";
import loader from "../assets/loader.svg";

// please dont mind the style of this page

const JobDetail = () => {
  const { getJobDetails, loading, jobDetails } = useGlobalContext();

  const { id } = useParams();

  const [showFullText, setShowFullText] = useState(false);

  useEffect(() => {
    getJobDetails(id);
    console.log("details");
  }, []);

  const taglessDesc = `${jobDetails?.description
    ?.toString()
    .replace(/<[^>]*>/g, "")}`;
  console.log(taglessDesc);

  return (
    <>
      {loading ? (
        <img
          className="w-20 absolute inset-0 top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]"
          src={loader}
        />
      ) : (
        <div className="job-details md:text-left text-center flex md:flex-row flex-col  md:items-start items-center  gap-4 w-full md:max-w-3xl mx-auto">
          <img
            className="md:h-48 h-36 object-contain rounded-xl my-4"
            src={jobDetails.company_logo}
            alt="logo"
          />
          <section className="detail flex flex-col gap-2 ">
            <h2 className="name text-2xl font-bold">
              Company: {jobDetails.company_name}
            </h2>
            <h3 className="desc text-xl p-4 md:max-h-[400px] max-h-[250px] overflow-auto leading-8">
              Job Description:
              {showFullText ? taglessDesc : taglessDesc.substring(0, 450)}
              <span
                className={`text-xs font-semibold cursor-pointer`}
                onClick={() => setShowFullText(!showFullText)}
              >
                {showFullText ? "...Show Less" : " ...Show Full "}
              </span>
            </h3>
            <h3 className="text-green-400 font-semibold">
              Title: {jobDetails.title}
            </h3>
            <h4 className="location uppercase text-blue-400 italic ">
              {jobDetails.location}
            </h4>
          </section>
        </div>
      )}
    </>
  );
};

export default JobDetail;
