import {
  ProjectItem,
  SkillGroup,
  ExperienceRole,
  EducationInfo,
} from '../types/portfolio';

/**
 * ============================================================================
 * PERSONALIZED CONFIGURATION & PLACEHOLDERS FOR MANN PATEL
 * ============================================================================
 * Every placeholder in this file is clearly marked with `[PLACEHOLDER: ...]`
 * or `isPlaceholder*` flags so you can update your URLs, dates, and resume path
 * in one place without digging through UI components.
 */

export const PERSONAL_INFO = {
  name: 'Mann Patel',
  headline: 'Computer Science Graduate | Aspiring AI Engineer | Software Developer',
  tagline:
    'Building practical software solutions at the intersection of artificial intelligence, automation, and technology.',
  location: 'Canada',
  educationShort: 'Bachelor of Computer Science, Brock University',
  statusText: 'Open to Software Engineering & AI Engineering Opportunities',

  // ==========================================================================
  // CONTACT & SOCIAL PLACEHOLDERS — Update these with your real links
  // ==========================================================================
  email: 'mann.patel@example.com', // [PLACEHOLDER: Replace with your personal email]
  isEmailPlaceholder: true,

  githubUrl: 'https://github.com/YOUR_GITHUB_USERNAME', // [PLACEHOLDER: Replace with your GitHub profile URL]
  githubDisplay: 'github.com/[YOUR_USERNAME]',
  isGithubPlaceholder: true,

  linkedinUrl: 'https://linkedin.com/in/YOUR_LINKEDIN_HANDLE', // [PLACEHOLDER: Replace with your LinkedIn profile URL]
  linkedinDisplay: 'linkedin.com/in/[YOUR_HANDLE]',
  isLinkedinPlaceholder: true,

  resumeUrl: './Mann_Patel_Resume_Placeholder.pdf', // [PLACEHOLDER: Add your PDF to /public and update filename]
  isResumePlaceholder: true,
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
  lead: 'I am a Computer Science graduate from Brock University in Canada with a strong focus on building practical software systems across artificial intelligence, machine learning, and full-stack application development.',
  paragraphs: [
    'My approach to software engineering centers on solving real, tangible problems. Whether designing a financial transaction risk copilot with human-in-the-loop audit trails, training convolutional neural networks for image classification, or building full-stack applications for everyday expense tracking, I enjoy turning complex requirements into clean, working software.',
    'Currently, I am actively strengthening my core software engineering and programming fundamentals in Python, Java, and SQL while building hands-on projects involving LLM integration, intelligent automation, and modern application architecture.',
    'Alongside my technical background, my experience in retail leadership and operations at Best Buy Canada has shaped how I communicate with stakeholders, troubleshoot under pressure, collaborate across teams, and keep end users at the center of every technical decision.',
  ],
  quickFacts: [
    {
      label: 'Education',
      value: 'B.Sc. Computer Science — Brock University, Canada',
    },
    {
      label: 'Core Languages',
      value: 'Python, Java, SQL',
    },
    {
      label: 'Primary Focus',
      value: 'AI Engineering, Software Engineering & Practical Automation',
    },
    {
      label: 'Engineering Philosophy',
      value: 'Continuous learning, clean fundamentals, and practical problem-solving',
    },
  ],
};

/**
 * Technical Skills grouped into categories as requested.
 * Note: Framed authentically around practical project application and foundational growth
 * without implying inflated or fabricated "expert" percentages.
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
        context: 'Machine learning pipelines, LLM integration, automation scripts & Streamlit apps',
        focusTag: 'Primary Language',
      },
      {
        name: 'Java',
        context: 'Object-oriented programming, data structures, and software engineering fundamentals',
        focusTag: 'Core CS & OOP',
      },
      {
        name: 'SQL',
        context: 'Relational schema design, querying, audit logging, and data persistence',
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
        context: 'Anomaly detection (Isolation Forest), feature preprocessing & model evaluation with Scikit-learn',
        focusTag: 'Applied ML',
      },
      {
        name: 'Deep Learning',
        context: 'Neural network training, transfer learning, and evaluation workflows in TensorFlow',
        focusTag: 'Neural Nets',
      },
      {
        name: 'CNNs',
        context: 'Convolutional architectures & VGG16 transfer learning for large-scale image classification',
        focusTag: 'Computer Vision',
      },
      {
        name: 'Recommendation Systems',
        context: 'Collaborative filtering & content-based filtering pipelines for personalized discovery',
        focusTag: 'Personalization',
      },
      {
        name: 'LLM Integration',
        context: 'Local LLM inference with Ollama for contextual risk explanations & copilot interfaces',
        focusTag: 'GenAI / Ollama',
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
        context: 'Repository management, code collaboration, and project documentation',
        focusTag: 'Collaboration',
      },
      {
        name: 'Docker',
        context: 'Containerizing Python and ML applications for reproducible environments',
        focusTag: 'Containers',
      },
      {
        name: 'CI/CD',
        context: 'Automated build, testing, and deployment workflows for reliable delivery',
        focusTag: 'Automation',
      },
      {
        name: 'Streamlit',
        context: 'Interactive data and AI copilot interfaces for rapid analytical workflows',
        focusTag: 'Data UI',
      },
      {
        name: 'SQLite',
        context: 'Lightweight relational database storage for transaction records and audit trails',
        focusTag: 'Persistence',
      },
    ],
  },
];

/**
 * Featured Projects with complete deep-dive case study data.
 * Designed so Mann can easily edit descriptions, architecture nodes, and links as projects evolve.
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
    screenshotPlaceholders: [
      {
        title: 'Risk Dashboard & Anomaly Queue',
        caption: '[PLACEHOLDER: Add screenshot of Streamlit main transaction risk table and score distribution]',
        aspectNote: '16:9 Dashboard View',
      },
      {
        title: 'Ollama Copilot Panel & Audit Log',
        caption: '[PLACEHOLDER: Add screenshot of LLM risk explanation panel and human-in-the-loop approval log]',
        aspectNote: '16:9 Detail View',
      },
    ],
    githubUrl: 'https://github.com/YOUR_GITHUB_USERNAME/ai-risk-copilot',
    liveDemoUrl: 'https://your-demo-link-placeholder.example.com',
    isGithubPlaceholder: true,
    isLiveDemoPlaceholder: true,
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
      'Full-stack client-server architecture with responsive mobile UI, RESTful business logic for balance reconciliation, and relational persistence.',
    architectureFlow: [
      {
        stage: '01 / CLIENT UI',
        title: 'Mobile-First Web Interface',
        description: 'Responsive interface for logging bills, selecting roommates, and viewing household balance summaries.',
        tech: 'Responsive Frontend UI',
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
      'SQL / Relational DB',
      'Responsive Web UI',
      'Balance Calculation Engine',
      'Mobile-First Design',
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
    screenshotPlaceholders: [
      {
        title: 'Household Dashboard & Balance Summary',
        caption: '[PLACEHOLDER: Add screenshot of household overview and roommate net balance cards]',
        aspectNote: 'Desktop & Mobile View',
      },
      {
        title: 'Add Expense & Split Breakdown Modal',
        caption: '[PLACEHOLDER: Add screenshot of expense entry form and automatic split calculation]',
        aspectNote: 'Mobile Responsive View',
      },
    ],
    githubUrl: 'https://github.com/YOUR_GITHUB_USERNAME/household-expense-splitter',
    liveDemoUrl: 'https://your-demo-link-placeholder.example.com',
    isGithubPlaceholder: true,
    isLiveDemoPlaceholder: true,
    accentColor: 'blue',
  },
  {
    id: 'jarvis-voice-assistant',
    slug: 'jarvis-voice-assistant',
    title: 'Jarvis Voice Assistant',
    subtitle: 'Python Desktop Automation & Speech-Driven Personal Assistant',
    category: 'Automation',
    featuredBadge: 'Voice & Automation',
    shortDescription:
      'A Python-based personal voice assistant utilizing speech recognition and text-to-speech synthesis to execute hands-free voice commands and automate everyday desktop tasks.',
    overview:
      'Jarvis Voice Assistant is a desktop automation system written in Python that listens for natural voice commands, processes user intent, executes system-level or web actions, and responds audibly via text-to-speech. It was built to explore human-computer interaction, audio processing pipelines, and practical desktop task automation.',
    problemStatement:
      'Routine desktop tasks—such as launching applications, querying quick information, checking system status, or executing repetitive workflows—require constant context switching and manual navigation.',
    solution:
      'Engineered a modular Python voice assistant combining real-time speech-to-text recognition, command routing logic, OS/desktop automation hooks, and natural text-to-speech feedback.',
    architectureSummary:
      'Event-driven audio loop capturing microphone input, transcribing speech to text, matching command intents, triggering desktop automation routines, and synthesizing spoken responses.',
    architectureFlow: [
      {
        stage: '01 / AUDIO INPUT',
        title: 'Speech Recognition Listener',
        description: 'Captures microphone audio streams, handles ambient noise calibration, and converts spoken phrases to text.',
        tech: 'Python • SpeechRecognition',
      },
      {
        stage: '02 / INTENT PARSER',
        title: 'Command Router & Dispatcher',
        description: 'Maps recognized text commands to registered desktop automation handlers and query modules.',
        tech: 'Python Command Engine',
      },
      {
        stage: '03 / EXECUTION & TTS',
        title: 'Desktop Automation & Voice Output',
        description: 'Executes OS/application actions and delivers audible confirmation via Text-to-Speech synthesis.',
        tech: 'OS Automation • TTS Engine',
      },
    ],
    technologies: [
      'Python',
      'Speech Recognition',
      'Text-to-Speech (TTS)',
      'Voice Commands',
      'Desktop Automation',
    ],
    keyFeatures: [
      'Real-time voice command recognition with ambient background noise adjustment.',
      'Text-to-Speech (TTS) audio responses for conversational, hands-free feedback.',
      'Automated execution of everyday computer tasks (launching apps, system utilities, web lookups).',
      'Extensible command registry making it simple to add new voice triggers and automation scripts.',
    ],
    challengesAndImplementation: [
      {
        title: 'Reducing Latency & Handling Misrecognized Audio',
        detail:
          'Implemented dynamic energy threshold calibration and graceful fallback prompts so the assistant recovers cleanly when background noise or unclear audio occurs.',
      },
      {
        title: 'Modular Command Dispatch Architecture',
        detail:
          'Separated speech I/O from task execution handlers so new desktop automation skills can be added without modifying the core audio listening loop.',
      },
    ],
    metricsOrHighlights: [
      { label: 'Interface', value: 'Speech-to-Text + TTS' },
      { label: 'Core Language', value: 'Python' },
      { label: 'Domain', value: 'Desktop Automation' },
    ],
    screenshotPlaceholders: [
      {
        title: 'CLI / Assistant Command Execution Log',
        caption: '[PLACEHOLDER: Add screenshot of Jarvis terminal output showing recognized voice commands and task execution]',
        aspectNote: 'Terminal / Desktop View',
      },
    ],
    githubUrl: 'https://github.com/YOUR_GITHUB_USERNAME/jarvis-voice-assistant',
    liveDemoUrl: 'https://your-demo-link-placeholder.example.com',
    isGithubPlaceholder: true,
    isLiveDemoPlaceholder: true,
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
      'A containerized machine learning recommendation engine combining Collaborative Filtering and Content-Based Filtering in Python, packaged with Docker and automated CI/CD workflows.',
    overview:
      'This project implements a personalized product recommendation system designed for e-commerce catalogs. By combining user-item interaction patterns (Collaborative Filtering) with product metadata and attribute similarity (Content-Based Filtering), the system generates relevant product suggestions while using Docker and CI/CD pipelines for reproducible deployment.',
    problemStatement:
      'E-commerce platforms with large product catalogs suffer from discovery friction. Relying solely on popularity rankings misses individual user preferences, while uncontainerized ML scripts are difficult to test and deploy consistently.',
    solution:
      'Built a dual-strategy recommendation engine in Python supporting both collaborative and content-based filtering, containerized the service with Docker, and integrated CI/CD automation for repeatable builds and validation.',
    architectureSummary:
      'Hybrid recommendation pipeline computing user-item similarity matrices and product content vectors, packaged inside a Docker container with automated CI/CD verification.',
    architectureFlow: [
      {
        stage: '01 / DATA & FEATURES',
        title: 'Interaction & Catalog Preprocessing',
        description: 'Processes user ratings/interactions alongside product metadata and feature vectors.',
        tech: 'Python • Data Pipeline',
      },
      {
        stage: '02 / HYBRID ENGINE',
        title: 'Collaborative + Content Filtering',
        description: 'Computes user/item neighborhood similarity and content cosine similarity to rank top-N recommendations.',
        tech: 'Collaborative & Content-Based ML',
      },
      {
        stage: '03 / DELIVERY & OPS',
        title: 'Docker & CI/CD Pipeline',
        description: 'Packages dependencies into a reproducible Docker image with automated CI/CD build and test checks.',
        tech: 'Docker • CI/CD',
      },
    ],
    technologies: [
      'Python',
      'Collaborative Filtering',
      'Content-Based Filtering',
      'Docker',
      'CI/CD',
      'Machine Learning',
    ],
    keyFeatures: [
      'Collaborative Filtering module leveraging user-item interaction histories to uncover shared taste patterns.',
      'Content-Based Filtering module matching product attributes and descriptions to mitigate cold-start items.',
      'Docker containerization ensuring consistent Python runtime and ML dependency environments.',
      'CI/CD pipeline integration automating testing and container builds on code changes.',
    ],
    challengesAndImplementation: [
      {
        title: 'Addressing Cold-Start & Sparsity in User Matrices',
        detail:
          'Combined collaborative filtering with content-based similarity so products with limited interaction history can still be recommended based on catalog attributes.',
      },
      {
        title: 'Reproducible ML Packaging with Docker & CI/CD',
        detail:
          'Configured Dockerfiles and automated CI checks to eliminate environment drift between local model experimentation and containerized execution.',
      },
    ],
    metricsOrHighlights: [
      { label: 'Algorithms', value: 'Collaborative + Content' },
      { label: 'Infrastructure', value: 'Docker Containerized' },
      { label: 'Automation', value: 'CI/CD Integrated' },
    ],
    screenshotPlaceholders: [
      {
        title: 'Recommendation Output & Similarity Ranking',
        caption: '[PLACEHOLDER: Add screenshot of personalized product recommendations and similarity scores]',
        aspectNote: 'Application / Notebook View',
      },
      {
        title: 'Docker & CI/CD Pipeline Execution',
        caption: '[PLACEHOLDER: Add screenshot of successful CI/CD workflow run and Docker build]',
        aspectNote: 'Pipeline View',
      },
    ],
    githubUrl: 'https://github.com/YOUR_GITHUB_USERNAME/ecommerce-recommendation-system',
    liveDemoUrl: 'https://your-demo-link-placeholder.example.com',
    isGithubPlaceholder: true,
    isLiveDemoPlaceholder: true,
    accentColor: 'emerald',
  },
  {
    id: 'cats-vs-dogs-classification',
    slug: 'cats-vs-dogs-image-classification',
    title: 'Cats vs Dogs Image Classification',
    subtitle: 'Deep Learning Computer Vision with CNNs & VGG16 Transfer Learning (~97% Accuracy)',
    category: 'AI & ML',
    featuredBadge: '~97% Accuracy • 20k+ Images',
    shortDescription:
      'A deep learning computer vision project trained on 20,000+ images using TensorFlow, custom Convolutional Neural Networks (CNNs), and VGG16 transfer learning—achieving approximately 97% classification accuracy.',
    overview:
      'This computer vision project explores binary image classification at scale using a dataset of over 20,000 labeled images of cats and dogs. Developed in Python with TensorFlow, the project compares custom CNN architectures against transfer learning with VGG16, utilizing data augmentation and fine-tuning to achieve approximately 97% validation accuracy in the original project.',
    problemStatement:
      'Classifying real-world animal imagery involves significant intra-class variation in lighting, pose, background clutter, and occlusion, requiring robust convolutional feature extraction and regularization to prevent overfitting.',
    solution:
      'Implemented an end-to-end deep learning training pipeline in Python and TensorFlow across 20,000+ images, leveraging image preprocessing, real-time data augmentation, custom CNN layers, and VGG16 transfer learning to reach ~97% accuracy.',
    architectureSummary:
      'End-to-end TensorFlow computer vision pipeline featuring image normalization, augmentation, VGG16 convolutional feature extraction, and dense classification heads.',
    architectureFlow: [
      {
        stage: '01 / DATASET (20,000+)',
        title: 'Image Ingestion & Augmentation',
        description: 'Resizes, normalizes, and applies random flips, rotations, and zoom across 20,000+ training and validation images.',
        tech: 'Python • TensorFlow Data',
      },
      {
        stage: '02 / BACKBONE',
        title: 'CNN & VGG16 Feature Extraction',
        description: 'Extracts hierarchical spatial features using convolutional blocks and pre-trained VGG16 convolutional weights.',
        tech: 'CNN • VGG16 Transfer Learning',
      },
      {
        stage: '03 / CLASSIFIER',
        title: 'Dense Head & Evaluation (~97% Acc)',
        description: 'Regularized fully connected layers with sigmoid activation achieving ~97% classification accuracy.',
        tech: 'TensorFlow / Keras',
      },
    ],
    technologies: [
      'Python',
      'TensorFlow / Deep Learning',
      'CNN',
      'VGG16',
      'Image Classification',
    ],
    keyFeatures: [
      'Trained and evaluated on a large-scale dataset containing 20,000+ images.',
      'Achieved approximately 97% classification accuracy in the original project using VGG16 transfer learning.',
      'Implemented image preprocessing and data augmentation to improve model generalization.',
      'Compared baseline custom Convolutional Neural Network (CNN) performance against VGG16 feature extraction.',
    ],
    challengesAndImplementation: [
      {
        title: 'Mitigating Overfitting on High-Dimensional Image Data',
        detail:
          'Applied image augmentation techniques and dropout regularization while freezing base VGG16 convolutional layers before fine-tuning the classification head.',
      },
      {
        title: 'Efficient Batch Loading for 20,000+ Images',
        detail:
          'Structured batched image generators in TensorFlow to stream and transform images efficiently without exhausting system memory during multi-epoch training.',
      },
    ],
    metricsOrHighlights: [
      { label: 'Dataset Scale', value: '20,000+ Images' },
      { label: 'Model Accuracy', value: '~97% Accuracy' },
      { label: 'Architecture', value: 'CNN + VGG16' },
    ],
    screenshotPlaceholders: [
      {
        title: 'Training Accuracy & Loss Curves',
        caption: '[PLACEHOLDER: Add plot of TensorFlow training vs. validation accuracy (~97%) and loss curves]',
        aspectNote: 'Metrics Plot',
      },
      {
        title: 'Sample Predictions & Confusion Matrix',
        caption: '[PLACEHOLDER: Add grid of test image predictions with confidence scores]',
        aspectNote: 'Evaluation Grid',
      },
    ],
    githubUrl: 'https://github.com/YOUR_GITHUB_USERNAME/cats-vs-dogs-cnn-vgg16',
    liveDemoUrl: 'https://your-demo-link-placeholder.example.com',
    isGithubPlaceholder: true,
    isLiveDemoPlaceholder: true,
    accentColor: 'amber',
  },
];

/**
 * Professional Experience Timeline at Best Buy Canada.
 * Highlights leadership, communication, team development, problem-solving, and operational responsibility.
 * Dates are clearly marked as placeholders so no employment dates are fabricated.
 */
export const EXPERIENCE_TIMELINE: ExperienceRole[] = [
  {
    id: 'bby-sales-associate',
    role: 'Sales Associate',
    company: 'Best Buy Canada',
    location: 'Canada',
    periodPlaceholder: '[PLACEHOLDER: Insert Start Date – Present / End Date]',
    isPlaceholderDate: true,
    summary:
      'Deliver consultative technology solutions by translating complex hardware, software, and connectivity specifications into clear, practical recommendations tailored to customer needs.',
    transferableSkills: [
      'Customer Communication',
      'Technical Problem-Solving',
      'Needs Analysis',
      'Cross-Team Collaboration',
    ],
    highlights: [
      'Communicate complex technical concepts clearly to non-technical customers, directly paralleling stakeholder communication in software engineering.',
      'Diagnose customer requirements and troubleshoot device, software, and ecosystem compatibility questions in fast-paced environments.',
      'Collaborate with team members across departments to maintain smooth floor operations and high customer satisfaction.',
    ],
  },
  {
    id: 'bby-mobile-keyholder',
    role: 'Keyholder, Best Buy Mobile',
    company: 'Best Buy Canada',
    departmentOrNote: 'Best Buy Mobile',
    location: 'Canada',
    periodPlaceholder: '[PLACEHOLDER: Insert Start Date – End Date]',
    isPlaceholderDate: true,
    summary:
      'Entrusted with keyholder operational responsibility, store opening/closing procedures, escalations, and guiding mobile team workflows in a high-accountability environment.',
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
    id: 'bby-assistant-store-manager',
    role: 'Assistant Store Manager',
    company: 'Best Buy Canada',
    departmentOrNote: 'Previous Role',
    location: 'Canada',
    periodPlaceholder: '[PLACEHOLDER: Insert Start Date – End Date]',
    isPlaceholderDate: true,
    summary:
      'Provided store-level leadership, team coaching, and operational oversight—driving daily execution, staff development, and customer service excellence.',
    transferableSkills: [
      'Leadership',
      'Team Development',
      'Operational Management',
      'Strategic Problem-Solving',
    ],
    highlights: [
      'Led and developed team members through active coaching, onboarding support, and constructive performance feedback.',
      'Managed day-to-day store operations, resource allocation, and workflow prioritization to keep teams aligned and productive.',
      'Resolved high-priority operational and customer escalations with composure, accountability, and structured decision-making.',
    ],
  },
];

export const EDUCATION_DATA: EducationInfo = {
  institution: 'Brock University',
  degree: 'Bachelor of Computer Science',
  location: 'Ontario, Canada',
  graduationDatePlaceholder: '[PLACEHOLDER: Insert Graduation Year / Date]',
  isPlaceholderDate: true,
  summary:
    'Completed comprehensive undergraduate studies in Computer Science at Brock University, building a strong academic foundation in software engineering, algorithms, data structures, databases, and artificial intelligence.',
  focusAreas: [
    'Software Engineering & Object-Oriented Design',
    'Artificial Intelligence & Machine Learning Foundations',
    'Data Structures & Algorithmic Problem Solving',
    'Database Systems & Relational Modeling (SQL)',
  ],
  courseworkPlaceholders: [
    '[PLACEHOLDER: Add key Brock University CS course #1, e.g., Artificial Intelligence / Machine Learning]',
    '[PLACEHOLDER: Add key Brock University CS course #2, e.g., Data Structures & Algorithms]',
    '[PLACEHOLDER: Add key Brock University CS course #3, e.g., Software Engineering / Database Systems]',
    '[PLACEHOLDER: Add academic honors, GPA, or capstone note if desired]',
  ],
};
