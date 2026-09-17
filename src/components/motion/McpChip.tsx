type McpChipProps = {
  compact?: boolean;
};

export function McpChip({ compact = false }: McpChipProps) {
  return (
    <span className={`mv-mcp${compact ? " mv-mcp--compact" : ""}`}>
      <span className="mv-mcp__dot" aria-hidden="true" />
      MCP connected
    </span>
  );
}
