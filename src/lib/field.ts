export type FieldSlug = "finance" | "mining" | "supply";

export type FieldSource = {
  id: number;
  label: string;
  href: string;
};

export type ImpactChip = {
  value: string;
  label: string;
  attribution: string;
  sourceId: number;
};

export type ToolRoute = {
  from: string;
  tool: string;
  outcome: "allow" | "deny" | "gate";
  dest: string;
};

export type FieldStory = {
  slug: FieldSlug;
  href: string;
  kicker: string;
  title: string;
  panelLead: string;
  promise: string;
  mustNot: string;
  loop: string[];
  loopCaption: string;
  routes: ToolRoute[];
  routingCaption: string;
  chips: ImpactChip[];
  sources: FieldSource[];
  problemTitle: string;
  problem: string[];
  workflowTitle: string;
  workflow: string[];
  pilotTitle: string;
  pilot: string[];
};

export const evidenceBadge = "Evidence-led concept";

export const fieldIntro = {
  eyebrow: "In the field",
  title: "Where a persistent Python desk earns its keep",
  lead: "These are evidence-led concepts, not deployments we claim as our own. Each story borrows a published operating problem, then shows where PySmith sits: the always-on Python desk behind MCP tool calls — never the system that signs the decision.",
};

export const fieldStories: FieldStory[] = [
  {
    slug: "finance",
    href: "/field/finance/",
    kicker: "Decision support",
    title: "Decision-grade finance",
    panelLead:
      "Keep evidence, computation and review history together long enough to inspect, challenge and reproduce.",
    promise:
      "Keep evidence, computation and review history together long enough to inspect, challenge and reproduce.",
    mustNot:
      "PySmith does not autonomously approve credit, execute trades, set prices or file regulatory reports.",
    loop: [
      "Scope",
      "Retrieve",
      "Assemble",
      "Analyse",
      "Challenge",
      "Present",
      "Human approve",
    ],
    loopCaption:
      "A review that spans sessions. The last step is a person, not a model.",
    routes: [
      {
        from: "Analyse agent",
        tool: "python.exec",
        outcome: "allow",
        dest: "PySmith runtime",
      },
      {
        from: "Challenge agent",
        tool: "retrieve",
        outcome: "allow",
        dest: "PySmith runtime",
      },
      {
        from: "Present agent",
        tool: "credit.approve",
        outcome: "deny",
        dest: "Blocked — human only",
      },
    ],
    routingCaption:
      "Challenge and Analyse agents call python.exec and retrieve through MCP. PySmith holds the versioned evidence set and warm pandas / NLP libraries. Approval stays with a person.",
    chips: [
      {
        value: "5.7% → 3.7%",
        label: "Top-20 retrieval failure with contextual embeddings; + BM25 2.9% (−49%); + rerank 1.9% (−67%). Lab, not fintech production.",
        attribution: "Anthropic 2024",
        sourceId: 1,
      },
      {
        value: ">98%",
        label: "Advisor teams using the internal AI Assistant. Corpus 100k documents; reported access 20% → 80%. Published collaboration figures.",
        attribution: "OpenAI / Morgan Stanley",
        sourceId: 2,
      },
      {
        value: ">5,000",
        label: "Bankers on Rogo; up to 10 hours/week saved; >50 million documents. Vendor-reported research and diligence, not automatic underwriting.",
        attribution: "OpenAI / Rogo",
        sourceId: 3,
      },
    ],
    sources: [
      {
        id: 1,
        label:
          "Anthropic, “Introducing Contextual Retrieval”, 19 September 2024.",
        href: "https://www.anthropic.com/news/contextual-retrieval",
      },
      {
        id: 2,
        label:
          "OpenAI, “Morgan Stanley uses AI evals to shape the future of financial services”, 4 December 2024.",
        href: "https://openai.com/index/morgan-stanley/",
      },
      {
        id: 3,
        label:
          "OpenAI, “Rogo scales AI-driven financial research with OpenAI o1”, 13 February 2025.",
        href: "https://openai.com/index/rogo/",
      },
    ],
    problemTitle: "The decision problem",
    problem: [
      "Financial teams do not need a plausible paragraph. They need the applicable policy, the correct version of a document, the relevant transaction evidence and a traceable explanation of how those sources support a recommendation. A retrieval system that returns a fragment without its entity, date, jurisdiction or exception can produce an answer that sounds confident but is not decision-grade.",
      "There is public evidence that contextual retrieval improves the search step. Anthropic’s 2024 evaluation tested codebases, fiction, research papers and other knowledge domains. Its method prepends chunk-specific explanatory context before creating embeddings and a BM25 index. Anthropic reports that contextual embeddings reduced the top-20 retrieval failure rate from 5.7% to 3.7%; combining contextual embeddings with contextual BM25 reduced it to 2.9%, a 49% reduction in failure rate. Adding reranking reduced the reported failure rate to 1.9%, a 67% reduction. These are Anthropic’s experiments across its selected datasets and configurations, not a fintech production benchmark.",
      "Financial-services deployments show what governance looks like in practice. Morgan Stanley reports that more than 98% of advisor teams use its internal AI Assistant for knowledge retrieval. The firm says it expanded from answering 7,000 questions to handling questions across a corpus of 100,000 documents, while document access increased from 20% to 80%. Its workflow includes daily regression testing, expert feedback, retrieval-method refinement and human review of generated meeting outputs. These are figures published by OpenAI and Morgan Stanley’s collaboration, not an independent audit; the Assistant is an internal wealth-management tool rather than a lending-decision engine.",
      "Rogo provides a more fintech-like example of agentic financial research. OpenAI reports that the platform serves more than 5,000 bankers, saves analysts up to 10 hours per week on research and diligence tasks, and searches more than 50 million financial documents. The figures are vendor-reported. Rogo’s use case is analyst research and diligence, not automatic underwriting or investment approval.",
    ],
    workflowTitle: "A PySmith decision-support workflow",
    workflow: [
      "PySmith can host the persistent Python workspace around a controlled retrieval and analysis system. Persistence is useful when a review spans multiple sessions: the workspace can retain a versioned evidence set, intermediate calculations, model outputs, reviewer questions and the decision audit trail. It can also keep common Python data and document-processing libraries warm. Persistence does not make retrieval correct, confer permission to access confidential data or guarantee that a model will follow policy.",
      "The first use should be low-risk decision support such as policy interpretation, regulatory-change triage, transaction-monitoring investigation or credit-file preparation. Every answer should expose source passages, document versions, timestamps and access decisions. Generated code should run in a restricted environment with allow-listed dependencies and no unrestricted network access.",
    ],
    pilotTitle: "What a pilot should prove",
    pilot: [
      "Evaluate retrieval recall and citation correctness separately from answer quality. Use a labelled set of real questions with known authoritative sources. Measure top-k retrieval failure, source-version accuracy, unsupported-claim rate, analyst correction rate, time to decision, latency, cost and performance under permission changes.",
      "Test adversarial cases: near-duplicate policies, superseded guidance, missing documents, ambiguous entities and conflicting evidence. Compare a stateless baseline with persistent execution so any PySmith benefit is measured rather than assumed.",
    ],
  },
  {
    slug: "mining",
    href: "/field/mining/",
    kicker: "Multi-agent operations",
    title: "Shift-scale mining",
    panelLead:
      "A persistent, inspectable Python environment for testing coordinated decisions across a full operational horizon.",
    promise:
      "A persistent, inspectable Python environment for testing coordinated decisions across a full operational horizon.",
    mustNot:
      "PySmith does not run an autonomous mine, and it does not directly control haul trucks, blasting, braking or processing equipment.",
    loop: ["Fleet", "Plant", "Production", "Scenario", "Supervisor"],
    loopCaption:
      "Agents exchange structured state — not free-form chat. Tonnage is from a published 12-hour simulation, not a pit we operate.",
    routes: [
      {
        from: "Scenario agent",
        tool: "sim.run",
        outcome: "allow",
        dest: "PySmith runtime",
      },
      {
        from: "Scenario agent",
        tool: "policy.eval",
        outcome: "allow",
        dest: "PySmith runtime",
      },
      {
        from: "Supervisor agent",
        tool: "equipment.control",
        outcome: "deny",
        dest: "Blocked — no direct plant control",
      },
    ],
    routingCaption:
      "The Scenario agent’s sim.run and policy.eval tools are allow-listed through MCP onto PySmith. The Supervisor’s equipment.control path is dashed-blocked. Humans approve before any operational system changes.",
    chips: [
      {
        value: "+5.56%",
        label: "603,840 vs 572,017 tons in a calibrated 12-hour / 50-truck simulation. Simulation only — not a production uplift.",
        attribution: "Zhang et al. 2020",
        sourceId: 1,
      },
      {
        value: "Mining-Gym",
        label: "Python discrete-event testbed for dispatch RL. Research, not certified control.",
        attribution: "Banerjee et al. 2025",
        sourceId: 2,
      },
      {
        value: "No published %",
        label: "BHP × Microsoft at Escondida: operator-facing recommendations. The announcement does not publish a measured improvement.",
        attribution: "BHP 2023",
        sourceId: 3,
      },
    ],
    sources: [
      {
        id: 1,
        label:
          "Chi Zhang et al., “Dynamic Dispatching for Large-Scale Heterogeneous Fleet via Multi-agent Deep Reinforcement Learning”, Hitachi America and Stevens Institute of Technology, arXiv, 24 August 2020. Reported results are from calibrated simulation.",
        href: "https://arxiv.org/html/2008.10713v1",
      },
      {
        id: 2,
        label:
          "Chayan Banerjee, Kien Nguyen and Clinton Fookes, “Mining-Gym: A Configurable RL Benchmarking Environment for Open-Pit Truck Dispatch Optimization”, Queensland University of Technology, arXiv v2, 14 November 2025.",
        href: "https://arxiv.org/html/2503.19195v2",
      },
      {
        id: 3,
        label:
          "BHP, “BHP and Microsoft use AI to lift Escondida copper recovery”, 30 May 2023.",
        href: "https://www.bhp.com/news/media-centre/releases/2023/05/bhp-and-microsoft-use-ai-to-lift-escondida-copper-recovery",
      },
    ],
    problemTitle: "The operating challenge",
    problem: [
      "An open-pit mine is a coupled system. Trucks queue at shovels, haul material to crushers or waste dumps, return for another assignment and operate under changing capacities, breakdowns, travel times and production targets. A locally sensible dispatch decision can create a queue elsewhere. The useful problem for agents is coordination across a shift, not a chatbot that gives isolated advice.",
      "A Hitachi America-led study formulated dynamic truck dispatch as a multi-agent reinforcement-learning problem. Each truck was treated as an agent in an event-based simulator calibrated with parameters from real mines. In a simulated 12-hour shift with 50 trucks, three shovels and three dumps, the reported policy delivered 603,840 tons, versus 572,016.87 tons for the Smart Shortest Queue baseline: 31,823.13 additional tons, or 5.56%. It also remained effective in tests with 45–55 trucks without retraining. These are simulation results, not evidence of production deployment or a guaranteed mine-site uplift.",
      "The same paper makes the infrastructure requirement clear: the simulator models stochastic loading, dumping and hauling times, truck failures and new trucks entering the fleet. A newer QUT paper, Mining-Gym, makes a similar case for reproducible experimentation. Its Python-based discrete-event environment models equipment failures, queue congestion and variable haul cycles, then exposes decision points to classical or reinforcement-learning dispatchers. The authors describe the framework as a research testbed, not a validated autonomous-control system.",
      "Industrial mining evidence also points to a human-governed boundary. BHP and Microsoft reported using real-time concentrator data and AI-based recommendations at Escondida so operators could adjust variables affecting ore processing and grade recovery. The announcement says the project was expected to improve recovery; it does not publish a measured percentage improvement. This is a useful example of operator-facing recommendations, but it is not evidence of multi-agent orchestration.",
    ],
    workflowTitle: "A safer PySmith pattern",
    workflow: [
      "PySmith can host the persistent Python computation behind a multi-agent decision-support layer. A fleet agent models truck availability, queues, haul cycles and maintenance events. A plant agent represents shovel, crusher and processing constraints. A production agent tracks shift targets, ore quality and stockpile trade-offs. A scenario agent runs discrete-event simulations and compares policies. A supervisor agent checks constraints, explains conflicts and presents a bounded recommendation.",
      "The agents should exchange structured state, assumptions and proposed actions, not unverified natural-language instructions. A persistent workspace can retain the current mine-state snapshot, simulation seeds, trained policy, scenario results and shift baseline while the system iterates through breakdowns or changing production priorities. Python is a natural fit for discrete-event simulation and numerical analysis. The runtime is an execution substrate; it does not itself provide mine telemetry, operational safety certification, a dispatch policy or a production outcome.",
      "The recommended loop is observe → simulate → challenge → compare → approve → monitor. The supervisor should reject actions that violate capacity, route, maintenance or safety constraints. Human dispatchers approve recommendations before any operational system is changed.",
    ],
    pilotTitle: "What a pilot should prove",
    pilot: [
      "Start offline with historical shift data and a calibrated simulator. Compare a single-agent baseline, a multi-agent policy and existing dispatch heuristics across normal operations, truck failure, shovel outage, crusher congestion and demand or grade changes.",
      "Report throughput, queue time, shovel utilisation, fuel or energy proxy, constraint violations, policy stability and recovery time. Evaluate both average results and worst-case behaviour. Re-run scenarios with held-out conditions to test whether an apparent gain is robust rather than overfit.",
    ],
  },
  {
    slug: "supply",
    href: "/field/supply/",
    kicker: "Planning continuity",
    title: "Living supply plans",
    panelLead:
      "Keep the planning computation available through every replan — people and solvers keep the decision.",
    promise:
      "Keep the planning computation available through every replan — people and solvers keep the decision.",
    mustNot:
      "PySmith does not write to ERP or planning systems without a human gate. The solver remains the source of quantitative truth.",
    loop: [
      "Refresh",
      "Diagnose",
      "Simulate",
      "Validate",
      "Recommend",
      "Monitor",
    ],
    loopCaption:
      "An exception can interrupt mid-loop. Scenario cards stay in the PySmith workspace. erp.write waits for a person.",
    routes: [
      {
        from: "Planner agent",
        tool: "sql.fetch",
        outcome: "allow",
        dest: "PySmith runtime",
      },
      {
        from: "Planner agent",
        tool: "python.analyse",
        outcome: "allow",
        dest: "PySmith runtime",
      },
      {
        from: "Planner agent",
        tool: "solver.run",
        outcome: "allow",
        dest: "PySmith runtime",
      },
      {
        from: "Planner agent",
        tool: "erp.write",
        outcome: "gate",
        dest: "Human approve",
      },
    ],
    routingCaption:
      "sql.fetch, python.analyse and solver.run are allowed through MCP onto PySmith. erp.write requires a teal human gate. OptiGuide pattern: the language model may propose code; the solver remains the source of quantitative truth.",
    chips: [
      {
        value: ">98%",
        label: "On-shelf availability in Unilever’s Walmart Mexico CPFR pilot; >13 billion computations/day. Company-reported, no control group.",
        attribution: "Unilever 2024",
        sourceId: 1,
      },
      {
        value: "~40%",
        label: "Less weekly analysis time in JD.com’s planning assistant; +22% plans within 5% accuracy; +2–3% fulfilment. Author-reported.",
        attribution: "Qi et al. 2025",
        sourceId: 2,
      },
      {
        value: "~93%",
        label: "OptiGuide benchmark accuracy. The paper warns generated code can run and still be wrong.",
        attribution: "Li et al. 2023",
        sourceId: 3,
      },
    ],
    sources: [
      {
        id: 1,
        label:
          "Unilever, “Using AI to optimise our end-to-end supply chain”, 31 July 2024, updated 18 September 2024.",
        href: "https://www.unilever.com/news/news-search/2024/utilising-ai-to-redefine-the-future-of-customer-connectivity/",
      },
      {
        id: 2,
        label:
          "Yongzhi Qi et al., “Leveraging LLM-Based Agents for Intelligent Supply Chain Planning”, arXiv, 4 September 2025.",
        href: "https://arxiv.org/html/2509.03811v1",
      },
      {
        id: 3,
        label:
          "Beibin Li et al., “Large Language Models for Supply Chain Optimization”, Microsoft Research and Microsoft Cloud Supply Chain, arXiv v2, 13 July 2023.",
        href: "https://arxiv.org/html/2307.03875v2",
      },
    ],
    problemTitle: "The planning problem",
    problem: [
      "An end-to-end supply plan is not a single forecast. It connects demand signals to inventory, procurement, production capacity, warehouse allocation, transportation and fulfilment. When a supplier misses a date or demand shifts, planners need to diagnose the cause, test alternatives and replan without losing the assumptions and analysis already completed.",
      "That operating model is visible in two very different public examples. Unilever describes a collaborative planning, forecasting and replenishment model that integrates forecast and actual sales data with customers. In its Walmart Mexico pilot, the company reports more than 98% on-shelf availability, category growth in less than a year and reduced inventory. Unilever also says the model can run more than 13 billion computations per day. These are company-reported results; the article does not publish a control group, baseline availability or a quantified inventory reduction. It describes AI-enabled connected planning, not a multi-agent architecture.",
      "JD.com and academic collaborators provide a closer precedent for agentic planning. Their 2025 paper describes a supply-chain planning assistant deployed in replenishment scenarios. It combines intent classification, task orchestration, SQL retrieval, generated Python/pandas analysis, calls to existing prediction functions and iterative plan correction. The authors report approximately 40% less time per weekly data-processing and analysis cycle, a 22% increase in the proportion of plans with accuracy deviation below 5%, and a 2–3% relative improvement in stock fulfilment rate. The paper does not disclose sample sizes, evaluation duration, confidence intervals or an independent audit, so these figures should be attributed to the authors rather than presented as general benchmarks.",
    ],
    workflowTitle: "A defensible PySmith workflow",
    workflow: [
      "PySmith can provide the persistent Python workspace for a planning agent. The value of persistence is continuity of computation, not autonomous authority. A long-running workspace can retain validated dataframes, scenario baselines, model objects and intermediate results across tool calls. Warm Python environments may also avoid repeating package setup for common data and optimisation libraries.",
      "Microsoft’s OptiGuide work supports this architecture boundary. The system uses a language model to translate questions into code, but retains the optimisation solver as the source of quantitative answers. Microsoft explicitly frames the approach as using LLMs with, rather than replacing, optimisation technology. The paper reports 93% average accuracy on its benchmark, while also documenting that generated code can run successfully and still be wrong.",
    ],
    pilotTitle: "What a pilot should prove",
    pilot: [
      "The initial pilot should be limited to read-only analysis and recommendations. Compare a persistent PySmith workspace with a stateless execution pattern on identical planning tasks. Measure setup time, total compute cost, recovery after interruption, feasible-plan rate, planner acceptance, citation completeness and time from exception to approved recommendation. Do not claim that persistence improves forecast accuracy until those measurements exist.",
      "Production controls should include tenant isolation, dependency and code allow-lists, immutable input snapshots, solver and model versioning, bounded execution, audit logs, independent constraint checks and approval-controlled writes to ERP or planning systems. A fixed hourly runtime can make allocated compute more predictable, but it does not remove token, solver-licence, storage, data-transfer or idle-time costs.",
    ],
  },
];

export function fieldBySlug(slug: FieldSlug): FieldStory {
  const story = fieldStories.find((item) => item.slug === slug);
  if (!story) {
    throw new Error(`Unknown field story: ${slug}`);
  }
  return story;
}

export const architectureCaption =
  "Agents route tool calls through MCP. PySmith is the always-on Python desk those calls land on — packages warm, state intact, bill predictable.";
