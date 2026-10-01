export type Role = "finance" | "pm";

export interface Resource {
  id: string;
  name: string;
  role: string;
  rate: number; 
  hoursPerWeek: number; 
  start: string; 
  end: string; 
}

export interface Project {
  id: string;
  name: string;
  budget: number; 
  resources: Resource[];
}

export interface User {
  id: string;
  name: string;
  role: Role;
  projectId?: string; 
}
