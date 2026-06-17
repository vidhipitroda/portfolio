export const skills = [
  'Python', 'SQL', 'PySpark', 'Databricks', 'Azure',
  'FastAPI', 'LangChain', 'OpenAI API', 'Docker',
  'MLflow', 'Pandas', 'Scikit-learn', 'GitHub Actions', 'REST APIs',
];


export const tools1 = [
  { name: 'Python',       icon: 'py' },
  { name: 'TypeScript',   icon: 'ts' },
  { name: 'FastAPI',      icon: 'fastapi' },
  { name: 'Docker',       icon: 'docker' },
  { name: 'Azure',        icon: 'azure' },
  { name: 'AWS',          icon: 'aws' },
  { name: 'GCP',          icon: 'gcp' },
  { name: 'PostgreSQL',   icon: 'postgres' },
  { name: 'TensorFlow',   icon: 'tensorflow' },
  { name: 'PyTorch',      icon: 'pytorch' },
  { name: 'Hugging Face', iconUrl: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/huggingface.svg' },
  { name: 'LangChain',    iconUrl: 'https://cdn.simpleicons.org/langchain/1C3C3C' },
  { name: 'LlamaIndex',   iconUrl: 'https://cdn.simpleicons.org/llamaindex/6B4FBB' },
  { name: 'OpenAI',       iconUrl: 'https://cdn.simpleicons.org/openai/412991' },
];

export const tools2 = [
  { name: 'Spark',        iconUrl: 'https://cdn.simpleicons.org/apachespark/E25A1C' },
  { name: 'Kafka',        icon: 'kafka' },
  { name: 'Airflow',      iconUrl: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/apacheairflow.svg' },
  { name: 'dbt',          iconUrl: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/dbt.svg' },
  { name: 'Databricks',   iconUrl: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/databricks.svg' },
  { name: 'Snowflake',    iconUrl: '/snowflake.svg' },
  { name: 'MLflow',       iconUrl: 'https://cdn.simpleicons.org/mlflow/0194E2' },
  { name: 'Kubernetes',   icon: 'kubernetes' },
  { name: 'Terraform',    icon: 'terraform' },
  { name: 'Vercel',       icon: 'vercel' },
  { name: 'Git',          icon: 'git' },
  { name: 'GitHub',       icon: 'github' },
  { name: 'Linux',        icon: 'linux' },
  { name: 'Jupyter',      iconUrl: 'https://cdn.simpleicons.org/jupyter/F37626' },
  { name: 'Bash',         icon: 'bash' },
];

export const projects = [
  {
    title: 'AI Tutor',
    status: 'Live',
    tagline: 'RAG-powered AI knowledge assistant',
    description:
      'A chatbot that answers questions about LLMs and AI using a knowledge base of 106 documents — research papers, HuggingFace docs, LangChain docs, and ML textbooks — chunked into 6,694 searchable segments with source citations.',
    stack: ['Python', 'LangChain', 'FAISS', 'OpenAI', 'Streamlit'],
    color: 'from-indigo-500 to-violet-600',
    live: 'https://ai-tutor-pmi4tgkvye828ocqhz7ybu.streamlit.app',
    github: 'https://github.com/vidhipitroda/AI-tutor',
  },
  {
    title: 'Medical Doc Q&A',
    status: 'Prototype',
    tagline: 'Visual Q&A over medical forms',
    description:
      'Automates information extraction from medical forms using OCR, YOLO layout detection, and a document Q&A model. Users upload a form image and ask natural-language questions — results returned visually via a Gradio interface.',
    stack: ['Python', 'YOLO', 'Tesseract', 'HuggingFace', 'Gradio'],
    color: 'from-sky-500 to-cyan-500',
    live: null,
    github: 'https://github.com/vidhipitroda/Medical-report-question-answering',
  },
];

export const timeline = [
  {
    period: 'Aug 2025 — Present',
    org: 'Aletha',
    location: 'Toronto, ON',
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
    location: 'Toronto, ON',
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
    location: 'Montreal, QC',
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
    location: 'St. John\'s, NL',
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
    location: 'Montreal, QC',
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
    location: 'Thunder Bay, ON',
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
