const stats = [
  { k: "Duration", v: "16 min" },
  { k: "Assistant steps", v: "22" },
  { k: "Tool-call share", v: "66.7%" },
  { k: "Session", v: "US$1.97" },
];

export function CallMixStrip() {
  return (
    <section className="mv-strip" aria-label="Illustrative session call mix">
      <div className="ps-wrap">
        <div className="mv-strip__top">
          <div className="mv-strip__badge">Illustrative session</div>
          <div className="mv-strip__ratio">3 asks · 22 agent steps</div>
        </div>
        <div className="mv-strip__grid">
          {stats.map((item) => (
            <div key={item.k}>
              <div className="mv-strip__k">{item.k}</div>
              <div className="mv-strip__v">{item.v}</div>
            </div>
          ))}
        </div>
        <div className="mv-strip__bar-label">
          <span>Context breakdown</span>
          <span>Agents spend most of the session calling tools, not chatting.</span>
        </div>
        <div
          className="mv-strip__bar"
          role="img"
          aria-label="Illustrative session: tool calls 66.7 percent, other 33.3 percent"
        >
          <div className="mv-strip__bar-tool" style={{ width: "66.7%" }}>
            Tool calls 66.7%
          </div>
          <div className="mv-strip__bar-other" style={{ width: "33.3%" }}>
            Other 33.3%
          </div>
        </div>
        <p className="mv-strip__note">
          Pattern from a typical agent session dashboard. Digits are labelled
          illustrative — not a PySmith customer bill.
        </p>
      </div>
    </section>
  );
}
