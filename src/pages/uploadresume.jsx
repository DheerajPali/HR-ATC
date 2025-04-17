import { Button, Select, Upload } from "antd";
import { Link } from "react-router-dom";
import { InboxOutlined } from "@ant-design/icons";
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

const uploadedFileProps = {
  name: "file",
  multiple: true,
};

const { Dragger } = Upload;

const UploadResume = () => {
  return (
    <>
      {/* Header Section */}
      <div className="w-full bg-slate-200 min-h-[215px] px-4 sm:px-8 md:px-10 py-12">
        <h2 className="text-2xl sm:text-3xl text-center font-semibold">
          Upload Resumes and Job Descriptions 📤
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
          </div>

          <div className="mt-10 mb-2">
            <label className="font-medium">Upload resumes upto 30 </label>
          </div>
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
            <Dragger className="uploadedDoc" {...uploadedFileProps}>
              <p className="ant-upload-drag-icon">
                <InboxOutlined />
              </p>
              <p className="ant-upload-text">Drap and drop files here</p>
              <p className="ant-upload-hint">
                Limited 200 MB per files - DOCX, PDF
              </p>
            </Dragger>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-end">
            <Button className="uploadResumeFileBtn">Upload Resumes File</Button>
          </div>
        </div>
      </div>

      {/* Upload Job Description */}
      <div className="py-2 px-4 sm:px-10 md:px-20">
        <div className="w-full max-w-[1250px] mx-auto rounded-xl bg-white shadow-md p-12">
          <div className="mb-2">
            <label className="uploadJobDescription">
              Upload Job Descriptions{" "}
            </label>
          </div>

          <div className="mb-2 mt-8">
            <label className="uploadJobDescSubHeader">
              Upload a PDF or docx file
            </label>
          </div>

          <div className="flex flex-col sm:flex-row sm:justify-between gap-6">
            {/* Upload Container */}
            <div className="flex flex-1 p-4 border border-dashed border-gray-300 rounded-md justify-between  items-center  uploadJobDescContainer">
              <div className="">
                <label className="block text-gray-700 font-medium mb-2">
                  Drag and drop files here
                </label>
                <h4 className="text-gray-500 text-sm">
                  Limit 200MB per file • DOCX, PDF
                </h4>
              </div>
              <div>
                <Upload>
                  <Button className="w-full sm:w-auto">Browse Files</Button>
                </Upload>
              </div>
            </div>

            {/* Upload Button */}
            <div className="flex justify-center items-center">
              <Button className="w-full sm:w-auto uploadResumeFileBtn">
                Upload JD
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="flex flex-col sm:flex-row sm:justify-between gap-6 w-full max-w-[1250px] mx-auto rounded-xl p-12">
        <Link to={"/foldermanagement"} className="backBtn">
          Back
        </Link>
        <Link to={"/comparison"} className="btn">
          Next
        </Link>
      </div>
    </>
  );
};

export default UploadResume; // ✅ this line is REQUIRED
