const candidateInvitatuionData = [
  {
    No: "01",
    CandidateName: "Vivek Kumar Tandel",
    EmailID: "Vivekrocks21@gmail.com",
    ContactNumber: "9723590090",
  },

  {
    No: "02",
    CandidateName: "Vivek Kumar Tandel",
    EmailID: "Vivekrocks21@gmail.com",
    ContactNumber: "9723590090",
  },

  {
    No: "03",
    CandidateName: "Vivek Kumar Tandel",
    EmailID: "Vivekrocks21@gmail.com",
    ContactNumber: "9723590090",
  },

  {
    No: "04",
    CandidateName: "Vivek Kumar Tandel",
    EmailID: "Vivekrocks21@gmail.com",
    ContactNumber: "9723590090",
  },

  {
    No: "05",
    CandidateName: "Vivek Kumar Tandel",
    EmailID: "Vivekrocks21@gmail.com",
    ContactNumber: "9723590090",
  },
];

const departmentData = [
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

const invitationsData = [
  {
    No: "1",
    CandidateName: "Vivek Kumar Tandel",
    Rating: "8/10",
    EmailID: "Vivekrocks21@gmail.com",
    ContactNumber: "9723590090",
    TotalExperience: "10.5 Years",
    Department: "Azure & Infra",
    Date: "2025-03-26",
  },
  {
    No: "2",
    CandidateName: "Vivek Kumar Tandel",
    Rating: "8/10",
    EmailID: "Vivekrocks21@gmail.com",
    ContactNumber: "9723590090",
    TotalExperience: "10.5 Years",
    Department: "Azure & Infra",
    Date: "2025-03-26",
  },
  {
    No: "3",
    CandidateName: "Vivek Kumar Tandel",
    Rating: "8/10",
    EmailID: "Vivekrocks21@gmail.com",
    ContactNumber: "9723590090",
    TotalExperience: "10.5 Years",
    Department: "Azure & Infra",
    Date: "2025-03-26",
  },
  {
    No: "4",
    CandidateName: "Vivek Kumar Tandel",
    Rating: "8/10",
    EmailID: "Vivekrocks21@gmail.com",
    ContactNumber: "9723590090",
    TotalExperience: "10.5 Years",
    Department: "Azure & Infra",
    Date: "2025-03-26",
  },
  {
    No: "5",
    CandidateName: "Vivek Kumar Tandel",
    Rating: "8/10",
    EmailID: "Vivekrocks21@gmail.com",
    ContactNumber: "9723590090",
    TotalExperience: "10.5 Years",
    Department: "Azure & Infra",
    Date: "2025-03-26",
  },
];

const headerColumnsForCandidateData = [
  { accessorKey: "No", header: "No", size: 120 },
  { accessorKey: "CandidateName", header: "Candidate Name", size: 120 },
  { accessorKey: "EmailID", header: "Email ID", size: 120 },
  { accessorKey: "ContactNumber", header: "Contact Number", size: 150 },
];

const headerColumnsForinvitationsData = [
  { accessorKey: "No", header: "No", size: 120 },
  { accessorKey: "CandidateName", header: "Candidate Name", size: 120 },
  { accessorKey: "Rating", header: "Rating", size: 120 },
  { accessorKey: "EmailID", header: "Email ID", size: 150 },
  { accessorKey: "ContactNumber", header: "Contact Number", size: 120 },
  { accessorKey: "TotalExperience", header: "Total Experience", size: 120 },
  { accessorKey: "Department", header: "Department", size: 120 },
  { accessorKey: "Date", header: "Date", size: 150 },
];

const yearOption = [
  { value: "2024", label: "2024" },
  { value: "2025", label: "2025" },
  { value: "2026", label: "2026" },
  { value: "2027", label: "2027" },
  { value: "2028", label: "2028" },
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

const allData = {
  departmentData,
  candidateInvitatuionData,
  invitationsData,
  headerColumnsForCandidateData,
  headerColumnsForinvitationsData,
  yearOption,
  jobDescriptionOptions,
  candidatesData,
  resumeOptions,
};
export default allData;
