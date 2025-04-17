import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import HeaderTop from "./components/HeaderTop";

import "./App.css";

import ResumeFetching from "./pages/resumefetching";
import FolderManagement from "./pages/foldermanagement";
import UploadResume from "./pages/uploadresume";
import Comparison from "./pages/comparison";
import SendInvitation from "./pages/sendinvitation";
import InvitedCandidates from "./pages/invitedcandidates";
import HrAssitant from "./pages/hrassistant";
import LandingPageDesign from "./components/LandingPageDesign";

function App() {
  const [count, setCount] = useState(0);
  return (
    <>
      <header>
        <div className="flex w-full">
          <HeaderTop />
        </div>
      </header>
      <Routes>
        <Route path="/" element={<ResumeFetching />}></Route>
        <Route path="/ResumeFetching" element={<ResumeFetching />} />
        <Route path="/FolderManagement" element={<FolderManagement />} />
        <Route path="/UploadResume" element={<UploadResume />} />
        <Route path="/Comparison" element={<Comparison />} />
        <Route path="/SendInvitation" element={<SendInvitation />} />
        <Route path="/InvitedCandidates" element={<InvitedCandidates />} />
        <Route path="/HrAssitant" element={<HrAssitant />} />
      </Routes>
      <></>
    </>
  );
}

export default App;
