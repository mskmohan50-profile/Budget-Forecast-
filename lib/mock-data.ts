import type { Project, User } from "./types";

export const AS_OF = "2026-10-01";

export const USERS: User[] = [
  { id: "u-fin1", name: "Priya Nair", role: "finance" },
  { id: "u-fin2", name: "Ananya Krishnan", role: "finance" },
  { id: "u-pm1", name: "Arjun Mehta", role: "pm", projectId: "p-atlas" },
  { id: "u-pm2", name: "Sara Khan", role: "pm", projectId: "p-beacon" },
  { id: "u-pm3", name: "Dev Patel", role: "pm", projectId: "p-cedar" },
];

export const PROJECTS: Project[] = [
  {
    id: "p-atlas",
    name: "Atlas Customer Portal",
    budget: 420000,
    resources: [
      { id: "r1", name: "Meera Iyer", role: "Tech Lead", rate: 110, hoursPerWeek: 30, start: "2026-02-02", end: "2026-12-18" },
      { id: "r2", name: "Rahul Das", role: "Senior Engineer", rate: 90, hoursPerWeek: 40, start: "2026-02-02", end: "2026-11-27" },
      { id: "r3", name: "Lena Fischer", role: "UX Designer", rate: 85, hoursPerWeek: 20, start: "2026-03-02", end: "2026-09-25" },
      { id: "r4", name: "Tom Becker", role: "QA Engineer", rate: 65, hoursPerWeek: 32, start: "2026-06-01", end: "2027-01-29" },
      { id: "r5", name: "Divya Rao", role: "Engineer", rate: 70, hoursPerWeek: 40, start: "2026-08-03", end: "2027-03-26" },
    ],
  },
  {
    id: "p-beacon",
    name: "Beacon Data Platform",
    budget: 680000,
    resources: [
      { id: "r6", name: "Karan Shah", role: "Data Architect", rate: 130, hoursPerWeek: 24, start: "2026-01-12", end: "2026-12-31" },
      { id: "r7", name: "Aisha Okafor", role: "Data Engineer", rate: 95, hoursPerWeek: 40, start: "2026-01-12", end: "2027-02-26" },
      { id: "r8", name: "Noah Williams", role: "Data Engineer", rate: 95, hoursPerWeek: 40, start: "2026-03-02", end: "2026-12-18" },
      { id: "r9", name: "Sofia Rossi", role: "Analyst", rate: 60, hoursPerWeek: 40, start: "2026-04-06", end: "2026-11-13" },
    ],
  },
  {
    id: "p-cedar",
    name: "Cedar Mobile App",
    budget: 250000,
    resources: [
      { id: "r10", name: "Ishaan Verma", role: "Mobile Engineer", rate: 88, hoursPerWeek: 40, start: "2026-05-04", end: "2026-12-11" },
      { id: "r11", name: "Chloe Martin", role: "Product Designer", rate: 80, hoursPerWeek: 16, start: "2026-05-04", end: "2026-10-30" },
      { id: "r12", name: "Vikram Joshi", role: "Backend Engineer", rate: 92, hoursPerWeek: 28, start: "2026-06-01", end: "2027-01-15" },
    ],
  },
  {
    id: "p-delta",
    name: "Delta Billing Revamp",
    budget: 360000,
    resources: [
      { id: "r13", name: "Hannah Lee", role: "Engineering Manager", rate: 120, hoursPerWeek: 20, start: "2026-03-09", end: "2026-12-18" },
      { id: "r14", name: "Suresh Kumar", role: "Backend Engineer", rate: 85, hoursPerWeek: 40, start: "2026-03-09", end: "2027-01-22" },
      { id: "r15", name: "Elena Petrova", role: "Backend Engineer", rate: 85, hoursPerWeek: 40, start: "2026-04-13", end: "2026-11-27" },
      { id: "r16", name: "Marcus Boateng", role: "QA Engineer", rate: 62, hoursPerWeek: 30, start: "2026-07-06", end: "2026-12-18" },
    ],
  },
  {
    id: "p-echo",
    name: "Echo Analytics Dashboard",
    budget: 190000,
    resources: [
      { id: "r17", name: "Tara Singh", role: "Frontend Engineer", rate: 78, hoursPerWeek: 40, start: "2026-06-15", end: "2026-12-04" },
      { id: "r18", name: "Leo Nguyen", role: "Data Analyst", rate: 66, hoursPerWeek: 24, start: "2026-06-15", end: "2026-11-20" },
      { id: "r19", name: "Grace Kim", role: "UX Designer", rate: 82, hoursPerWeek: 12, start: "2026-06-15", end: "2026-10-16" },
    ],
  },
  {
    id: "p-falcon",
    name: "Falcon Payments Gateway",
    budget: 540000,
    resources: [
      { id: "r20", name: "Rohit Menon", role: "Solutions Architect", rate: 140, hoursPerWeek: 20, start: "2026-01-19", end: "2026-12-31" },
      { id: "r21", name: "Ayesha Siddiqui", role: "Senior Engineer", rate: 105, hoursPerWeek: 40, start: "2026-01-19", end: "2027-02-12" },
      { id: "r22", name: "Jonas Weber", role: "Security Engineer", rate: 115, hoursPerWeek: 24, start: "2026-05-11", end: "2026-12-11" },
      { id: "r23", name: "Pooja Nambiar", role: "QA Engineer", rate: 68, hoursPerWeek: 40, start: "2026-06-01", end: "2027-01-08" },
      { id: "r24", name: "Carlos Mendes", role: "DevOps Engineer", rate: 98, hoursPerWeek: 20, start: "2026-02-16", end: "2026-12-31" },
    ],
  },
  {
    id: "p-granite",
    name: "Granite ERP Migration",
    budget: 820000,
    resources: [
      { id: "r25", name: "Fatima Zahra", role: "Program Manager", rate: 125, hoursPerWeek: 30, start: "2026-01-05", end: "2027-03-31" },
      { id: "r26", name: "Peter Novak", role: "ERP Consultant", rate: 135, hoursPerWeek: 40, start: "2026-01-05", end: "2027-02-26" },
      { id: "r27", name: "Anita Joseph", role: "Data Migration Lead", rate: 110, hoursPerWeek: 40, start: "2026-02-02", end: "2026-12-18" },
      { id: "r28", name: "Ben Carter", role: "Integration Engineer", rate: 95, hoursPerWeek: 40, start: "2026-03-02", end: "2027-01-29" },
      { id: "r29", name: "Yuki Tanaka", role: "Business Analyst", rate: 72, hoursPerWeek: 40, start: "2026-02-02", end: "2026-11-27" },
    ],
  },
  {
    id: "p-harbor",
    name: "Harbor Logistics Tracker",
    budget: 310000,
    resources: [
      { id: "r30", name: "Vivek Pillai", role: "Full-stack Engineer", rate: 84, hoursPerWeek: 40, start: "2026-04-06", end: "2026-12-18" },
      { id: "r31", name: "Isabel Torres", role: "Full-stack Engineer", rate: 84, hoursPerWeek: 40, start: "2026-05-04", end: "2027-01-15" },
      { id: "r32", name: "Kofi Mensah", role: "GIS Specialist", rate: 90, hoursPerWeek: 16, start: "2026-04-06", end: "2026-11-06" },
    ],
  },
  {
    id: "p-ion",
    name: "Ion IoT Gateway",
    budget: 275000,
    resources: [
      { id: "r33", name: "Dmitri Volkov", role: "Embedded Engineer", rate: 100, hoursPerWeek: 40, start: "2026-05-18", end: "2026-12-18" },
      { id: "r34", name: "Neha Kapoor", role: "Firmware Engineer", rate: 92, hoursPerWeek: 32, start: "2026-06-01", end: "2027-01-08" },
      { id: "r35", name: "Sam O'Brien", role: "Cloud Engineer", rate: 96, hoursPerWeek: 24, start: "2026-07-06", end: "2026-12-31" },
    ],
  },
  {
    id: "p-juno",
    name: "Juno HR Self-Service",
    budget: 150000,
    resources: [
      { id: "r36", name: "Mei Lin", role: "Frontend Engineer", rate: 76, hoursPerWeek: 40, start: "2026-07-13", end: "2026-12-11" },
      { id: "r37", name: "Adaeze Obi", role: "Backend Engineer", rate: 80, hoursPerWeek: 32, start: "2026-07-13", end: "2027-01-22" },
      { id: "r38", name: "Rajesh Bhat", role: "Product Owner", rate: 90, hoursPerWeek: 12, start: "2026-07-13", end: "2026-12-18" },
    ],
  },
];