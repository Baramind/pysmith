import type { FieldStory, ToolRoute } from "@/lib/field";

function outcomeLabel(route: ToolRoute) {
  if (route.outcome === "allow") return "allow";
  if (route.outcome === "gate") return "human gate";
  return "deny";
}

export function RoutingVisual({ story }: { story: FieldStory }) {
  return (
    <div className="mv-route">
      <div className="mv-route__canon">
        <span>Specialist agents</span>
        <span className="mv-route__chev">→</span>
        <span>MCP Gateway</span>
        <span className="mv-route__chev">→</span>
        <span className="mv-route__desk">PySmith runtime</span>
        <span className="mv-route__chev">→</span>
        <span>Human approve</span>
      </div>
      <ul className="mv-route__list">
        {story.routes.map((route) => (
          <li key={`${route.from}-${route.tool}`} className={`mv-route__row mv-route__row--${route.outcome}`}>
            <span className="mv-route__from">{route.from}</span>
            <code>{route.tool}</code>
            <span className="mv-route__out">{outcomeLabel(route)}</span>
            <span className="mv-route__dest">{route.dest}</span>
          </li>
        ))}
      </ul>
      <p className="mv-loop__cap">{story.routingCaption}</p>
    </div>
  );
}
