import { Link } from "react-router-dom";
import "../assets/css/commanStyling.css";
import { Select, Button } from "antd";
import allData from "../assets/comman";
const FolderManagement = () => {
  return (
    <>
      {/* Header Section */}
      <div className="w-full bg-slate-200 min-h-[215px] px-4 sm:px-8 md:px-10 py-12">
        <h2 className="text-2xl sm:text-3xl text-center font-semibold">
          Folder Management 🗳️️
        </h2>
        <p className="w-full mt-5 text-sm sm:text-base text-center px-4 sm:px-16 md:px-32 lg:px-60 leading-6 sm:leading-7">
          Reach out to the candidate by sending an official interview
          invitation. Give them the opportunity to connect and learn more about
          the role. Start the conversation and move one step closer to finding
          the right fit.
        </p>
      </div>

      {/* Folder Management Section */}

      <div className="py-10 px-4 sm:px-10 md:px-20">
        <div className="w-full max-w-[1250px] mx-auto rounded-xl bg-white shadow-md p-12">
          {/* Responsive container for controls */}
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
            {/* Department Dropdown */}
            <div className="flex flex-col flex-1">
              <label className="mb-2 font-medium">
                Choose Department (or Create New)
              </label>
              <div className="drp-Container">
                <Select
                  placeholder="Select Department"
                  className="drpFolderManagement"
                  style={{ width: "100%" }}
                  options={allData.departmentData}
                />
              </div>
            </div>

            {/* New Year Dropdown */}
            <div className="flex flex-col flex-1">
              <label className="mb-2 font-medium">New Year</label>
              <div className="drp-Container">
                <Select
                  placeholder="Select New Year"
                  className="drpFolderManagement"
                  style={{ width: "100%" }}
                  options={allData.yearOption}
                />
              </div>
            </div>

            {/* Create Year Button */}
            <div className="flex items-end" id="createUserBtn">
              <Button className="w-40">Create Year</Button>
            </div>
          </div>

          {/* Navigation Buttons */}
          <div class="flex flex-col sm:flex-row justify-between items-center gap-4 mt-10">
            <Link
              to={"/resumefetching"}
              class="border border-black text-black font-medium py-2 px-6 rounded hover:bg-gray-100 transition"
            >
              ◀ BACK
            </Link>
            <Link
              id="nextBtn"
              to={"/UploadResume"}
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

export default FolderManagement; // ✅ this line is REQUIRED
