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
import allData from "../assets/comman";

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
              <label className="mb-2 font-medium">Year</label>
              <div className="drp-Container">
                <Select
                  placeholder="Select Year"
                  className="drpFolderManagement"
                  style={{ width: "100%" }}
                  options={allData.yearOption}
                />
              </div>
            </div>
          </div>
          <div className=" mt-10 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
            {/* Department Dropdown */}
            <div className="flex flex-col flex-1">
              <label className="mb-2 font-medium">Resume</label>
              <div className="drp-Container">
                <Select
                  placeholder="Select Resume"
                  className="drpFolderManagement"
                  style={{ width: "100%" }}
                  options={allData.resumeOptions}
                />
              </div>
            </div>

            {/* New Year Dropdown */}
            <div className="flex flex-col flex-1">
              <label className="mb-2 font-medium">Job Description</label>
              <div className="drp-Container">
                <Select
                  placeholder="Select Job Description"
                  className="drpFolderManagement"
                  style={{ width: "100%" }}
                  options={allData.jobDescriptionOptions}
                />
              </div>
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
      <div className="mx-auto mb-6 w-full px-4 sm:px-4 md:px-8">
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

      {/*Table Section */}
      <div className="py-10 px-4 sm:px-10 md:px-20">
        <div className="w-full max-w-[1250px] mx-auto">
          <Typography
            variant="h6"
            sx={{ fontWeight: 600, color: "#1f2937", mb: 2 }}
          >
            Candidates Data
          </Typography>
          <div className="w-full max-w-[1250px] mx-auto rounded-xl bg-white ">
            <TableContainer
              component={Paper}
              sx={{
                maxHeight: 440,
                boxShadow: "none",
                borderBottom: "none",
              }}
            >
              <Table stickyHeader aria-label="candidates table">
                <TableHead>
                  <TableRow>
                    {headings.map((heading, idx) => (
                      <TableCell
                        key={idx}
                        sx={{
                          fontWeight: 600,
                          color: "#374151",
                          whiteSpace: "nowrap",
                          backgroundColor: "#f9fafb",
                        }}
                      >
                        {heading}
                      </TableCell>
                    ))}
                  </TableRow>
                </TableHead>

                <TableBody>
                  {allData.candidatesData.map((candidate, idx) => (
                    <TableRow
                      key={idx}
                      hover
                      sx={{
                        backgroundColor: idx % 2 === 0 ? "#ffffff" : "#f3f4f6",
                      }}
                    >
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
        {/* Navigation Buttons */}
        <div className="w-full max-w-[1250px] mx-auto  flex justify-between mt-5 mb-5">
          <Link
            to={"/InvitedCandidates"}
            class="border border-black text-black font-medium py-2 px-6 rounded hover:bg-gray-100 transition"
          >
            ◀ BACK
          </Link>
          <Link to={"/HrAssitant"} className="btn">
            Refresh Table
          </Link>
        </div>
      </div>
    </>
  );
};

export default HrAssitant;
