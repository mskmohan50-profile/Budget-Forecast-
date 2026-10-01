import type { ResourceCalc } from "@/lib/calc";
import { money, moneyExact, date } from "@/lib/format";

interface Props {
  rows: ResourceCalc[];
  onToggle: (resourceId: string) => void;
}

function status(r: ResourceCalc) {
  if (r.removed) return { label: "Removed", cls: "st-removed" };
  if (r.activeNow) return { label: "Active", cls: "st-active" };
  if (r.billed === 0) return { label: "Upcoming", cls: "st-upcoming" };
  return { label: "Ended", cls: "st-ended" };
}

export default function ResourceTable({ rows, onToggle }: Props) {
  return (
    <div className="table-wrap">
      <table className="resources">
        <thead>
          <tr>
            <th>Name</th>
            <th>Status</th>
            <th>Role</th>
            <th className="num">Rate / hr</th>
            <th className="num">Hrs / wk</th>
            <th>Start</th>
            <th>End</th>
            <th className="num">Weekly</th>
            <th className="num">Monthly</th>
            <th className="num">Billed to date <span className="tick-dot" aria-hidden="true" /></th>
            <th className="num">Forecast</th>
            <th><span className="visually-hidden">Action</span></th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => {
            const { resource: r, weekly, monthly, billed, forecast, removed } = row;
            const st = status(row);
            const ticking = row.activeNow && !removed;
            return (
              <tr key={r.id} className={[removed && "removed", ticking && "active"].filter(Boolean).join(" ") || undefined}>
                <td data-label="Name" className="name">{r.name}</td>
                <td data-label="Status">
                  <span className={`status ${st.cls}`}><i aria-hidden="true" />{st.label}</span>
                </td>
                <td data-label="Role">{r.role}</td>
                <td data-label="Rate / hr" className="num">{money(r.rate)}</td>
                <td data-label="Hrs / wk" className="num">{r.hoursPerWeek}</td>
                <td data-label="Start">{date(r.start)}</td>
                <td data-label="End">{date(r.end)}</td>
                <td data-label="Weekly" className="num">{money(weekly)}</td>
                <td data-label="Monthly" className="num">{money(monthly)}</td>
                <td data-label="Billed to date" className={`num${ticking ? " ticking" : ""}`}>{moneyExact(billed)}</td>
                <td data-label="Forecast" className="num">{removed ? "Removed" : money(forecast)}</td>
                <td className="action">
                  <button
                    type="button"
                    className={removed ? "btn" : "btn danger"}
                    onClick={() => onToggle(r.id)}
                    aria-label={`${removed ? "Restore" : "Remove"} ${r.name} ${removed ? "to" : "from"} forecast`}
                  >
                    {removed ? "Restore" : "Remove"}
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}