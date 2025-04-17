import { Link } from "react-router-dom";
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
      {/* Navigation Buttons */}
      <div className="mt-10 flex justify-between">
        <Link to={"/SendInvitation"} className="backBtn">
          Back
        </Link>
        <Link to={"/HrAssitant"} className="btn">
          Next
        </Link>
      </div>
    </>
  );
};

export default InvitedCandidates; // ✅ this line is REQUIRED
