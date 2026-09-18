export const offering = {
  policyControlled:
    "Persistent, policy-controlled Python execution for AI agents.",
  managedSandboxes:
    "Managed Python sandboxes for stateful AI agent workflows.",
  executionLayer:
    "The execution layer for AI agents that need persistent Python state.",
  providerNeutral:
    "Provider-neutral Python runtimes for tool-calling AI applications.",
  multiStep:
    "Controlled Python sandboxes for multi-step AI agent work.",
  statefulInfra:
    "Stateful Python execution infrastructure for AI applications.",
} as const;

export const notOffering = {
  shortLived:
    "Run agent-generated Python in isolated, short-lived sessions.",
} as const;
