export const skills = [
  'Python', 'SQL', 'PySpark', 'Databricks', 'Azure',
  'FastAPI', 'LangChain', 'OpenAI API', 'Docker',
  'MLflow', 'Pandas', 'Scikit-learn', 'GitHub Actions', 'REST APIs',
];

export const tools1 = [
  { name: 'Python',     icon: 'python' },
  { name: 'FastAPI',    icon: 'fastapi' },
  { name: 'Docker',     icon: 'docker' },
  { name: 'Azure',      icon: 'azure' },
  { name: 'PostgreSQL', icon: 'postgresql' },
  { name: 'TensorFlow', icon: 'tensorflow' },
  { name: 'PyTorch',    icon: 'pytorch' },
  { name: 'Git',        icon: 'git' },
  { name: 'GitHub',     icon: 'github' },
  { name: 'Linux',      icon: 'linux' },
  { name: 'Jupyter',    icon: 'jupyter' },
];

export const tools2 = [
  { name: 'Kubernetes', icon: 'kubernetes' },
  { name: 'Databricks', icon: 'databricks' },
  { name: 'MySQL',      icon: 'mysql' },
  { name: 'Redis',      icon: 'redis' },
  { name: 'Flask',      icon: 'flask' },
  { name: 'Bash',       icon: 'bash' },
  { name: 'AWS',        icon: 'aws' },
  { name: 'GCP',        icon: 'gcp' },
  { name: 'Prometheus', icon: 'prometheus' },
  { name: 'Grafana',    icon: 'grafana' },
  { name: 'Airflow',    icon: 'airflow' },
];

export const projects = [
  {
    title: 'Data Platform',
    status: 'Live',
    tagline: 'Enterprise data lakehouse',
    description:
      'End-to-end data platform on Databricks with Delta Lake — petabyte-scale ingestion, transformation, and serving for analytics teams.',
    stack: ['Databricks', 'PySpark', 'Delta Lake', 'Azure', 'MLflow'],
    color: 'from-indigo-500 to-violet-600',
    live: null,
    github: null,
  },
  {
    title: 'AI Search',
    status: 'Deployed',
    tagline: 'Semantic search engine',
    description:
      'Retrieval-augmented search using OpenAI embeddings and pgvector, enabling natural-language queries over a large enterprise knowledge base.',
    stack: ['Python', 'OpenAI', 'pgvector', 'FastAPI', 'PostgreSQL'],
    color: 'from-sky-500 to-cyan-500',
    live: null,
    github: null,
  },
  {
    title: 'ML Pipeline',
    status: 'Production',
    tagline: 'Automated model training',
    description:
      'Fully automated ML pipeline with feature engineering, training, evaluation, and deployment. Integrated with CI/CD for continuous retraining.',
    stack: ['Python', 'MLflow', 'Docker', 'Azure DevOps', 'Scikit-learn'],
    color: 'from-emerald-500 to-teal-500',
    live: null,
    github: null,
  },
  {
    title: 'Analytics API',
    status: 'Live',
    tagline: 'Real-time analytics service',
    description:
      'High-performance REST API serving aggregated analytics with caching, rate limiting, and observability built in from day one.',
    stack: ['FastAPI', 'Redis', 'PostgreSQL', 'Docker', 'Python'],
    color: 'from-pink-500 to-rose-500',
    live: null,
    github: null,
  },
];

export const timeline = [
  {
    period: 'Aug 2025 — Present',
    org: 'Aletha',
    role: 'Data Engineer, Consultant',
    bullets: [
      'Building enterprise-scale data and AI infrastructure on Azure and Databricks for large financial institutions, handling terabyte-scale datasets across Canada and the U.S.',
      'Deployed an LLM-powered automation tool that eliminated 100+ hours of manual review effort across engineering workflows.',
      'Architected a geospatial enrichment platform processing 2M+ records via external APIs with end-to-end CI/CD automation.',
      'Modernising legacy banking workflows by migrating business logic into scalable cloud-native pipelines using LLM-assisted techniques.',
    ],
    tags: ['Azure', 'Databricks', 'Python', 'LLMs', 'CI/CD'],
    accent: '#6366f1',
  },
  {
    period: 'Jan 2025 — Jul 2025',
    org: 'Independent Consultant',
    role: 'ML / Data Engineering Consultant',
    bullets: [
      'Developed a computer vision prototype for automated quality assessment in agriculture, applying deep learning and low-data techniques.',
      'Used LLM-assisted workflows to improve data labeling efficiency and accelerate model experimentation across constrained datasets.',
    ],
    tags: ['Computer Vision', 'PyTorch', 'LLMs', 'Python'],
    accent: '#10b981',
  },
  {
    period: 'Nov 2021 — Dec 2024',
    org: 'IBM',
    role: 'Data Scientist / Data Engineer',
    bullets: [
      'Built end-to-end ML pipelines across multiple enterprise client engagements — from data preprocessing and feature engineering through to production deployment.',
      'Developed NLP models for real-time conversation analysis, improving virtual assistant performance by 30%.',
      'Led a large-scale data warehouse migration from on-prem to Azure, building 30+ ADF ETL pipelines and owning technical design and stakeholder communication.',
      'Developed a production-grade document intelligence system using LLMs to extract structured data from unstructured enterprise documents.',
    ],
    tags: ['Python', 'PySpark', 'Databricks', 'Azure', 'NLP', 'ADF'],
    accent: '#0ea5e9',
  },
  {
    period: 'Aug 2021 — Oct 2021',
    org: 'QualiTEAS Inc.',
    role: 'Machine Learning Engineer',
    bullets: [
      'Built and deployed a computer vision model for automated defect detection, reducing manual inspection time by 50%.',
      'Implemented CI/CD pipelines for ML deployment on Azure, improving reproducibility and deployment frequency.',
    ],
    tags: ['PyTorch', 'Azure', 'CI/CD', 'Computer Vision'],
    accent: '#f59e0b',
  },
  {
    period: 'Jan 2021 — Jun 2021',
    org: 'McGill University',
    role: 'Data Scientist (Intern)',
    bullets: [
      'Built web scraping pipelines to collect and structure bilingual community data from 70+ sources.',
      'Applied topic modelling to surface key themes and built Power BI dashboards for stakeholder reporting.',
    ],
    tags: ['Python', 'NLP', 'Power BI', 'Web Scraping'],
    accent: '#ec4899',
  },
  {
    period: 'Sep 2019 — May 2021',
    org: 'Lakehead University',
    role: 'Researcher',
    bullets: [
      'Published research on explainable AI for medical image classification in IEEE 2021.',
      'Applied statistical modelling and predictive analytics to large-scale datasets as part of graduate research.',
    ],
    tags: ['XAI', 'Deep Learning', 'Research', 'IEEE'],
    accent: '#8b5cf6',
  },
];

export const education = [
  {
    year: '2021',
    degree: "Master's in Computer Science",
    institution: 'Lakehead University',
    location: 'Canada',
    grade: 'Distinction',
    modules: ['Machine Learning', 'Deep Learning', 'NLP', 'Statistical Modelling'],
    accent: '#c4705a',
    bg: 'linear-gradient(135deg, #fdf3ef 0%, #fae8e0 100%)',
    badgeBg: 'linear-gradient(160deg, #c4705a 0%, #d4896e 100%)',
  },
  {
    year: '2019',
    degree: 'Bachelor\'s in Computer Engineering',
    institution: 'Gujarat Technological University',
    location: 'India',
    grade: 'Distinction',
    modules: ['Algorithms', 'Databases', 'Software Engineering', 'Data Structures'],
    accent: '#b8892a',
    bg: 'linear-gradient(135deg, #fdf8ed 0%, #f9edcc 100%)',
    badgeBg: 'linear-gradient(160deg, #b8892a 0%, #cfa040 100%)',
  },
];
