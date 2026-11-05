import {
  ProjectItem,
  SkillGroup,
  ExperienceRole,
  EducationInfo,
} from '../types/portfolio';

/**
 * ============================================================================
 * PERSONALIZED CONFIGURATION FOR MANN PATEL
 * ============================================================================
 */

export const PERSONAL_INFO = {
  name: 'Mann Patel',
  headline: 'Computer Science Graduate | Aspiring AI Engineer | Software Developer',
  tagline:
    'Building practical software solutions at the intersection of artificial intelligence, automation, and technology.',
  location: 'St. Catharines, ON, Canada',
  educationShort:
    'B.Sc. (Honors) in Computer Science (Minors in Business & Management), Brock University',
  statusText: 'Open to Software Engineering & AI Engineering Opportunities',

  email: 'patelmann6@gmail.com',
  githubUrl: 'https://github.com/Mann473',
  githubDisplay: 'github.com/Mann473',
  linkedinUrl: 'https://www.linkedin.com/in/mann473/',
  linkedinDisplay: 'linkedin.com/in/mann473',
  resumeUrl: './Mann_Patel_Resume.pdf',
};

export const CAREER_INTERESTS = [
  {
    title: 'Artificial Intelligence Engineering',
    description:
      'Integrating local and cloud LLMs, anomaly detection pipelines, and intelligent workflows into reliable software applications.',
    codeTag: 'AI_ENG',
  },
  {
    title: 'Software Engineering',
    description:
      'Writing modular, maintainable, and well-structured code grounded in strong computer science fundamentals.',
    codeTag: 'SWE_CORE',
  },
  {
    title: 'Machine Learning',
    description:
      'Building supervised and unsupervised models—from deep learning image classifiers to collaborative filtering systems.',
    codeTag: 'ML_SYS',
  },
  {
    title: 'AI-Powered Automation',
    description:
      'Designing voice assistants, human-in-the-loop review tools, and automated desktop and data workflows that save time.',
    codeTag: 'AUTO_OPS',
  },
  {
    title: 'Full-Stack Development',
    description:
      'Developing end-to-end user-centric applications with clean interfaces, structured databases, and responsive design.',
    codeTag: 'FULL_STACK',
  },
];

export const ABOUT_CONTENT = {
  lead: 'I am a Computer Science graduate (B.Sc. Honors with Minors in Business and Management) from Brock University in St. Catharines, Ontario, focused on building practical software systems across artificial intelligence, machine learning, and full-stack application development.',
  paragraphs: [
    'My approach to software engineering centers on solving real, tangible problems. Whether designing a financial transaction risk copilot with human-in-the-loop audit trails, training convolutional neural networks for image classification, or building full-stack applications for everyday expense tracking and workflow automation, I enjoy turning complex requirements into clean, working software.',
    'Currently, I am actively strengthening my core software engineering and programming fundamentals in Python, Java, and SQL while building hands-on projects involving LLM integration, intelligent automation, and modern application architecture.',
    'Alongside my technical background, my leadership experience at Best Buy Canada has shaped how I communicate with stakeholders, troubleshoot under pressure, develop teams, and keep end users at the center of every technical decision.',
  ],
  quickFacts: [
    {
      label: 'Education',
      value: 'B.Sc. (Honors) Computer Science — Brock University',
    },
    {
      label: 'Minors',
      value: 'Business and Management',
    },
    {
      label: 'Core Languages',
      value: 'Python, Java, SQL, TypeScript / JavaScript',
    },
    {
      label: 'Engineering Philosophy',
      value: 'Continuous learning, clean fundamentals, and practical problem-solving',
    },
  ],
};

/**
 * Technical Skills grouped into categories.
 */
export const SKILL_GROUPS: SkillGroup[] = [
  {
    id: 'programming',
    category: 'Programming',
    subtitle: 'Core languages used for algorithms, backend logic, data querying, and application development.',
    iconName: 'Terminal',
    accent: 'from-cyan-400 to-blue-500',
    skills: [
      {
        name: 'Python',
        context: 'Machine learning pipelines, TensorFlow/Keras, scikit-learn, pandas, NumPy, OpenCV & automation',
        focusTag: 'Primary Language',
      },
      {
        name: 'Java',
        context: 'Object-oriented programming, advanced data structures, algorithms & software engineering',
        focusTag: 'Core CS & OOP',
      },
      {
        name: 'SQL',
        context: 'Relational schema design, DBMS querying, audit logging, and persistent data storage',
        focusTag: 'Data & Queries',
      },
    ],
  },
  {
    id: 'ai-ml',
    category: 'AI & Machine Learning',
    subtitle: 'Applied machine learning paradigms, deep learning architectures, and local LLM workflows.',
    iconName: 'BrainCircuit',
    accent: 'from-blue-500 to-violet-500',
    skills: [
      {
        name: 'Machine Learning',
        context: 'Anomaly detection (Isolation Forest), feature preprocessing & predictive modeling with scikit-learn',
        focusTag: 'Applied ML',
      },
      {
        name: 'Deep Learning',
        context: 'Neural network training, Dropout, Batch Normalization & hyperparameter tuning in TensorFlow/Keras',
        focusTag: 'Neural Nets',
      },
      {
        name: 'CNNs',
        context: 'Custom Convolutional Neural Networks & transfer learning (VGG16, ResNet) on 20,000+ images',
        focusTag: 'Computer Vision',
      },
      {
        name: 'Recommendation Systems',
        context: 'Collaborative filtering & content-based filtering pipelines for personalized e-commerce discovery',
        focusTag: 'Personalization',
      },
      {
        name: 'LLM Integration',
        context: 'Local LLM inference with Ollama & NLP workflows for contextual risk explanations and automation',
        focusTag: 'GenAI / NLP',
      },
    ],
  },
  {
    id: 'dev-tools',
    category: 'Development & Tools',
    subtitle: 'Modern development workflow, containerization, interactive dashboards, and embedded storage.',
    iconName: 'Wrench',
    accent: 'from-violet-500 to-cyan-400',
    skills: [
      {
        name: 'Git',
        context: 'Version control, branching strategies, and structured commit histories',
        focusTag: 'Version Control',
      },
      {
        name: 'GitHub',
        context: 'Repository management, GitHub Actions workflows, and code collaboration',
        focusTag: 'Collaboration',
      },
      {
        name: 'Docker',
        context: 'Containerizing Python and ML applications for reproducible environments',
        focusTag: 'Containers',
      },
      {
        name: 'CI/CD',
        context: 'Automated data ingestion, build, testing, and deployment pipelines',
        focusTag: 'Automation',
      },
      {
        name: 'Streamlit',
        context: 'Interactive data and AI copilot interfaces for analytical and human-in-the-loop workflows',
        focusTag: 'Data UI',
      },
      {
        name: 'SQLite',
        context: 'Lightweight relational database storage for transaction records and immutable audit trails',
        focusTag: 'Persistence',
      },
    ],
  },
];

/**
 * Featured Projects with complete deep-dive case study data.
 */
export const FEATURED_PROJECTS: ProjectItem[] = [
  {
    id: 'ai-risk-copilot',
    slug: 'ai-risk-copilot',
    title: 'AI Risk Copilot',
    subtitle: 'Financial Transaction Anomaly Detection & Human-in-the-Loop Risk Assessment',
    category: 'AI & ML',
    featuredBadge: 'Flagship AI System',
    shortDescription:
      'An intelligent financial risk assessment platform combining unsupervised Isolation Forest anomaly detection with local Ollama LLM reasoning, human-in-the-loop review queues, and SQLite audit logging.',
    overview:
      'AI Risk Copilot is an end-to-end decision-support application designed to detect anomalous financial transactions and help human analysts review flagged activity efficiently. By combining statistical anomaly detection (Scikit-learn Isolation Forest) with natural-language explanations generated via Ollama (local LLM) and a persistent SQLite audit trail, the system bridges raw ML anomaly scores with interpretable analyst workflows.',
    problemStatement:
      'Traditional rule-based transaction monitoring systems generate high false-positive rates, while black-box machine learning models often output raw anomaly scores without context. Financial reviewers need both reliable statistical detection and clear, auditable explanations while retaining final human decision authority.',
    solution:
      'Built an interactive Streamlit application backed by Python and SQLite that scores incoming transactions using an Isolation Forest model, generates structured risk summaries through a locally hosted LLM via Ollama, and routes flagged records into a Human-in-the-Loop (HITL) review workflow where every analyst decision is permanently logged.',
    architectureSummary:
      'Modular 4-stage pipeline separating statistical anomaly scoring, local LLM interpretation, interactive analyst review, and immutable SQLite audit persistence.',
    architectureFlow: [
      {
        stage: '01 / INGEST & FEATURES',
        title: 'Transaction Data Pipeline',
        description: 'Loads and preprocesses financial transaction attributes (amount, velocity, merchant context, timestamps).',
        tech: 'Python • Pandas',
      },
      {
        stage: '02 / ML SCORING',
        title: 'Isolation Forest Engine',
        description: 'Computes unsupervised anomaly scores and flags statistical outliers across multi-dimensional transaction features.',
        tech: 'Scikit-learn • Isolation Forest',
      },
      {
        stage: '03 / AI REASONING',
        title: 'Ollama LLM Risk Synthesizer',
        description: 'Translates feature deviations and anomaly scores into structured, human-readable risk explanations.',
        tech: 'Ollama • Local LLM',
      },
      {
        stage: '04 / HITL & AUDIT',
        title: 'Analyst Review & SQLite Ledger',
        description: 'Streamlit dashboard for approving/escalating flagged items with timestamped SQLite audit logging.',
        tech: 'Streamlit • SQLite',
      },
    ],
    technologies: [
      'Python',
      'Streamlit',
      'Scikit-learn',
      'Isolation Forest',
      'Ollama / LLM',
      'SQLite',
    ],
    keyFeatures: [
      'Unsupervised financial transaction anomaly detection using Scikit-learn Isolation Forest.',
      'Local LLM integration via Ollama to generate contextual, human-readable risk assessments.',
      'Human-in-the-loop (HITL) review workflow allowing analysts to approve, flag, or escalate transactions.',
      'Comprehensive SQLite audit logging capturing model predictions, reviewer notes, and timestamps.',
      'Interactive Streamlit dashboard for filtering high-risk transactions and inspecting anomaly drivers.',
    ],
    challengesAndImplementation: [
      {
        title: 'Bridging Statistical Scores with Analyst Interpretability',
        detail:
          'Isolation Forest outputs numerical anomaly scores that don’t immediately explain why a transaction was flagged. Prompt templates were structured around specific transaction feature deviations so the Ollama LLM produces grounded, concise risk summaries rather than generic explanations.',
      },
      {
        title: 'Designing Accountable Human-in-the-Loop State Transitions',
        detail:
          'Implemented a structured SQLite schema to ensure every flagged transaction transitions cleanly from Pending Review to Approved or Escalated, preserving an immutable audit history for compliance and retrospective evaluation.',
      },
    ],
    metricsOrHighlights: [
      { label: 'Core ML Model', value: 'Isolation Forest' },
      { label: 'LLM Runtime', value: 'Ollama (Local)' },
      { label: 'Governance', value: 'HITL + SQLite Audit' },
    ],
    githubUrl: 'https://github.com/Mann473',
    accentColor: 'cyan',
  },
  {
    id: 'household-expense-splitter',
    slug: 'household-expense-splitting-application',
    title: 'Household Expense Splitting Application',
    subtitle: 'Full-Stack Shared Household & Roommate Expense Management System',
    category: 'Full-Stack',
    featuredBadge: 'Full-Stack App',
    shortDescription:
      'A modern, mobile-friendly full-stack web application designed for roommates and households to log shared expenses, split bills flexibly, and automatically calculate net balances.',
    overview:
      'Managing recurring bills, groceries, and shared purchases in a multi-person household often leads to confusing spreadsheets and awkward manual calculations. This full-stack application streamlines roommate expense management with intuitive expense logging, automated split calculations, and real-time balance tracking across desktop and mobile devices.',
    problemStatement:
      'Roommates and shared households struggle to keep track of who paid for what, how shared utilities or groceries should be divided, and what the simplest settlement path is at the end of the month.',
    solution:
      'Developed a full-stack expense tracking application featuring shared household ledgers, automatic per-member balance calculations, settlement tracking, and a responsive, mobile-first interface built for quick everyday entry.',
    architectureSummary:
      'Full-stack client-server architecture with responsive mobile UI, deterministic business logic for balance reconciliation, and relational persistence.',
    architectureFlow: [
      {
        stage: '01 / CLIENT UI',
        title: 'Mobile-First Web Interface',
        description: 'Responsive interface for logging bills, selecting roommates, and viewing household balance summaries.',
        tech: 'React / TypeScript UI',
      },
      {
        stage: '02 / SPLIT ENGINE',
        title: 'Automatic Balance Calculator',
        description: 'Computes individual shares, net creditor/debtor positions, and updated household totals on every entry.',
        tech: 'Application Logic',
      },
      {
        stage: '03 / DATA LAYER',
        title: 'Household & Expense Ledger',
        description: 'Stores member profiles, categorized expense records, split ratios, and settlement history.',
        tech: 'Relational Database / SQL',
      },
    ],
    technologies: [
      'Full-Stack Architecture',
      'React / TypeScript',
      'SQL / Relational DB',
      'Balance Calculation Engine',
      'Mobile-First UI',
    ],
    keyFeatures: [
      'Shared household expense logging with categories, dates, and payer attribution.',
      'Automatic balance calculations showing exactly who owes whom at any moment.',
      'Roommate expense management supporting multi-member households and recurring shared costs.',
      'Modern, mobile-friendly interface optimized for logging expenses on the go.',
      'Clear transaction history and settlement tracking to keep household finances transparent.',
    ],
    challengesAndImplementation: [
      {
        title: 'Accurate Floating-Point Currency & Split Reconciliation',
        detail:
          'Splitting uneven totals across multiple roommates can introduce rounding discrepancies. Designed deterministic rounding and remainder allocation logic so split shares always sum exactly to the original receipt total.',
      },
      {
        title: 'Mobile-Friendly UX for Everyday Utility',
        detail:
          'Structured the interface around fast expense entry and immediate visual feedback on net balances so roommates can log purchases in seconds from their phones.',
      },
    ],
    metricsOrHighlights: [
      { label: 'Architecture', value: 'Full-Stack Web' },
      { label: 'Core Engine', value: 'Auto-Balance Split' },
      { label: 'UX Focus', value: 'Mobile-Friendly UI' },
    ],
    githubUrl: 'https://github.com/Mann473',
    accentColor: 'blue',
  },
  {
    id: 'jarvis-voice-assistant',
    slug: 'jarvis-voice-assistant',
    title: 'Jarvis Voice Assistant',
    subtitle: 'Voice-Activated Personal Assistant for Desktop & Mobile Task Automation',
    category: 'Automation',
    featuredBadge: 'Voice & Automation',
    shortDescription:
      'A personal voice and workflow assistant using Python, SpeechRecognition, NLP, and Text-to-Speech synthesis to execute hands-free commands and automate routine computer and device tasks.',
    overview:
      'Jarvis Voice Assistant is an automation system built with Python and speech recognition libraries to automate routine tasks, interpret commands via Natural Language Processing (NLP), read PDFs aloud, retrieve weather updates, capture photos, manage system processes, and execute guarded multi-step workflows.',
    problemStatement:
      'Routine computer and device tasks—such as launching applications, reading documents, managing files/processes, or executing repetitive multi-step workflows—require constant context switching and manual navigation.',
    solution:
      'Engineered a modular voice-activated assistant combining real-time speech-to-text recognition, NLP command parsing, OS/system process automation hooks, and audible Text-to-Speech feedback.',
    architectureSummary:
      'Event-driven audio and command pipeline capturing voice input, parsing intent with NLP, triggering system/app automation routines with safety checks, and synthesizing spoken responses.',
    architectureFlow: [
      {
        stage: '01 / AUDIO INPUT',
        title: 'Speech Recognition Listener',
        description: 'Captures microphone audio streams, handles ambient noise calibration, and converts spoken phrases to text.',
        tech: 'Python • SpeechRecognition',
      },
      {
        stage: '02 / NLP INTENT',
        title: 'NLP Command Parser & Router',
        description: 'Interprets natural language commands and maps them to system utilities, PDF readers, weather lookups, or app workflows.',
        tech: 'Python • NLP',
      },
      {
        stage: '03 / EXECUTION & TTS',
        title: 'System Automation & Voice Output',
        description: 'Executes file management, process control, and application handling with audible Text-to-Speech confirmation.',
        tech: 'System Automation • TTS',
      },
    ],
    technologies: [
      'Python',
      'Speech Recognition',
      'Natural Language Processing (NLP)',
      'Text-to-Speech (TTS)',
      'Voice Commands',
      'Desktop Automation',
    ],
    keyFeatures: [
      'Real-time voice command recognition and Natural Language Processing (NLP) intent parsing.',
      'Text-to-Speech (TTS) audio synthesis capable of reading PDFs aloud and delivering conversational status updates.',
      'System process automation for hands-free file management, process control, weather retrieval, photo capture, and app launching.',
      'Guarded workflow execution with explicit state verification and emergency stop controls.',
    ],
    challengesAndImplementation: [
      {
        title: 'Reliable Command Interpretation & Noise Calibration',
        detail:
          'Implemented dynamic energy threshold calibration and structured NLP keyword/intent matching so spoken commands route accurately even with ambient background noise.',
      },
      {
        title: 'Safe System & Workflow Execution',
        detail:
          'Separated speech I/O from system process handlers and added explicit state validation checks to prevent unintended actions when automating external applications.',
      },
    ],
    metricsOrHighlights: [
      { label: 'Interface', value: 'Speech + NLP + TTS' },
      { label: 'Core Language', value: 'Python' },
      { label: 'Domain', value: 'System Automation' },
    ],
    githubUrl: 'https://github.com/Mann473',
    accentColor: 'violet',
  },
  {
    id: 'ecommerce-recommendation-system',
    slug: 'ecommerce-recommendation-system',
    title: 'E-commerce Recommendation System',
    subtitle: 'Personalized Product Discovery with Collaborative & Content-Based Filtering',
    category: 'AI & ML',
    featuredBadge: 'ML + MLOps Pipeline',
    shortDescription:
      'An e-commerce recommendation engine built in Python using Collaborative Filtering and Content-Based Filtering, featuring automated data ingestion and deployment via Docker and CI/CD pipelines.',
    overview:
      'Developed an e-commerce platform with a personalized recommendation engine using Python and machine learning algorithms (collaborative filtering and content-based filtering) to enhance user engagement. Automated data ingestion and model deployment processes with CI/CD pipelines and Docker to improve scalability and reliability.',
    problemStatement:
      'E-commerce platforms with large product catalogs suffer from discovery friction. Relying solely on static rankings misses individual user behavior, while manual data ingestion and uncontainerized ML scripts limit scalability and deployment reliability.',
    solution:
      'Designed a predictive recommendation model in Python that suggests products based on user behavior using both collaborative and content-based filtering, and automated data ingestion and deployment with Docker and CI/CD pipelines.',
    architectureSummary:
      'Hybrid recommendation pipeline computing user-behavior similarity and product content vectors, packaged inside Docker containers with automated CI/CD ingestion and deployment.',
    architectureFlow: [
      {
        stage: '01 / DATA INGESTION',
        title: 'Automated Ingestion Pipeline',
        description: 'Ingests and preprocesses user interaction behavior alongside product catalog attributes.',
        tech: 'Python • Pandas • NumPy',
      },
      {
        stage: '02 / HYBRID ENGINE',
        title: 'Collaborative + Content Filtering',
        description: 'Computes user-behavior similarity and content similarity to generate personalized top-N product suggestions.',
        tech: 'Scikit-learn • ML Algorithms',
      },
      {
        stage: '03 / DELIVERY & OPS',
        title: 'Docker & CI/CD Deployment',
        description: 'Packages the predictive model into reproducible Docker containers with automated CI/CD build and deployment workflows.',
        tech: 'Docker • CI/CD Pipelines',
      },
    ],
    technologies: [
      'Python',
      'Collaborative Filtering',
      'Content-Based Filtering',
      'Docker',
      'CI/CD',
      'Scikit-learn',
    ],
    keyFeatures: [
      'Collaborative Filtering module leveraging user behavior and interaction histories to uncover shared preference patterns.',
      'Content-Based Filtering module matching product attributes to mitigate cold-start items.',
      'Automated data ingestion and model deployment workflows orchestrated through CI/CD pipelines.',
      'Docker containerization ensuring scalable, reproducible runtime environments.',
    ],
    challengesAndImplementation: [
      {
        title: 'Combining Collaborative & Content-Based Signals',
        detail:
          'Blended user-behavior collaborative filtering with content-based attribute matching so both returning users and newly added catalog items receive relevant recommendations.',
      },
      {
        title: 'Automating Ingestion & Deployment with Docker & CI/CD',
        detail:
          'Containerized the Python ML environment with Docker and automated ingestion/deployment checks via CI/CD pipelines to eliminate environment drift.',
      },
    ],
    metricsOrHighlights: [
      { label: 'Algorithms', value: 'Collaborative + Content' },
      { label: 'Infrastructure', value: 'Docker Containerized' },
      { label: 'Automation', value: 'CI/CD Pipelines' },
    ],
    githubUrl: 'https://github.com/Mann473',
    accentColor: 'emerald',
  },
  {
    id: 'cats-vs-dogs-classification',
    slug: 'cats-vs-dogs-image-classification',
    title: 'Cats vs Dogs Image Classification',
    subtitle: 'Deep Learning Computer Vision with CNNs, VGG16 & ResNet (97% Accuracy)',
    category: 'AI & ML',
    featuredBadge: '97% Accuracy • 20k+ Images',
    shortDescription:
      'A deep learning computer vision model trained on the Microsoft Cats vs. Dogs Dataset (20,000+ images) using custom CNNs and transfer learning (VGG16, ResNet)—achieving 97% classification accuracy.',
    overview:
      'Built an image classification model in Python (TensorFlow/Keras) to distinguish between images of cats and dogs using Convolutional Neural Networks (CNNs). Preprocessed and augmented the Microsoft Cats vs. Dogs Dataset (20,000+ images) and experimented with custom CNN architectures alongside transfer learning models (VGG16, ResNet), optimizing with Dropout, Batch Normalization, and Hyperparameter Tuning to achieve 97% accuracy.',
    problemStatement:
      'Classifying real-world animal imagery across 20,000+ samples involves significant variation in lighting, pose, scale, and background clutter, requiring robust spatial feature extraction and regularization to prevent overfitting.',
    solution:
      'Implemented a comprehensive preprocessing and augmentation pipeline (resizing, normalization, rotation, flipping, zooming) and trained custom CNNs and transfer learning backbones (VGG16, ResNet) optimized with Dropout, Batch Normalization, and hyperparameter tuning to reach 97% accuracy.',
    architectureSummary:
      'End-to-end TensorFlow/Keras computer vision pipeline featuring Microsoft 20k+ dataset augmentation, VGG16/ResNet transfer learning backbones, and regularized dense classification heads.',
    architectureFlow: [
      {
        stage: '01 / DATASET (20,000+)',
        title: 'Preprocessing & Augmentation',
        description: 'Resizes, normalizes, and applies rotation, flipping, and zooming across 20,000+ images from the Microsoft Cats vs. Dogs Dataset.',
        tech: 'Python • OpenCV • TensorFlow',
      },
      {
        stage: '02 / BACKBONE',
        title: 'Custom CNN, VGG16 & ResNet',
        description: 'Extracts hierarchical spatial features comparing custom CNN layers against VGG16 and ResNet transfer learning models.',
        tech: 'CNN • VGG16 • ResNet',
      },
      {
        stage: '03 / OPTIMIZATION',
        title: 'Regularization & Tuning (97% Acc)',
        description: 'Applies Dropout, Batch Normalization, and hyperparameter tuning to prevent overfitting and achieve 97% accuracy.',
        tech: 'Keras • Batch Norm • Dropout',
      },
    ],
    technologies: [
      'Python',
      'TensorFlow / Keras',
      'CNN',
      'VGG16 & ResNet',
      'OpenCV',
      'Image Classification',
    ],
    keyFeatures: [
      'Preprocessed and augmented the Microsoft Cats vs. Dogs Dataset (20,000+ images) using resizing, normalization, rotation, flipping, and zooming.',
      'Experimented with custom CNN architectures and transfer learning models (VGG16, ResNet) to achieve 97% classification accuracy.',
      'Optimized model generalization using Dropout, Batch Normalization, and systematic Hyperparameter Tuning.',
    ],
    challengesAndImplementation: [
      {
        title: 'Preventing Overfitting on 20,000+ High-Variance Images',
        detail:
          'Combined geometric data augmentation (rotation, flipping, zooming) with Dropout and Batch Normalization layers to stabilize training gradients and maximize validation accuracy.',
      },
      {
        title: 'Benchmarking Custom CNNs vs. Transfer Learning (VGG16 / ResNet)',
        detail:
          'Evaluated custom convolutional blocks against pre-trained VGG16 and ResNet feature extractors, fine-tuning hyperparameters to reach 97% accuracy.',
      },
    ],
    metricsOrHighlights: [
      { label: 'Dataset Scale', value: '20,000+ Images' },
      { label: 'Model Accuracy', value: '97% Accuracy' },
      { label: 'Architectures', value: 'CNN • VGG16 • ResNet' },
    ],
    githubUrl: 'https://github.com/Mann473',
    accentColor: 'amber',
  },
];

/**
 * Professional Experience Timeline at Best Buy Canada.
 */
export const EXPERIENCE_TIMELINE: ExperienceRole[] = [
  {
    id: 'bby-assistant-store-manager',
    role: 'Assistant Store Manager',
    company: 'Best Buy Canada',
    departmentOrNote: 'Mobile Department Leadership',
    location: 'St. Catharines, ON',
    period: 'November 2025 – Present',
    summary:
      'Oversee daily operations for the mobile department, including opening and closing procedures, cash handling, securing high-value inventory, and collaborating with the sales team to meet daily targets.',
    transferableSkills: [
      'Leadership',
      'Operational Responsibility',
      'Team Development',
      'Problem-Solving',
      'Customer Communication',
    ],
    highlights: [
      'Oversee daily operations for the mobile department, including opening and closing procedures, cash handling, and securing high-value mobile inventory.',
      'Collaborate with and coach the sales team to meet daily operational and sales targets while maintaining high service standards.',
      'Provide technical product expertise on smartphones, tablets, and connectivity ecosystems to resolve complex customer inquiries.',
    ],
  },
  {
    id: 'bby-mobile-keyholder',
    role: 'Keyholder, Best Buy Mobile',
    company: 'Best Buy Canada',
    departmentOrNote: 'Best Buy Mobile',
    location: 'St. Catharines, ON',
    period: 'Best Buy Mobile Operations',
    summary:
      'Entrusted with keyholder operational responsibility, store opening/closing governance, customer escalations, and guiding mobile department workflows in a high-accountability environment.',
    transferableSkills: [
      'Operational Responsibility',
      'Leadership',
      'Escalation Resolution',
      'Process Compliance',
    ],
    highlights: [
      'Held operational keyholder responsibility for secure store opening and closing routines, inventory verification, and daily operational readiness.',
      'Served as a point of escalation for complex customer issues, applying structured problem-solving to resolve carrier, activation, and system challenges.',
      'Supported shift coordination and mentored peers on mobile systems, compliance workflows, and service standards.',
    ],
  },
  {
    id: 'bby-sales-associate',
    role: 'Sales Associate',
    company: 'Best Buy Canada',
    location: 'St. Catharines, ON',
    period: 'Client & Technical Advisory',
    summary:
      'Delivered consultative technology solutions by translating complex hardware, software, and mobile specifications into clear, practical recommendations tailored to customer needs.',
    transferableSkills: [
      'Customer Communication',
      'Technical Problem-Solving',
      'Needs Analysis',
      'Cross-Team Collaboration',
    ],
    highlights: [
      'Communicated complex technical concepts clearly to non-technical customers, directly paralleling stakeholder communication in software engineering.',
      'Diagnosed customer requirements and troubleshot device, software, and ecosystem compatibility questions in fast-paced environments.',
      'Collaborated with team members across departments to maintain smooth floor operations and high customer satisfaction.',
    ],
  },
];

export const EDUCATION_DATA: EducationInfo = {
  institution: 'Brock University',
  degree: 'Bachelor of Computer Science (B.Sc. Honors)',
  minors: 'Minors in Business and Management',
  location: 'St. Catharines, ON, Canada',
  graduationDate: 'June 2025 (Jan 2022 – April 2025)',
  summary:
    'Completed an Honors Bachelor of Science in Computer Science with Minors in Business and Management at Brock University, building a strong foundation in software engineering, algorithms, advanced data structures, database management systems, and machine learning.',
  focusAreas: [
    'Software Engineering & Object-Oriented Programming',
    'Machine Learning & Artificial Intelligence',
    'Algorithms & Advanced Data Structures',
    'Database Management Systems (DBMS) & Network Security',
  ],
  relevantCoursework: [
    'Algorithms & Advanced Data Structures',
    'Machine Learning',
    'Software Engineering & Object-Oriented Programming',
    'DBMS (Database Management Systems)',
    'Computer Systems & Network Security',
    'Internet Technologies',
  ],
};
