import { Button, Select, Upload } from "antd";
import { useState } from "react";
import { Link } from "react-router-dom";
import { MaterialReactTable } from "material-react-table";

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

const handleDropDownOnChangeEvent = (e) => {
  console.log(e);
};

const column = [
  {
    accessorKey: "FileName", //normal accessorKey
    header: "FileName",
    size: 120,
  },
  {
    accessorKey: "ExistingSalary", //normal accessorKey
    header: "ExistingSalary",
    size: 140,
  },
  {
    accessorKey: "ExpeactedSalary", //normal accessorKey
    header: "ExpeactedSalary",
    size: 120,
  },
  {
    accessorKey: "ResignationPeriod", //normal accessorKey
    header: "ResignationPeriod",
    size: 140,
  },
  {
    accessorKey: "Commitment", //normal accessorKey
    header: "Commitment",
    size: 120,
  },
  {
    accessorKey: "Reference", //normal accessorKey
    header: "Reference",
    size: 140,
  },
];

const data = [
  {
    FileName: "File_1.pdf",
    ExistingSalary: "Rs 55,000",
    ExpeactedSalary: "Rs 75,000",
    ResignationPeriod: "45 Day",
    Commitment: "Lorium Lipsum",
    Reference: "NA",
  },
  {
    FileName: "File_2.pdf",
    ExistingSalary: "Rs 55,000",
    ExpeactedSalary: "Rs 75,000",
    ResignationPeriod: "45 Day",
    Commitment: "Lorium Lipsum",
    Reference: "NA",
  },
  {
    FileName: "File_3.pdf",
    ExistingSalary: "Rs 55,000",
    ExpeactedSalary: "Rs 75,000",
    ResignationPeriod: "45 Day",
    Commitment: "Lorium Lipsum",
    Reference: "NA",
  },
  {
    FileName: "File_4.pdf",
    ExistingSalary: "Rs 55,000",
    ExpeactedSalary: "Rs 75,000",
    ResignationPeriod: "45 Day",
    Commitment: "Lorium Lipsum",
    Reference: "NA",
  },
  {
    FileName: "File_5.pdf",
    ExistingSalary: "Rs 55,000",
    ExpeactedSalary: "Rs 75,000",
    ResignationPeriod: "45 Day",
    Commitment: "Lorium Lipsum",
    Reference: "NA",
  },
];

const Comparison = () => {
  const [departmentValue, setDepartmentValue] = useState("");
  const [yearValue, setYearValue] = useState("");
  return (
    <>
      {/* Header Section */}
      <div className="w-full bg-slate-200 min-h-[215px] px-4 sm:px-8 md:px-10 py-12">
        <h2 className="text-2xl sm:text-3xl text-center font-semibold">
          Talent Sync: Matching Skills to Roles 🕵️
        </h2>
        <p className="w-full mt-5 text-sm sm:text-base text-center px-4 sm:px-16 md:px-32 lg:px-60 leading-6 sm:leading-7">
          Reach out to the candidate by sending an official interview
          invitation. Give them the opportunity to connect and learn more about
          the role. Start the conversation and move one step closer to finding
          the right fit.
        </p>
      </div>

      <div className="py-10 px-4 sm:px-10 md:px-20">
        <div className="w-full max-w-[1250px] mx-auto rounded-xl bg-white shadow-md p-12">
          {/* Responsive container for controls */}
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
            {/* Department Dropdown */}
            <div className="flex flex-col flex-1">
              <label className="mb-2 font-medium">Department</label>
              <Select
                id="drpDepartment"
                placeholder="Select Department"
                className="drpFolderManagement"
                style={{ width: "100%" }}
                options={departmentOptions}
                onChange={(e) => handleDropDownOnChangeEvent(e)}
              />
            </div>

            {/* New Year Dropdown */}
            <div className="flex flex-col flex-1">
              <label className="mb-2 font-medium">Year</label>
              <Select
                id="drpYear"
                placeholder="Select Year"
                className="drpFolderManagement"
                style={{ width: "100%" }}
                options={yeatOption}
                onChange={(e) => handleDropDownOnChangeEvent(e)}
              />
            </div>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mt-10">
            {/* Department Dropdown */}
            <div className="flex flex-col flex-1">
              <label className="mb-2 font-medium">Resumes</label>
              <Select
                placeholder="Select Resumes"
                className="drpFolderManagement"
                style={{ width: "100%" }}
                options={departmentOptions}
              />
            </div>

            {/* New Year Dropdown */}
            <div className="flex flex-col flex-1">
              <label className="mb-2 font-medium">Job Description</label>
              <Select
                placeholder="Select JD"
                className="drpFolderManagement"
                style={{ width: "100%" }}
                options={yeatOption}
              />
            </div>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-end mt-10">
            <Button className="uploadResumeFileBtn">COMPARE RESUMES</Button>
          </div>
        </div>
      </div>

      <div className="w-full max-w-[1250px] mx-auto rounded-xl mb-12">
        <div className="mb-5">
          <label className="comparisonResults">Comparison Results</label>
        </div>

        <div>
          <MaterialReactTable
            columns={column}
            data={data}
            enableDensityToggle={false}
            initialState={{ density: "compact" }}
            columnResizeMode="onEnd"
            positionToolbarAlertBanner="bottom"
            enableStickyHeader
            enableStickyFooter
            enableColumnResizing
          />
        </div>
      </div>
    </>
  );
};

export default Comparison; // ✅ this line is REQUIRED
