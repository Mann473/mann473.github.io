# Mann Patel — Software Engineer & AI Engineer Portfolio

A modern, futuristic, production-grade developer portfolio built for **Mann Patel** (Bachelor of Computer Science, Brock University, Canada).

Designed to showcase practical engineering projects across **Artificial Intelligence**, **Machine Learning**, **Automation**, and **Full-Stack Software Development**.

---

## 1. Technology Stack

- **Framework:** React 18 + TypeScript
- **Build Tool:** Vite 6 (configured with `base: './'` for seamless GitHub Pages & Vercel support)
- **Styling:** Tailwind CSS 3 (`Space Grotesk`, `Inter`, and `JetBrains Mono` typography)
- **Animations:** Framer Motion + custom 60fps HTML5 Canvas Neural Constellation background
- **Icons:** Lucide React

---

## 2. Project Folder Structure

```text
mann-patel-portfolio/
├── .github/
│   └── workflows/
│       └── deploy.yml                # Automated GitHub Pages (github.io) deployment workflow
├── public/
│   └── favicon.svg                   # Custom MP futuristic monogram icon
├── src/
│   ├── components/
│   │   ├── NeuralCanvasBackground.tsx # Interactive HTML5 canvas neural node network & cyber grid
│   │   ├── Navbar.tsx                 # Responsive glassmorphic header & active section tracking
│   │   ├── HeroSection.tsx            # Hero introduction + interactive AI Systems Telemetry Console
│   │   ├── AboutSection.tsx           # Brock University CS background & 5 career focus vectors
│   │   ├── SkillsSection.tsx          # Filterable technical skills matrix (Programming, AI/ML, Tools)
│   │   ├── ProjectsSection.tsx        # Featured project cards with architecture flow previews
│   │   ├── ProjectDetailModal.tsx     # Full case-study modal (Problem, Solution, Architecture, etc.)
│   │   ├── ExperienceSection.tsx      # Best Buy Canada leadership & transferable skills timeline
│   │   ├── EducationSection.tsx       # Brock University Bachelor of Computer Science section
│   │   ├── ContactSection.tsx         # Direct contact channels, one-click email copy & mail composer
│   │   ├── ResumeModal.tsx            # Interactive resume summary & PDF download modal
│   │   └── Footer.tsx                 # Footer with quick links & scroll-to-top
│   ├── data/
│   │   └── portfolioData.ts           # SINGLE SOURCE OF TRUTH for all projects, skills & placeholders
│   ├── types/
│   │   └── portfolio.ts               # TypeScript interfaces for projects, skills, experience, education
│   ├── App.tsx                        # Main application layout & modal state controller
│   ├── main.tsx                       # React DOM entry point
│   └── index.css                      # Tailwind directives & custom cyber-grid utilities
├── index.html                         # SEO metadata & Google Fonts (Space Grotesk, Inter, JetBrains Mono)
├── vercel.json                        # Ready-to-use Vercel SPA routing configuration
├── vite.config.ts                     # Vite configuration with relative base path
└── package.json                       # Scripts and dependencies
```

---

## 3. How to Run Locally

Make sure you have **Node.js (v18+)** (or **Bun**) installed.

```bash
# 1. Navigate into the project directory
cd /Users/mann/.gemini/antigravity/scratch/mann-patel-portfolio

# 2. Install dependencies
npm install

# 3. Start the local development server
npm run dev
```

Then open the local URL shown in your terminal (typically `http://localhost:5173`).

To create and verify a production build locally:

```bash
npm run build
npm run preview
```

---

## 4. How to Personalize & Replace Placeholders

All personal data, links, projects, and placeholders are centralized inside **`src/data/portfolioData.ts`** so you never have to hunt through UI components.

Open `src/data/portfolioData.ts` and update:

1. **`PERSONAL_INFO`**:
   - `email`: Replace `'mann.patel@example.com'` with your real email address and set `isEmailPlaceholder: false`.
   - `githubUrl` & `githubDisplay`: Replace with your GitHub profile URL and set `isGithubPlaceholder: false`.
   - `linkedinUrl` & `linkedinDisplay`: Replace with your LinkedIn URL and set `isLinkedinPlaceholder: false`.
   - `resumeUrl`: Place your actual PDF resume inside the `public/` folder (e.g., `public/Mann_Patel_Resume.pdf`), update `resumeUrl: './Mann_Patel_Resume.pdf'`, and set `isResumePlaceholder: false`.
2. **`FEATURED_PROJECTS`**:
   - Update `githubUrl` and `liveDemoUrl` for each of the 5 projects (`AI Risk Copilot`, `Household Expense Splitting Application`, `Jarvis Voice Assistant`, `E-commerce Recommendation System`, `Cats vs Dogs Image Classification`).
   - Set `isGithubPlaceholder: false` and `isLiveDemoPlaceholder: false` as you publish each repo/demo.
   - Add project screenshots to `public/screenshots/` and update `screenshotPlaceholders`.
3. **`EXPERIENCE_TIMELINE`**:
   - Replace `periodPlaceholder` in your Best Buy Canada roles (`Sales Associate`, `Keyholder, Best Buy Mobile`, `Assistant Store Manager`) with your exact employment dates.
4. **`EDUCATION_DATA`**:
   - Replace `graduationDatePlaceholder` and `courseworkPlaceholders` with your Brock University graduation date and favorite CS courses.

---

## 5. Publishing to GitHub Pages (`github.io`)

This project is pre-configured with **`.github/workflows/deploy.yml`** and `base: './'` in `vite.config.ts`, meaning it works automatically whether you name your repository:
- `<your-username>.github.io` (User site at `https://<your-username>.github.io/`)
- Or `portfolio` (Project site at `https://<your-username>.github.io/portfolio/`)

### Step-by-Step GitHub Pages Deployment:
1. Create a new repository on GitHub (for example, `<your-username>.github.io` or `portfolio`).
2. Push this project to GitHub:
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Mann Patel Portfolio"
   git branch -M main
   git remote add origin https://github.com/<your-username>/<your-repo>.git
   git push -u origin main
   ```
3. On GitHub, go to your repository **Settings → Pages**.
4. Under **Build and deployment → Source**, select **GitHub Actions**.
5. The included workflow (`Deploy Portfolio to GitHub Pages`) will automatically build and publish your site to your `github.io` URL on every push to `main`!

---

## 6. Deploying to Vercel (Optional Alternative)

1. Push your repository to GitHub.
2. Log in to [Vercel](https://vercel.com) and click **Add New Project**.
3. Import your GitHub repository.
4. Vercel will automatically detect **Vite** (`Build Command: npm run build`, `Output Directory: dist`).
5. Click **Deploy**. You can also attach a custom domain anytime under **Project Settings → Domains**.
