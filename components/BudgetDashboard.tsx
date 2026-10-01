"use client";

import { useMemo, useState } from "react";
import { AS_OF, PROJECTS, USERS } from "@/lib/mock-data";
import { calcProject } from "@/lib/calc";
import { money } from "@/lib/format";
import ResourceTable from "./ResourceTable";
import Summary from "./Summary";

export default function BudgetDashboard() {
  const [userId, setUserId] = useState(USERS[0].id);
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [asOf, setAsOf] = useState(AS_OF);
  const [removed, setRemoved] = useState<Record<string, string[]>>({});

  const user = USERS.find((u) => u.id === userId)!;

  const visible = useMemo(
    () => (user.role === "finance" ? PROJECTS : PROJECTS.filter((p) => p.id === user.projectId)),
    [user]
  );
  const project = visible.find((p) => p.id === selectedId) ?? visible[0];
  const calc = calcProject(project, removed[project.id] ?? [], asOf);

  const toggle = (resourceId: string) =>
    setRemoved((prev) => {
      const cur = prev[project.id] ?? [];
      const next = cur.includes(resourceId) ? cur.filter((x) => x !== resourceId) : [...cur, resourceId];
      return { ...prev, [project.id]: next };
    });

  const removedCount = (removed[project.id] ?? []).length;

  return (
    <main className="page">
      <header className="top">
        <div>
          <h1>{project.name}</h1>
          <p className="sub">Approved budget {money(project.budget)}</p>
        </div>
        <div className="controls">
          <label>
            Viewing as
            <select value={userId} onChange={(e) => { setUserId(e.target.value); setSelectedId(null); }}>
              {USERS.map((u) => (
                <option key={u.id} value={u.id}>
                  {u.name} ({u.role === "finance" ? "Finance" : "Project Manager"})
                </option>
              ))}
            </select>
          </label>
          <label>
            As of
            <input type="date" value={asOf} onChange={(e) => e.target.value && setAsOf(e.target.value)} />
          </label>
        </div>
      </header>

      {user.role === "finance" && (
        <section aria-labelledby="all-h" className="block">
          <h2 id="all-h">All projects</h2>
          <div className="table-wrap">
            <table className="portfolio">
              <thead>
                <tr>
                  <th>Project</th>
                  <th className="num">Budget</th>
                  <th className="num">Billed</th>
                  <th className="num">Projected</th>
                  <th className="num">Variance</th>
                </tr>
              </thead>
              <tbody>
                {visible.map((p) => {
                  const c = calcProject(p, removed[p.id] ?? [], asOf);
                  return (
                    <tr key={p.id} className={p.id === project.id ? "selected" : undefined}>
                      <td data-label="Project" className="name">
                        <button type="button" className="link" onClick={() => setSelectedId(p.id)} aria-pressed={p.id === project.id}>
                          {p.name}
                        </button>
                      </td>
                      <td data-label="Budget" className="num">{money(p.budget)}</td>
                      <td data-label="Billed" className="num">{money(c.billed)}</td>
                      <td data-label="Projected" className="num">{money(c.projected)}</td>
                      <td data-label="Variance" className={`num ${c.variance < 0 ? "bad" : "good"}`}>
                        {c.variance < 0 ? "−" : "+"}{money(Math.abs(c.variance))}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </section>
      )}

      <div className="block">
        <Summary project={project} calc={calc} />
      </div>

      <section aria-labelledby="res-h" className="block">
        <h2 id="res-h">Resources</h2>
        <p className="note">
          Removing a resource drops their future cost from the forecast. What they have already billed stays in the actuals.
          {removedCount > 0 && ` ${removedCount} removed.`}
        </p>
        <ResourceTable rows={calc.rows} onToggle={toggle} />
      </section>
    </main>
  );
}
