import { Link } from "react-router-dom";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
} from "@mui/material";
import { Select, Button } from "antd";

const headings = [
  "No.",
  "Email ID",
  "Candidate Name",
  "Comments",
  "Department",
  "Test Report URL",
  "Score",
  "Experience",
];

const experiences = [
  "N/A",
  "5 Years",
  "3 Years",
  "4 Years",
  "N/A",
  "5 Years",
  "N/A",
  "10 Years",
  "2 Years",
];

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
const yearOptions = [
  { value: "2024", label: "2024" },
  { value: "2025", label: "2025" },
  { value: "2026", label: "2026" },
  { value: "2027", label: "2027" },
  { value: "2028", label: "2028" },
];
const resumeOptions = [
  {
    value: "Resume_Application_Developer",
    label: "Resume for Application Developer",
  },
  { value: "Resume_SEO", label: "Resume for SEO" },
  { value: "Resume_Marketing", label: "Resume for Marketing" },
  {
    value: "Resume_Power_Automate",
    label: "Resume for Power Automate Developer",
  },
  {
    value: "Resume_Enterprise_Integration",
    label: "Resume for Enterprise Integration",
  },
  {
    value: "Resume_Enterprise_Developer",
    label: "Resume for Enterprise Developer",
  },
  { value: "Resume_CRM", label: "Resume for CRM" },
  { value: "Resume_AI", label: "Resume for AI" },
  { value: "Resume_Tech_Lead", label: "Resume for Technical Lead" },
  { value: "Resume_Azure_Infra", label: "Resume for Azure & Infra" },
  { value: "Resume_Data_Analytics", label: "Resume for Data & Analytics" },
  { value: "Resume_Designer", label: "Resume for Designer" },
];

const jobDescriptionOptions = [
  {
    value: "LLM_Application_Developer_JD_1",
    label: "LLM_Application_Developer_JD_1",
  },
  { value: "MRF_-_Content_Writing", label: "MRF_-_Content_Writing" },
  {
    value: "MRF_Business_Dev._Manager_South",
    label: "MRF_Business_Dev._Manager_South",
  },
  {
    value: "MRF_D365_F&O_Finance_Consultant_11-02-2024",
    label: "MRF_D365_F&O_Finance_Consultant_11-02-2024",
  },
  {
    value: "MRF_Data&Analytics_TechLead",
    label: "MRF_Data&Analytics_TechLead",
  },
  { value: "MRF_ISR_South", label: "MRF_ISR_South" },
  { value: "Marketing_Manager-_MRF", label: "Marketing_Manager-_MRF" },
  {
    value: "Security_&_Complaince_Lead_MRF_13th_June_2024",
    label: "Security_&_Complaince_Lead_MRF_13th_June_2024",
  },
  { value: "Software_Engineer_MRF_V1.1", label: "Software_Engineer_MRF_V1.1" },
  {
    value: "Sr_Software_Engineer_MRF_V1.2",
    label: "Sr_Software_Engineer_MRF_V1.2",
  },
];

const candidatesData = [
  {
    id: 30,
    email: "dheerajpali@gmail.com",
    name: "Dheeraj Pali",
    comments: "good knowledge of...",
    department: "Modern Workplace",
    reportUrl: "https://app.imocha.io/PDFReport?",
    score: "0.5",
    experience: "2 Years",
  },
  {
    id: 31,
    email: "ajaygajjar@gmail.com",
    name: "Ajay Gajjar",
    comments: "excellent logical thinking",
    department: "DevOps",
    reportUrl: "https://app.imocha.io/PDFReport?",
    score: "0.8",
    experience: "4 Years",
  },
  {
    id: 30,
    email: "anuprathod@gmail.com",
    name: "Anup Rathod",
    comments: "good knowledge of...",
    department: "Azure & Infra",
    reportUrl: "https://app.imocha.io/PDFReport?",
    score: "0.5",
    experience: "5 Years",
  },
  {
    id: 31,
    email: "chiragraval@gmail.com",
    name: "Chirag Raval",
    comments: "excellent logical thinking",
    department: "Modern Workplace & DevOps",
    reportUrl: "https://app.imocha.io/PDFReport?",
    score: "0.8",
    experience: "7 Years",
  },
  {
    id: 30,
    email: "Vivekrocks21@gmail.com",
    name: "Vivek Kumar Tandel",
    comments: "good knowledge of...",
    department: "Azure & Infra",
    reportUrl: "https://app.imocha.io/PDFReport?",
    score: "0.5",
    experience: "5 Years",
  },
  {
    id: 31,
    email: "someone@example.com",
    name: "Anjali Mehta",
    comments: "excellent logical thinking",
    department: "DevOps",
    reportUrl: "https://app.imocha.io/PDFReport?",
    score: "0.8",
    experience: "4 Years",
  },
  {
    id: 30,
    email: "dheerajpali@gmail.com",
    name: "Dheeraj Pali",
    comments: "good knowledge of...",
    department: "Modern Workplace",
    reportUrl: "https://app.imocha.io/PDFReport?",
    score: "0.5",
    experience: "2 Years",
  },
  {
    id: 31,
    email: "ajaygajjar@gmail.com",
    name: "Ajay Gajjar",
    comments: "excellent logical thinking",
    department: "DevOps",
    reportUrl: "https://app.imocha.io/PDFReport?",
    score: "0.8",
    experience: "4 Years",
  },
  {
    id: 30,
    email: "anuprathod@gmail.com",
    name: "Anup Rathod",
    comments: "good knowledge of...",
    department: "Azure & Infra",
    reportUrl: "https://app.imocha.io/PDFReport?",
    score: "0.5",
    experience: "5 Years",
  },
  {
    id: 31,
    email: "chiragraval@gmail.com",
    name: "Chirag Raval",
    comments: "excellent logical thinking",
    department: "Modern Workplace & DevOps",
    reportUrl: "https://app.imocha.io/PDFReport?",
    score: "0.8",
    experience: "7 Years",
  },
  {
    id: 30,
    email: "Vivekrocks21@gmail.com",
    name: "Vivek Kumar Tandel",
    comments: "good knowledge of...",
    department: "Azure & Infra",
    reportUrl: "https://app.imocha.io/PDFReport?",
    score: "0.5",
    experience: "5 Years",
  },
  {
    id: 31,
    email: "someone@example.com",
    name: "Anjali Mehta",
    comments: "excellent logical thinking",
    department: "DevOps",
    reportUrl: "https://app.imocha.io/PDFReport?",
    score: "0.8",
    experience: "4 Years",
  },
  // add more candidates here...
];

const HrAssitant = () => {
  return (
    <>
      {/* Header Section */}
      <div className="w-full bg-slate-200 min-h-[215px] px-4 sm:px-8 md:px-10 py-12">
        <h2 className="text-2xl sm:text-3xl text-center font-semibold">
          HR Assistant🧑‍💻
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
              <label className="mb-2 font-medium">Department</label>
              <Select
                placeholder="Select Department"
                className="drpFolderManagement"
                style={{ width: "100%" }}
                options={departmentOptions}
              />
            </div>

            {/* New Year Dropdown */}
            <div className="flex flex-col flex-1">
              <label className="mb-2 font-medium">Year</label>
              <Select
                placeholder="Select Year"
                className="drpFolderManagement"
                style={{ width: "100%" }}
                options={yearOptions}
              />
            </div>
          </div>
          <div className=" mt-10 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
            {/* Department Dropdown */}
            <div className="flex flex-col flex-1">
              <label className="mb-2 font-medium">Resume</label>
              <Select
                placeholder="Select Resume"
                className="drpFolderManagement"
                style={{ width: "100%" }}
                options={resumeOptions}
              />
            </div>

            {/* New Year Dropdown */}
            <div className="flex flex-col flex-1">
              <label className="mb-2 font-medium">Job Description</label>
              <Select
                placeholder="Select Job Description"
                className="drpFolderManagement"
                style={{ width: "100%" }}
                options={jobDescriptionOptions}
              />
            </div>
          </div>
          <div className="mt-10 flex justify-end">
            <button className="px-4  py-2 border border-primary-blue text-primary-blue rounded hover:bg-blue-50 transition">
              GENERATE QUESTIONS
            </button>
          </div>
        </div>
        <div className="w-full max-w-[1250px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
          {/* HR-Related Questions */}
          <div className="rounded-lg border border-green-200 bg-green-50 p-6 shadow-sm">
            <div className="flex items-center gap-2 mb-4">
              <div className="text-red-600 text-xl">📌</div>
              <h2 className="text-lg font-semibold text-gray-800">
                HR-Related Questions
              </h2>
            </div>
            <div className="space-y-4 text-sm text-gray-700">
              <div>
                <strong>Communication Skills:</strong>
                <br />
                Can you share an example of a time when you had to explain a
                complex technical concept to a non-technical stakeholder? How
                did you ensure they understood it?
              </div>
              <div>
                <strong>Teamwork:</strong>
                <br />
                In your role at Accenture, you worked on optimizing data
                pipelines and transitioning workloads. How did you collaborate
                with your team to ensure the success of these projects?
              </div>
              <div>
                <strong>Leadership:</strong>
                <br />
                As a Senior Data Engineer, you led the design and development of
                ADF pipelines. Can you describe how you managed the team or
                stakeholders during this process?
              </div>
              <div>
                <strong>Problem-Solving:</strong>
                <br />
                Can you describe a challenging problem you faced while working
                on the RAG Application powered by Azure OpenAI? How did you
                approach and resolve it?
              </div>
              <div>
                <strong>Adaptability:</strong>
                <br />
                You have experience transitioning workloads from IaaS to PaaS on
                Azure. How do you adapt to new technologies or methodologies
                when working on such transitions?
              </div>
            </div>
          </div>

          {/* Technical Questions */}
          <div className="rounded-lg border border-blue-200 bg-blue-50 p-6 shadow-sm">
            <div className="flex items-center gap-2 mb-4">
              <div className="text-red-600 text-xl">📌</div>
              <h2 className="text-lg font-semibold text-gray-800">
                Technical Questions
              </h2>
            </div>
            <div className="space-y-4 text-sm text-gray-700">
              <div>
                <strong>Skill Alignment:</strong>
                <br />
                The JD mentions expertise in Java/J2EE, Spring, and Rest, which
                are not listed in your resume. How would you approach learning
                and applying these technologies if required for the role?
              </div>
              <div>
                <strong>Project Relevance:</strong>
                <br />
                The JD emphasizes integration and web services. Can you explain
                how your experience with Azure Functions and Azure Logic Apps
                aligns with these requirements?
              </div>
              <div>
                <strong>Scenario-Based:</strong>
                <br />
                The JD requires experience with CI/CD pipelines like Jenkins or
                Azure DevOps. Can you describe a scenario where you managed work
                in Azure DevOps and how you ensured smooth deployment?
              </div>
              <div>
                <strong>Domain Knowledge:</strong>
                <br />
                The JD mentions extensive experience in SDLC methodologies. Can
                you elaborate on how you applied SDLC principles in your work on
                data pipelines or ETL processes?
              </div>
              <div>
                <strong>Skill Gap:</strong>
                <br />
                The JD lists RabbitMQ or similar message queueing systems as a
                requirement, which is not mentioned in your resume. How would
                you bridge this gap and gain proficiency in message queueing
                systems?
              </div>
            </div>
          </div>
        </div>
      </div>

      {/*Comments */}
      <div className="mb-6 w-full px-4 sm:px-6 md:px-8">
        <div className="w-full max-w-[1250px] mx-auto">
          <label
            htmlFor="candidateComments"
            className="block mb-2 text-sm font-medium text-gray-700"
          >
            Comments for Candidate
          </label>
          <textarea
            id="candidateComments"
            rows={2}
            placeholder="Enter your comments for the candidate:"
            className="w-full rounded-md border border-gray-300 p-3 text-sm focus:border-blue-500 focus:ring focus:ring-blue-100 resize-none"
          />
        </div>
      </div>
      <div className="py-10 px-4 sm:px-10 md:px-20">
        <div className="w-full max-w-[1250px] mx-auto">
          <Typography
            variant="h6"
            sx={{ fontWeight: 600, color: "#1f2937", mb: 2 }}
          >
            Candidates Data
          </Typography>
          <div className="w-full max-w-[1250px] mx-auto rounded-xl bg-white shadow-md ">
            <TableContainer component={Paper} sx={{ maxHeight: 440 }}>
              <Table stickyHeader aria-label="candidates table">
                <TableHead>
                  <TableRow>
                    {headings.map((heading, idx) => (
                      <TableCell
                        key={idx}
                        sx={{
                          fontWeight: 500,
                          color: "#374151",
                          whiteSpace: "nowrap",
                        }}
                      >
                        {heading}
                      </TableCell>
                    ))}
                  </TableRow>
                </TableHead>

                <TableBody>
                  {candidatesData.map((candidate, idx) => (
                    <TableRow key={idx} hover>
                      <TableCell>{candidate.id}</TableCell>
                      <TableCell>{candidate.email}</TableCell>
                      <TableCell>{candidate.name}</TableCell>
                      <TableCell>{candidate.comments}</TableCell>
                      <TableCell>{candidate.department}</TableCell>
                      <TableCell>
                        <Link
                          href={candidate.reportUrl}
                          target="_blank"
                          rel="noopener"
                          underline="hover"
                          color="primary"
                        >
                          📄 Report
                        </Link>
                      </TableCell>
                      <TableCell>{candidate.score}</TableCell>
                      <TableCell>{candidate.experience}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </div>
        </div>
      </div>
      {/* Navigation Buttons */}
      <div className="w-full max-w-[1250px] mx-auto mt-5 mb-5 flex justify-between">
        <Link to={"/InvitedCandidates"} className="backBtn">
          Back
        </Link>
        <Link to={"/HrAssitant"} className="btn">
          Refresh Table
        </Link>
      </div>
    </>
  );
};

export default HrAssitant; // ✅ this line is REQUIRED
