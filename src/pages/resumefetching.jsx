import { Link } from "react-router-dom";
import "../assets/css/commanStyling.css";
import { Select } from "antd";
const departmentOptions = [
  { value: "Marketing", label: "Marketing" },
  {
    value: "Enterpise Integration",
    label: "Enterpise Integration",
  },
  {
    value: "Power Automate Developer",
    label: "Power Automate Developer",
  },
  { value: "Hamber", label: "Hamber" },
  {
    value: "Sales & Marketing",
    label: "Sales & Marketing",
  },
  {
    value: "Enterpise Developer",
    label: "Enterpise Developer",
  },
  { value: "CRM", label: "CRM" },
  {
    value: "AI",
    label: "AI",
  },
  {
    value: "Techinal Lead - India C",
    label: "Techinal Lead - India C",
  },
  {
    value: "Azure & Infra",
    label: "Azure & Infra",
  },
  {
    value: "Data & Analytics",
    label: "Data & Analytics",
  },
  {
    value: "Designing",
    label: "Designing",
  },
];

const yearOption = [
  { value: "2024", label: "2024" },
  { value: "2025", label: "2025" },
  { value: "2026", label: "2026" },
  { value: "2027", label: "2027" },
  { value: "2028", label: "2028" },
];
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
              options={departmentOptions}
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
              options={yearOption}
            />
          </div>

          <div className="mt-10 flex justify-end">
            <Link className="btn" to={"/foldermanagement"}>
              NEXT
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default ResumeFetching; // ✅ this line is REQUIRED
