import type { Project } from "@/lib/types";
import type { ProjectCalc } from "@/lib/calc";
import { money, date } from "@/lib/format";

export default function Summary({ project, calc }: { project: Project; calc: ProjectCalc }) {
  const { budget } = project;
  const scale = Math.max(budget, calc.projected) || 1;
  const pct = (n: number) => `${(n / scale) * 100}%`;
  const over = calc.variance < 0;

  const stats: [string, string, string?][] = [
    ["Weekly billing", money(calc.weekly), "active resources"],
    ["Monthly estimate", money(calc.monthly), "weekly × 52 ÷ 12"],
    ["Billed to date", money(calc.billed)],
    ["Forecast to " + date(calc.yearEnd), money(calc.forecast)],
    ["Budget remaining", money(calc.remaining), "budget − billed"],
    [over ? "Projected overrun" : "Projected headroom", money(Math.abs(calc.variance)), "budget − (billed + forecast)"],
  ];

  return (
    <section aria-labelledby="summary-h" aria-live="polite">
      <h2 id="summary-h" className="visually-hidden">Actual vs forecast vs budget</h2>

      <p className="headline">
        <span className="headline-num">{money(calc.projected)}</span> projected by year-end against a{" "}
        <span className="headline-num">{money(budget)}</span> approved budget.{" "}
        <strong className={over ? "bad" : "good"}>
          {over ? `${money(-calc.variance)} over.` : `${money(calc.variance)} under.`}
        </strong>
      </p>

      <div className="bar" role="img" aria-label={`Billed ${money(calc.billed)}, forecast ${money(calc.forecast)}, budget ${money(budget)}`}>
        <div className="seg actual" style={{ left: 0, width: pct(calc.billed) }} />
        <div className="seg forecast" style={{ left: pct(calc.billed), width: pct(calc.forecast) }} />
        <div className="budget-mark" style={{ left: pct(budget) }} />
      </div>
      <ul className="legend">
        <li><i className="sw actual" /> Actual {money(calc.billed)}</li>
        <li><i className="sw forecast" /> Forecast {money(calc.forecast)}</li>
        <li><i className="sw budget" /> Budget {money(budget)}</li>
      </ul>

      <dl className="stats">
        {stats.map(([label, value, hint]) => (
          <div key={label} className="stat">
            <dt>{label}</dt>
            <dd>{value}</dd>
            {hint && <small>{hint}</small>}
          </div>
        ))}
      </dl>
    </section>
  );
}
