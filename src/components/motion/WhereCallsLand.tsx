import { architectureCaption } from "@/lib/field";

const models = [
  { name: "GPT-4.1 mini", pass: true, selected: true },
  { name: "Claude Haiku", pass: true, selected: false },
  { name: "Local 8B", pass: false, selected: false },
];

export function WhereCallsLand() {
  return (
    <section className="ps-section ps-section--white">
      <div className="ps-wrap ps-pad">
        <div className="ps-headrow">
          <div style={{ maxWidth: 720 }}>
            <div className="ps-eyebrow">Where calls land</div>
            <h2 className="ps-h2">Pieces make each other better</h2>
            <p className="ps-sub" style={{ marginTop: 16, marginBottom: 0 }}>
              {architectureCaption}
            </p>
          </div>
        </div>

        <div className="mv-platform">
          <article className="mv-platform-card">
            <h3 className="mv-platform-card__title">Cheapest model that passes</h3>
            <p className="mv-platform-card__kicker">Eval gate · not a beauty contest</p>
            <div className="mv-platform-card__stage" aria-hidden="true">
              <ul className="mv-models">
                {models.map((model) => (
                  <li
                    key={model.name}
                    className={`mv-models__row${model.selected ? " is-selected" : ""}${model.pass ? "" : " is-fail"}`}
                  >
                    <span>{model.name}</span>
                    <span className={`mv-mark ${model.pass ? "mv-mark--ok" : "mv-mark--no"}`}>
                      {model.pass ? "✓" : "✕"}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </article>

          <article className="mv-platform-card">
            <h3 className="mv-platform-card__title">Score live runs, not just test sets</h3>
            <p className="mv-platform-card__kicker">Tracing + evals</p>
            <div className="mv-platform-card__stage" aria-hidden="true">
              <div className="mv-trace">
                <div className="mv-trace__tree">
                  <span />
                  <span />
                  <span />
                  <span />
                </div>
                <span className="mv-trace__arrow">→</span>
                <div className="mv-trace__evals">
                  <span className="mv-mark mv-mark--ok">✓</span>
                  <span className="mv-mark mv-mark--ok">✓</span>
                  <span className="mv-mark mv-mark--ok">✓</span>
                </div>
              </div>
            </div>
          </article>

          <article className="mv-platform-card mv-platform-card--focus">
            <h3 className="mv-platform-card__title">Govern tool access in one place</h3>
            <p className="mv-platform-card__kicker">MCP Gateway + agents</p>
            <div className="mv-platform-card__stage">
              <div className="mv-gate" aria-label="Agent routes through MCP Gateway onto PySmith">
                <div className="mv-gate__agent">
                  <span className="mv-gate__dot" />
                  Agent
                </div>
                <div className="mv-gate__spine" title="MCP Gateway">
                  <span className="mv-gate__spine-label">MCP</span>
                </div>
                <div className="mv-gate__branches">
                  <div className="mv-gate__allow">
                    <code>python.exec</code>
                    <span className="mv-gate__chev">→</span>
                    <strong>PySmith runtime</strong>
                    <span className="mv-mark mv-mark--ok">✓</span>
                  </div>
                  <div className="mv-gate__deny">
                    <code>unsafe.shell</code>
                    <span className="mv-mark mv-mark--no">✕</span>
                  </div>
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
