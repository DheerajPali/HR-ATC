import { Link } from "react-router-dom";
import "../assets/css/commanStyling.css";
import { Select, Button } from "antd";
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
const yeatOption = [
  { value: "2024", label: "2024" },
  { value: "2025", label: "2025" },
  { value: "2026", label: "2026" },
  { value: "2027", label: "2027" },
  { value: "2028", label: "2028" },
];

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
              <Select
                placeholder="Select Department"
                className="drpFolderManagement"
                style={{ width: "100%" }}
                options={departmentOptions}
              />
            </div>

            {/* New Year Dropdown */}
            <div className="flex flex-col flex-1">
              <label className="mb-2 font-medium">New Year</label>
              <Select
                placeholder="Select New Year"
                className="drpFolderManagement"
                style={{ width: "100%" }}
                options={yeatOption}
              />
            </div>

            {/* Create Year Button */}
            <div className="flex items-end">
              <Button className="w-full sm:w-auto">Create Year</Button>
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="mt-10 flex justify-between">
            <Link to={"/resumefetching"} className="backBtn">
              Back
            </Link>
            <Link to={"/UploadResume"} className="btn">
              Next
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default FolderManagement; // ✅ this line is REQUIRED
