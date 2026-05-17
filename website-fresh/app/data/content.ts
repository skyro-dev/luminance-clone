export const navLinks = [
  { label: "Process", href: "#process" },
  { label: "Services", href: "#services" },
  { label: "Benefits", href: "#benefits" },
  { label: "About", href: "#about" },
  { label: "FAQ", href: "#faq" },
];

export const processSteps = [
  {
    number: "01",
    title: "Discovery & Analysis",
    description:
      "We collaborate with your team to identify automation opportunities, analyzing workflows to pinpoint areas where AI can deliver significant value.",
  },
  {
    number: "02",
    title: "Development",
    description:
      "Crafting tailored AI solutions, we design interfaces that seamlessly integrate into your existing systems, ensuring minimal disruption and maximum efficiency.",
  },
  {
    number: "03",
    title: "Deployment",
    description:
      "We smoothly roll out the solutions into your workflow, provide thorough training, and offer ongoing support to keep things running smoothly. We're here for you every step of the way.",
  },
];

export const services = [
  {
    id: "autonomous-operations",
    icon: "Bot",
    title: "Autonomous Operations",
    description:
      "We design and deploy AI agents and MCP based multi agent workflows that take over repetitive, manual tasks—freeing up your teams to focus on strategic priorities.",
    hasDemo: false,
  },
  {
    id: "conversational-knowledge",
    icon: "MessageSquare",
    title: "Conversational Knowledge",
    description:
      "We transform your internal documentation and knowledge bases into dynamic, searchable GPT-powered assistants with RAG agents.",
    hasDemo: true,
  },
  {
    id: "intelligent-insights",
    icon: "BarChart3",
    title: "Intelligent Insights",
    description:
      "We build and integrate predictive systems that turn your operational data into real-time foresight, enabling faster, smarter decisions.",
    hasDemo: false,
  },
  {
    id: "growth-automations",
    icon: "Zap",
    title: "Growth Automations",
    description:
      "We engineer end-to-end workflows that capture leads, enrich data, and trigger smart actions—automating revenue-driving processes at scale.",
    hasDemo: false,
  },
];

export const benefits = [
  {
    icon: "Clock",
    metric: "20+",
    claim: "Hrs Saved Weekly per Team",
    explanation:
      "Intelligent agents reduce busywork so your top talent can focus on strategy.",
  },
  {
    icon: "Rocket",
    metric: "10",
    claim: "Deploy MVP Automations in Just 10 Days",
    explanation:
      "From chaos to clarity in under two weeks with our rapid pilot model.",
  },
  {
    icon: "Puzzle",
    claim: "Stack-Agnostic Integration",
    explanation:
      "Works with Jira, Slack, Gmail, Airtable, Pinecone, Notion, HubSpot—whatever you use.",
  },
  {
    icon: "Settings",
    claim: "Custom-Built for your Business Logic",
    explanation:
      "Our agents aren't generic. They're trained on your process, data, and domain.",
  },
  {
    icon: "TrendingUp",
    claim: "Decision Support in real-time",
    explanation:
      "With predictive insights and intelligent summaries, you're always one step ahead.",
  },
  {
    icon: "Code",
    claim: "No-code Solutions",
    explanation:
      "We hand over flexible systems that your teams can evolve without writing a line of code.",
  },
];

export const faqItems = [
  {
    question: "What is AI automation and how can it benefit my business?",
    answer:
      "AI automation uses artificial intelligence to handle repetitive tasks, analyze data, and make decisions without human intervention. It can reduce costs, improve accuracy, and free your team to focus on strategic work.",
  },
  {
    question: "What services does your agency offer?",
    answer:
      "We offer autonomous operations, conversational knowledge systems, intelligent insights, and growth automation solutions tailored to your business needs.",
  },
  {
    question: "How long does it take to implement an AI automation solution?",
    answer:
      "Most MVP automations can be deployed in just 10 days. Full enterprise solutions typically take 4-8 weeks depending on complexity.",
  },
  {
    question:
      "What kind of support do you provide after deploying an AI automation solution?",
    answer:
      "We provide ongoing monitoring, maintenance, training, and optimization services to ensure your AI solutions continue to deliver value.",
  },
  {
    question: "How much does an AI automation solution cost?",
    answer:
      "Costs vary based on scope and complexity. We offer flexible pricing models including project-based and retainer options. Book a free consultation for a custom quote.",
  },
];

export const chatDemoMessages = [
  { role: "user" as const, content: "How do I reset my password?" },
  {
    role: "ai" as const,
    content:
      "I can help you reset your password. Please go to Settings > Security > Change Password. You'll receive a verification email to confirm the change.",
  },
  { role: "user" as const, content: "Can you find the Q3 revenue report?" },
  {
    role: "ai" as const,
    content:
      "I found the Q3 Revenue Report in your Finance folder. Here are the key highlights: Revenue grew 24% YoY to $2.4M. Would you like me to summarize the full report?",
  },
];
