import type { Project, Resource } from "./types";

const DAY = 86_400_000;
const WEEKS_PER_MONTH = 52 / 12;

const ms = (iso: string) => new Date(`${iso}T00:00:00Z`).getTime();

function overlapDays(aStart: number, aEnd: number, bStart: number, bEnd: number) {
  const s = Math.max(aStart, bStart);
  const e = Math.min(aEnd, bEnd);
  return e < s ? 0 : Math.round((e - s) / DAY) + 1;
}

export interface ResourceCalc {
  resource: Resource;
  weekly: number;
  monthly: number;
  billed: number; 
  forecast: number; 
  removed: boolean;
  activeNow: boolean;
}

export interface ProjectCalc {
  rows: ResourceCalc[];
  weekly: number;
  monthly: number;
  billed: number;
  forecast: number;
  projected: number; 
  remaining: number; 
  variance: number; 
  yearEnd: string;
}

export function calcProject(project: Project, removedIds: string[], asOf: string): ProjectCalc {
  const asOfMs = ms(asOf);
  const year = asOf.slice(0, 4);
  const yearEnd = `${year}-12-31`;
  const yearEndMs = ms(yearEnd);

  const rows: ResourceCalc[] = project.resources.map((resource) => {
    const start = ms(resource.start);
    const end = ms(resource.end);
    const weekly = resource.rate * resource.hoursPerWeek;
    const perDay = weekly / 7;
    const removed = removedIds.includes(resource.id);

    const billed = overlapDays(start, end, start, asOfMs) * perDay;
    const forecast = removed ? 0 : overlapDays(start, end, asOfMs + DAY, yearEndMs) * perDay;
    const activeNow = start <= asOfMs && asOfMs <= end;

    return { resource, weekly, monthly: weekly * WEEKS_PER_MONTH, billed, forecast, removed, activeNow };
  });

  const live = rows.filter((r) => r.activeNow && !r.removed);
  const weekly = live.reduce((s, r) => s + r.weekly, 0);
  const monthly = live.reduce((s, r) => s + r.monthly, 0);
  const billed = rows.reduce((s, r) => s + r.billed, 0);
  const forecast = rows.reduce((s, r) => s + r.forecast, 0);
  const projected = billed + forecast;

  return {
    rows,
    weekly,
    monthly,
    billed,
    forecast,
    projected,
    remaining: project.budget - billed,
    variance: project.budget - projected,
    yearEnd,
  };
}
