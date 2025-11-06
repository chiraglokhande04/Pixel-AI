export const industriesData = {
  healthcare: {
    title: "Healthcare & Life Sciences",
    heroDescription:
      "Clinical intelligence, document digitization, personalized care, and automated revenue cycle — built with compliance and interoperability.",
    challenges: [
      "Fragmented data across EMR, claims, labs, and imaging systems",
      "Manual medical document processing (ICD/HL7) slowing care & reimbursements",
      "Need for clinical support & decision intelligence",
      "Strict privacy, compliance & auditability requirements",
    ],
    solutions: [
      {
        title: "Clinical Decision Support & Diagnostics",
        desc: "LLM + knowledge-graph assistance for triage, coding support, and clinician workflows.",
      },
      {
        title: "Document & Data Intelligence (ICD/HL7)",
        desc: "Automated intake, classification, extraction & validation for claims and EHR docs.",
      },
      {
        title: "Personalized Care & Risk Modeling",
        desc: "Predictive models for readmission risk, chronic-care pathways and adherence.",
      },
      {
        title: "Claims Automation & Revenue Cycle",
        desc: "End-to-end claims automation with AI, reducing denial rates and turnaround time.",
      },
    ],
    impact: [
      { k: "60–70%", v: "Faster document throughput" },
      { k: "30–45%", v: "Reduced manual ops cost" },
      { k: "99.95%", v: "System uptime for clinical workflows" },
      { k: "~20%", v: "Improved revenue capture" },
    ],
    stack: [
      "FHIR/HL7, ICD-10, SNOMED",
      "LLMs, RAG, Knowledge Graphs",
      "Neo4j, Airflow, Snowflake, Postgres",
      "React, Node/Python, FastAPI",
      "Kubernetes, Terraform, AWS/Azure/GCP",
    ],
    cases: [
      {
        name: "Prior-Auth Automation for Multi-Specialty Network",
        before:
          "Manual review across payer portals; 48–72h turnaround; frequent denials due to missing context.",
        after:
          "Agentic workflow with document intelligence; <12h turnaround; denials reduced by 28%.",
      },
      {
        name: "Clinical Coding & Decision Support",
        before: "Manual coding and guideline referencing caused inconsistency and rework.",
        after: "LLM-guided coding support increased coder throughput by 35% and reduced errors by 22%.",
      },
    ],
  },

  finance: {
    title: "Finance & Insurance",
    heroDescription:
      "Intelligent risk, underwriting, and customer intelligence solutions engineered for speed, trust, and regulatory compliance.",
    challenges: [
      "Fragmented data across banking, credit, CRM and policy systems",
      "Manual KYC, underwriting, claims validation and compliance reporting",
      "Fraud patterns evolving faster than rule-based systems can detect",
      "Demand for hyper-personalized products and advisory",
    ],
    solutions: [
      {
        title: "Risk Scoring & Fraud Intelligence",
        desc: "Graph + behavioral ML fraud models for real-time anomaly detection and risk scoring.",
      },
      {
        title: "Automated Underwriting & Policy Decisioning",
        desc: "AI-driven document intelligence + scoring engine to accelerate loan/policy decisions.",
      },
      {
        title: "KYC/AML Automation",
        desc: "ID verification, sanctions screening, AML monitoring using LLMs + knowledge graphs.",
      },
      {
        title: "Customer 360 & Personalized Banking",
        desc: "Unified intelligence layer enabling advisory, product recommendations and retention models.",
      },
    ],
    impact: [
      { k: "65–80%", v: "Faster underwriting cycles" },
      { k: "30–55%", v: "Lower claims processing cost" },
      { k: "40–60%", v: "Reduced fraud & compliance overhead" },
      { k: "2–4x", v: "Increase in customer engagement" },
    ],
    stack: [
      "PCI-DSS, SOC2, ISO 27001",
      "LLMs, RAG, Vector DBs, KGs",
      "Graph ML (Neo4j, TigerGraph)",
      "Python/Node, Kafka, Airflow",
      "Snowflake, Databricks, Postgres",
      "Kubernetes, Terraform, AWS/Azure",
    ],
    cases: [
      {
        name: "Automated Underwriting for Retail Lending",
        before: "Manual document checks and risk scoring; 3–5 day approval cycles.",
        after: "AI-driven intake + scoring; same-day approvals; decision accuracy +23%.",
      },
      {
        name: "Fraud Detection for Digital Payments",
        before: "Rules-based engine missing new fraud vectors and patterns.",
        after: "Graph ML fraud engine cut false positives by 35% and stopped fraud 78% faster.",
      },
    ],
  },

  retail: {
    title: "Retail & E-commerce",
    heroDescription:
      "Personalized shopping experiences, intelligent merchandising, and data-driven lifecycle optimization across omni-channel retail.",
    challenges: [
      "Low personalization leading to weak conversions and low LTV",
      "Inaccurate demand forecasting causing stockouts or overstock",
      "Disconnected online, store, and marketplace operations",
      "Inefficient marketing spend with poor attribution and targeting",
    ],
    solutions: [
      {
        title: "Personalization & Recommendations",
        desc: "Contextual, behavioral and affinity-based recommendations across channels.",
      },
      {
        title: "Demand Forecasting & Inventory Planning",
        desc: "AI forecasting to optimize replenishment, reduce stockouts and storage loss.",
      },
      {
        title: "Customer Segmentation & Retention",
        desc: "Lifecycle segmentation, churn prediction and CLV-based campaign automation.",
      },
      {
        title: "Dynamic Pricing & Promotions",
        desc: "Price elasticity and competitive intelligence models for revenue lift.",
      },
    ],
    impact: [
      { k: "18–35%", v: "Increase in conversions" },
      { k: "25–40%", v: "Reduced inventory waste" },
      { k: "2.5x", v: "Increase in repeat purchase rate" },
      { k: "12–20%", v: "Improvement in AOV" },
    ],
    stack: [
      "LLMs, RAG, Vector DBs",
      "Snowflake, BigQuery, dbt",
      "React/Next.js, Node, Python",
      "Airflow, Kafka, Redis",
      "AWS/GCP, Kubernetes, Terraform",
    ],
    cases: [
      {
        name: "Marketplace Personalization Engine",
        before: "Static recommendations and low product relevance hurt conversions.",
        after: "AI-personalized storefront raised CVR by 29% within 60 days.",
      },
      {
        name: "Demand Forecasting for Omnichannel Retailer",
        before: "Forecasting errors caused frequent stockouts and excess inventory.",
        after: "AI forecasting cut stockouts by 43% and overstock by 28%.",
      },
    ],
  },

  manufacturing: {
    title: "Manufacturing & Supply Chain",
    heroDescription:
      "Predictive intelligence, automated quality control, and end-to-end supply visibility for resilient, efficient manufacturing.",
    challenges: [
      "Unplanned downtime increasing operational cost",
      "Manual QA inspections causing defects and delays",
      "Low visibility across suppliers, warehouses and logistics",
      "Inefficient production planning and resource allocation",
    ],
    solutions: [
      {
        title: "Predictive Maintenance",
        desc: "Sensor-driven ML models predicting failures and optimizing maintenance cycles.",
      },
      {
        title: "Computer Vision Quality Assurance",
        desc: "Automated vision-based defect detection reducing manual QA workload.",
      },
      {
        title: "Supply Chain Visibility & Planning",
        desc: "Real-time tracking and planning for inventory, logistics and fulfillment.",
      },
      {
        title: "Production Optimization",
        desc: "Throughput optimization and resource scheduling models for factories.",
      },
    ],
    impact: [
      { k: "30–50%", v: "Reduction in downtime" },
      { k: "45–60%", v: "Lower QA inspection effort" },
      { k: "20–35%", v: "Supply chain cost reduction" },
      { k: "12–25%", v: "Higher plant throughput" },
    ],
    stack: [
      "IoT + Edge + Sensors",
      "Vision Models (YOLO, DETR, SAM)",
      "Python, FastAPI, Kafka",
      "Airflow, Snowflake, dbt",
      "Azure/AWS IoT, Kubernetes",
    ],
    cases: [
      {
        name: "AI QC for Automotive Components",
        before: "Manual inspection missed micro-defects and delayed shipments.",
        after: "Vision QA caught 97% defects; inspection time down 63%.",
      },
      {
        name: "Predictive Maintenance for Machinery",
        before: "Reactive maintenance increased cost and downtime.",
        after: "Predictive models reduced breakdowns by 42% and costs by 31%.",
      },
    ],
  },

  energy: {
    title: "Energy & Utilities",
    heroDescription:
      "Forecasting, optimization, asset intelligence, and sustainability analytics for modern energy operations.",
    challenges: [
      "Demand volatility and inaccurate grid forecasting",
      "Aging infrastructure with limited asset intelligence",
      "High carbon footprint and sustainability pressure",
      "Manual field ops and outage response delays",
    ],
    solutions: [
      {
        title: "Smart Grid Forecasting",
        desc: "Weather + consumption forecasting for grid stability and load distribution.",
      },
      {
        title: "Asset Monitoring & Predictive Maintenance",
        desc: "Sensor intelligence for equipment health scoring and maintenance triggers.",
      },
      {
        title: "Field Operations Automation",
        desc: "AI-driven scheduling, routing and ticketing for field teams and outage response.",
      },
      {
        title: "Energy Optimization & Carbon Analytics",
        desc: "Sustainability dashboards and carbon footprint intelligence.",
      },
    ],
    impact: [
      { k: "20–35%", v: "Lower generation & storage cost" },
      { k: "40–55%", v: "Reduced outage & response time" },
      { k: "18–30%", v: "Asset life extension" },
      { k: "25–40%", v: "Carbon footprint reduction" },
    ],
    stack: [
      "IoT + Sensor Streams",
      "LLMs, RAG, KGs",
      "Python, Node, FastAPI",
      "Airflow, Snowflake, TimescaleDB",
      "Azure/AWS/GCP",
    ],
    cases: [
      {
        name: "Grid Forecasting for Utility Provider",
        before: "Inaccurate demand planning caused outages and high costs.",
        after: "AI forecasting improved accuracy by 37% and cut outages by 28%.",
      },
      {
        name: "Predictive Maintenance for Energy Assets",
        before: "Failures caused heavy downtime and repair cost.",
        after: "Predictive model reduced failures by 44% and maintenance cost by 32%.",
      },
    ],
  },

  government: {
    title: "Government & Public Sector",
    heroDescription:
      "Citizen platforms, policy intelligence, and smart city solutions improving governance, transparency and efficiency.",
    challenges: [
      "Manual citizen services causing delays and inefficiencies",
      "Policy decisions not supported by real-time data intelligence",
      "Fraud, misuse and leakages in welfare and public programs",
      "Urban infrastructure planning lacking predictive insights",
    ],
    solutions: [
      {
        title: "Citizen Service Automation",
        desc: "AI chat + workflow automation for citizen-facing services and grievance redressal.",
      },
      {
        title: "Policy & Governance Intelligence",
        desc: "Dashboards and AI models to evaluate policy impact and optimize planning.",
      },
      {
        title: "Smart City Intelligence",
        desc: "Urban planning, traffic, safety and infrastructure optimization using ML + IoT.",
      },
      {
        title: "Welfare Fraud Analytics",
        desc: "Fraud detection for programs, subsidies and schemes to reduce leakages.",
      },
    ],
    impact: [
      { k: "35–55%", v: "Faster citizen service delivery" },
      { k: "20–30%", v: "Improved policy efficiency" },
      { k: "25–40%", v: "Reduction in welfare leakages" },
      { k: "30–45%", v: "Improved resource allocation" },
    ],
    stack: [
      "LLMs, RAG, Vector DBs",
      "Python, FastAPI, Node",
      "Airflow, Postgres, Neo4j",
      "React, Next.js, Docker",
      "AWS, Azure, NIC Cloud",
    ],
    cases: [
      {
        name: "Citizen Service Automation for State Gov",
        before: "Manual workflows resulted in long turnaround and poor tracking.",
        after: "AI + automation reduced handling time by 52% and improved resolution rate by 38%.",
      },
      {
        name: "Policy Analytics for Urban Planning",
        before: "Planning based on legacy data and guesswork.",
        after: "Data-driven intelligence improved planning efficiency by 29%.",
      },
    ],
  },
};
