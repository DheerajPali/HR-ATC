import { Link } from "react-router-dom";
import "../assets/css/commanStyling.css";
import { Select } from "antd";
import allData from "../assets/comman";
const ResumeFetching = () => {
  return (
    <>
      {/* Header Section */}
      <div className="w-full bg-slate-200 min-h-[215px] px-4 sm:px-8 md:px-10 py-12">
        <h2 className="text-2xl sm:text-3xl text-center font-semibold">
          Welcome to the Candidate Screening Application 👋
        </h2>
        <p className="w-full mt-5 text-sm sm:text-base text-center px-4 sm:px-16 md:px-32 lg:px-60 leading-6 sm:leading-7">
          This application allows you to fetch resumes from a mail account,
          upload your resume, view job descriptions, and compare your resume
          against job descriptions to find the best match. Use the sidebar to
          navigate between pages.
        </p>
      </div>

      {/* Resume Fetching Section */}

      <div className="h-106 py-10 px-4 sm:px-10 md:px-20">
        <div className="w-full max-w-[743px] h-[425px] mx-auto  sm:flex-row rounded-xl bg-white shadow-md p-6">
          <div className="flex items-center justify-between mb-5">
            <h3 className="text-2xl font-semibold mb-4 sm:mb-0">DocVault</h3>
            <div className="text-center sm:text-left">
              <label className="text-gray-600">Total Resumes:</label>
              <span className="ml-2 font-medium text-blue-600/100 dark:text-sky-400/100 font-semibold">
                310
              </span>
            </div>
          </div>

          <hr></hr>

          <div className="flex items-center justify-between mb-2 mt-10">
            <h3 className="text-base mb-4 sm:mb-0 font-normal">Department</h3>
            <div className="text-center sm:text-left">
              <label className="text-gray-600">Resumes :</label>
              <span className="ml-2 font-medium text-blue-600/100 dark:text-sky-400/100 font-semibold">
                30
              </span>
            </div>
          </div>

          <div className="drp-Container">
            <Select
              placeholder="Select Department"
              className="w-full"
              style={{ flex: 1 }}
              options={allData.departmentData}
            />
          </div>

          <div className="flex items-center justify-between mb-2 mt-10">
            <h3 className="text-base mb-4 sm:mb-0 font-normal">Year</h3>
            <div className="text-center sm:text-left">
              <label className="text-gray-600">Resumes :</label>
              <span className="ml-2 font-medium text-blue-600/100 dark:text-sky-400/100 font-semibold">
                10
              </span>
            </div>
          </div>

          <div className="drp-Container">
            <Select
              placeholder="Select New Year"
              className="w-full"
              style={{ flex: 1 }}
              options={allData.yearOption}
            />
          </div>

          <div class="flex flex-col sm:flex-row justify-end items-center gap-4 mt-10">
            <Link
              id="nextBtn"
              to={"/foldermanagement"}
              class="text-white font-semibold py-2 px-6 rounded hover:bg-blue-600 transition"
            >
              NEXT ▶
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default ResumeFetching; // ✅ this line is REQUIRED
