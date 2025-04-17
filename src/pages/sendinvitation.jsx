import { Select, DatePicker, TimePicker } from "antd";
import { MaterialReactTable } from "material-react-table";
import { Link } from "react-router-dom";
import allData from "../assets/comman.js";

const SendInvitation = () => {
  return (
    <>
      {/* Header Section */}
      <div className="w-full bg-slate-200 min-h-[215px] px-4 sm:px-8 md:px-10 py-12">
        <h2 className="text-2xl sm:text-3xl text-center font-semibold">
          Send Test Invitations 📬
        </h2>
        <p className="w-full mt-5 text-sm sm:text-base text-center px-4 sm:px-16 md:px-32 lg:px-60 leading-6 sm:leading-7">
          Reach out to the candidate by sending an official interview
          invitation. Give them the opportunity to connect and learn more about
          the role. Start the conversation and move one step closer to finding
          the right fit.
        </p>
      </div>

      <div className="py-10 px-4 sm:px-10 md:px-20">
        <div className="w-full max-w-[1250px] mx-auto rounded-xl">
          <div className="topResultContainer">
            <label>Department</label>
            <Select
              placeholder="Select Department"
              className="drpFolderManagement mt-2"
              style={{ width: "100%" }}
              options={allData.departmentData}
            />
          </div>
        </div>
      </div>

      <div className="w-full max-w-[1250px] mx-auto rounded-xl mb-12">
        <div className="mb-5">
          <span>Selected Department:</span>
        </div>

        <div className="muiDashboard">
          <MaterialReactTable
            columns={allData.headerColumnsForinvitationsData}
            data={allData.invitationsData}
            enableDensityToggle={false}
            enableColumnResizing
            enableStickyHeader
            enableStickyFooter
            positionToolbarAlertBanner="bottom"
            initialState={{ density: "compact" }}
            muiTableHeadCellProps={{
              sx: {
                backgroundColor: "#f7f7f7",
                fontWeight: "bold",
                textAlign: "center",
              },
            }}
            muiTableBodyCellProps={{
              sx: {
                textAlign: "center",
              },
            }}
            muiTablePaperProps={{
              elevation: 0,
              sx: {
                borderRadius: "12px",
                border: "1px solid #e0e0e0",
              },
            }}
            muiTableBodyProps={{
              sx: {
                "& tr:nth-of-type(odd)": {
                  backgroundColor: "#f9f9f9",
                },
              },
            }}
          />
        </div>
      </div>

      <div className="py-5  sm:px-10 md:px-5">
        <div className="w-full max-w-[1250px] mx-auto rounded-xl">
          <div className="topResultContainer">
            <label>Division (test)</label>
            <Select
              placeholder="Select Division (test)"
              className="drpFolderManagement mt-2"
              style={{ width: "100%" }}
              options={allData.departmentData}
            />
          </div>
        </div>
      </div>

      <div className="w-full max-w-[1250px] mx-auto rounded-xl mb-12">
        <div className="mb-5">
          <label className="comparisonResults">
            Select candidates to send invitations:
          </label>
        </div>

        <MaterialReactTable
          columns={allData.headerColumnsForCandidateData}
          data={allData.candidateInvitatuionData}
          enableDensityToggle={false}
          enableColumnResizing
          enableStickyHeader
          enableStickyFooter
          positionToolbarAlertBanner="bottom"
          initialState={{ density: "compact" }}
          muiTableHeadCellProps={{
            sx: {
              backgroundColor: "#f7f7f7",
              fontWeight: "bold",
              textAlign: "center",
            },
          }}
          muiTableBodyCellProps={{
            sx: {
              textAlign: "center",
            },
          }}
          muiTablePaperProps={{
            elevation: 0,
            sx: {
              borderRadius: "12px",
              border: "1px solid #e0e0e0",
            },
          }}
          muiTableBodyProps={{
            sx: {
              "& tr:nth-of-type(odd)": {
                backgroundColor: "#f9f9f9",
              },
            },
          }}
        />
      </div>

      <div className="w-full max-w-[1250px] mx-auto rounded-xl mb-12">
        <h2 class="text-xl font-semibold mb-6">Select Test Date and Time</h2>

        <div class="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <div className="datePickerContainer">
            <label class="block mb-1 font-medium">Start Date</label>
            <DatePicker class="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
          </div>

          <div className="datePickerContainer">
            <label class="block mb-1 font-medium">End Date</label>
            <DatePicker class="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
          </div>

          <div className="datePickerContainer">
            <label class="block mb-1 font-medium">Start Time (IST)</label>
            <TimePicker class="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
          </div>

          <div className="datePickerContainer">
            <label class="block mb-1 font-medium">End Time (IST)</label>
            <TimePicker class="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
          </div>
        </div>

        <div class="flex flex-col sm:flex-row justify-between items-center gap-4">
          <Link
            to={"/comparison"}
            class="border border-black text-black font-medium py-2 px-6 rounded hover:bg-gray-100 transition"
          >
            ◀ BACK
          </Link>

          <Link class="border-2 border-blue-500 text-blue-500 font-bold py-2 px-6 rounded hover:bg-blue-50 transition">
            SEND INVITATION
          </Link>

          <Link
            to={"/InvitedCandidates"}
            class="bg-blue-500 text-white font-semibold py-2 px-6 rounded hover:bg-blue-600 transition"
          >
            NEXT ▶
          </Link>
        </div>
      </div>
    </>
  );
};

export default SendInvitation; // ✅ this line is REQUIRED
