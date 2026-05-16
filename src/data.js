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
    period: 'Present',
    org: 'Current Role',
    role: 'Data & AI Engineer',
    description:
      'Building intelligent data products and AI-powered systems. Architecting pipelines, deploying models, and bridging data engineering with machine learning.',
    tags: ['Python', 'Databricks', 'Azure', 'LangChain', 'FastAPI'],
    accent: '#6366f1',
  },
  {
    period: '2022 — 2024',
    org: 'Previous Role',
    role: 'Data Engineer',
    description:
      'Designed and maintained large-scale ETL pipelines, data models, and analytics infrastructure supporting business intelligence teams.',
    tags: ['Python', 'SQL', 'PySpark', 'Airflow', 'Azure'],
    accent: '#0ea5e9',
  },
  {
    period: 'Education',
    org: 'University',
    role: 'M.Sc., Data Science',
    description:
      'Postgraduate study in machine learning, statistical modelling, and big data technologies.',
    tags: ['Machine Learning', 'Statistics', 'Research'],
    accent: '#10b981',
  },
];
