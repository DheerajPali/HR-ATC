import { Link } from "react-router-dom";
import "../assets/css/commanStyling.css";

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

const headings = [
  "ID",
  "Email ID",
  "Candidate Name",
  "Contact Number",
  "Department",
  "Test Report URL",
  "Score",
  "Status",
];
const candidatesData = [
  {
    id: 1,
    email: "dheerajpali@gmail.com",
    name: "Dheeraj Pali",
    contactNumber: 12323234323,
    department: "Modern Workplace",
    reportUrl: "https://app.imocha.io/PDFReport?",
    score: "0.5",
    status: "Complete",
  },
  {
    id: 2,
    email: "ajaygajjar@gmail.com",
    name: "Ajay Gajjar",
    contactNumber: 2323234323,
    department: "DevOps",
    reportUrl: "https://app.imocha.io/PDFReport?",
    score: "0.8",
    status: "Complete",
  },
  {
    id: 3,
    email: "anuprathod@gmail.com",
    name: "Anup Rathod",
    contactNumber: 62323234323,
    department: "Azure & Infra",
    reportUrl: "https://app.imocha.io/PDFReport?",
    score: "0.5",
    status: "Cancel",
  },
  {
    id: 4,
    email: "chiragraval@gmail.com",
    name: "Chirag Raval",
    contactNumber: 42323234323,
    department: "Modern Workplace & DevOps",
    reportUrl: "https://app.imocha.io/PDFReport?",
    score: "0.8",
    status: "Complete",
  },
  {
    id: 5,
    email: "Vivekrocks21@gmail.com",
    name: "Vivek Kumar Tandel",
    contactNumber: 32323234323,
    department: "Azure & Infra",
    reportUrl: "https://app.imocha.io/PDFReport?",
    score: "0.5",
    status: "Cancel",
  },
  // ... and so on
];

const InvitedCandidates = () => {
  return (
    <>
      <div className="w-full bg-slate-200 min-h-[215px] px-4 sm:px-8 md:px-10 py-12">
        <h2 className="text-2xl sm:text-3xl text-center font-semibold">
          List of Invited Candidates📋
        </h2>
        <p className="w-full mt-5 text-sm sm:text-base text-center px-4 sm:px-16 md:px-32 lg:px-60 leading-6 sm:leading-7">
          Reach out to the candidate by sending an official interview
          invitation. Give them the opportunity to connect and learn more about
          the role. Start the conversation and move one step closer to finding
          the right fit.
        </p>
      </div>
      {/*Table Section */}
      <div className="py-10 px-4 sm:px-10 md:px-20">
        <div className="w-full max-w-[1250px] mx-auto">
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
                  {candidatesData.map((candidate, idx) => (
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
                      <TableCell>{candidate.contactNumber}</TableCell>
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
                      <TableCell>
                        <button
                          className={`w-28 h-7 rounded-lg  text-white capitalize text-sm
      ${
        candidate.status.toLowerCase() === "complete"
          ? "bg-green-600"
          : candidate.status.toLowerCase() === "cancel"
          ? "bg-red-600"
          : "bg-orange-500"
      }`}
                        >
                          {candidate.status}
                        </button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </div>
        </div>

        {/* Navigation Buttons */}
        <div className="mb-10 px-4 sm:px-10 md:px-20">
          <div className="w-full max-w-[1250px] mx-auto">
            <div class="flex flex-col sm:flex-row justify-between items-center gap-4 mt-10">
              <Link
                to={"/SendInvitation"}
                class="border border-black text-black font-medium py-2 px-6 rounded hover:bg-gray-100 transition"
              >
                ◀ BACK
              </Link>
              <Link
                id="nextBtn"
                to={"/HrAssitant"}
                class="text-white font-semibold py-2 px-6 rounded hover:bg-blue-600 transition"
              >
                NEXT ▶
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default InvitedCandidates; // ✅ this line is REQUIRED
