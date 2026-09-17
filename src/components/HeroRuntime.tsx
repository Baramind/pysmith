export function HeroRuntime() {
  return (
    <div className="ps-figure-wrap">
      <div className="ps-report">
        <div className="ps-report__head">
          <span className="ps-report__title">instance-medium</span>
          <span className="ps-meta" style={{ letterSpacing: "0.08em" }}>
            RUNNING · 14D 3H
          </span>
        </div>
        <div className="ps-report__body">
          <div className="ps-meta" style={{ marginBottom: 12 }}>
            Persistent interpreter · MCP session
          </div>
          <pre className="ps-repl" aria-label="Python session that is still running">
            <span className="ps-prompt">$</span> python{"\n"}
            <span className="ps-prompt">&gt;&gt;&gt;</span> import pandas as pd{"\n"}
            <span className="ps-prompt">&gt;&gt;&gt;</span> pd.__version__{"\n"}
            {"'2.2.3'\n"}
            <span className="ps-prompt">&gt;&gt;&gt;</span>{" "}
            <span className="ps-comment"># still here from Tuesday</span>
          </pre>
          <div className="ps-report__legend">
            <span>UV / PIXI</span>
            <span>MCP EXEC</span>
            <span>FIXED $/HR</span>
          </div>
        </div>
        <div className="ps-report__components">
          <div>
            <div className="ps-meta" style={{ fontSize: 9.5, marginBottom: 5 }}>
              Packages
            </div>
            <div style={{ fontSize: 12.5, fontWeight: 500, lineHeight: 1.35 }}>
              numpy · pandas · httpx
            </div>
          </div>
          <div>
            <div className="ps-meta" style={{ fontSize: 9.5, marginBottom: 5 }}>
              Tools
            </div>
            <div style={{ fontSize: 12.5, fontWeight: 500, lineHeight: 1.35 }}>
              exec_python · spawn_agent
            </div>
          </div>
          <div>
            <div className="ps-meta" style={{ fontSize: 9.5, marginBottom: 5 }}>
              Disk
            </div>
            <div style={{ fontSize: 12.5, fontWeight: 500, lineHeight: 1.35 }}>
              Workspace kept warm
            </div>
          </div>
          <div>
            <div className="ps-meta" style={{ fontSize: 9.5, marginBottom: 5 }}>
              Rate
            </div>
            <div style={{ fontSize: 12.5, fontWeight: 500, lineHeight: 1.35 }}>
              Known before you start
            </div>
          </div>
        </div>
      </div>

      <div className="ps-float ps-float--tl">
        <div className="ps-float__k">FIXED RATE</div>
        <div className="ps-float__v">$0.08 / hr</div>
      </div>
      <div className="ps-float ps-float--navy ps-float--r">
        <div className="ps-float__k">PACKAGES</div>
        <div className="ps-float__v">Still installed</div>
      </div>
      <div className="ps-float ps-float--bl">
        <div className="ps-float__k">UPTIME</div>
        <div className="ps-float__v">14 days, no reboot</div>
      </div>
      <div className="ps-float ps-float--br">MCP CONNECTED</div>
    </div>
  );
}
