# 🚄 Train Schedule App

<div align="center">

![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=next.js&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Chakra UI](https://img.shields.io/badge/Chakra_UI-319795?style=for-the-badge&logo=chakra-ui&logoColor=white)
![React Query](https://img.shields.io/badge/React_Query-FF4154?style=for-the-badge&logo=react-query&logoColor=white)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-0055FF?style=for-the-badge&logo=framer&logoColor=white)
![ESLint](https://img.shields.io/badge/ESLint-4B32C3?style=for-the-badge&logo=eslint&logoColor=white)
![Prettier](https://img.shields.io/badge/Prettier-F7B93E?style=for-the-badge&logo=prettier&logoColor=black)
![GitHub Actions](https://img.shields.io/badge/GitHub_Actions-2088FF?style=for-the-badge&logo=github-actions&logoColor=white)

</div>

Web application for viewing and managing train schedules, with a modern interface and advanced search capabilities.

---

## ✨ Key Features

<table>
  <tr>
    <td width="50%">
      <h3>🔐 Authentication</h3>
      <ul>
        <li>Secure login and user registration</li>
        <li>JWT authentication</li>
        <li>Form validation with Zod</li>
      </ul>
    </td>
    <td width="50%">
      <h3>🔍 Advanced Search</h3>
      <ul>
        <li>Filtering by route and date</li>
        <li>Sorting by various parameters</li>
        <li>Autocomplete and suggestions</li>
      </ul>
    </td>
  </tr>
  <tr>
    <td width="50%">
      <h3>📋 Schedule Management</h3>
      <ul>
        <li>View, add, edit schedules</li>
        <li>Optimistic UI updates</li>
        <li>Delete entries with confirmation</li>
      </ul>
    </td>
    <td width="50%">
      <h3>🎨 Modern Interface</h3>
      <ul>
        <li>Responsive design for different devices</li>
        <li>Animations and transitions</li>
        <li>Dark/light theme</li>
      </ul>
    </td>
  </tr>
  <tr>
    <td width="50%">
      <h3>⚙️ Code Quality</h3>
      <ul>
        <li>Strict TypeScript typing</li>
        <li>Configured ESLint and Prettier</li>
        <li>Optimized Fast Refresh</li>
      </ul>
    </td>
    <td width="50%">
      <h3>🔄 CI/CD</h3>
      <ul>
        <li>Automated testing</li>
        <li>Code quality checks</li>
        <li>Automatic deployment</li>
      </ul>
    </td>
  </tr>
</table>

## 🧩 Technologies

<details>
<summary><b>Frontend Stack</b></summary>

- **Next.js** - React framework with App Router
- **TypeScript** - Typed programming language
- **Chakra UI** - Component library with theme support
- **React Query** - Server state management and caching
- **Axios** - HTTP client for API requests
- **Framer Motion** - Library for smooth animations
- **React Hook Form** - Form management and validation
- **Zod** - Typed schema validation
- **React Window** - Virtualization for efficient list rendering

</details>

<details>
<summary><b>Development Tools</b></summary>

- **ESLint** - Static code analysis
- **Prettier** - Code formatting
- **TypeScript** - Strict typing
- **GitHub Actions** - CI/CD automation
- **Husky** - Git hooks for code quality control (not implemented yet)
- **lint-staged** - Pre-commit checks for changes (not implemented yet)

</details>

## 🏗️ Project Architecture

```
src/
├── 📁 app/                    # Next.js App Router
│   ├── 🔒 auth/               # Authentication pages
│   ├── 🔍 search/             # Schedule search
│   ├── 📄 page.tsx            # Main page
│   ├── 📐 layout.tsx          # Root layout
│   └── 🔌 providers/          # Context providers
│
├── 📦 components/             # UI components
│   ├── 🧰 feedback/           # Feedback components
│   │   ├── LoadingAnimation.tsx
│   │   └── ErrorDisplay.tsx
│   ├── 🔍 search/             # Search components
│   │   ├── Pagination.tsx
│   │   ├── SearchBar.tsx
│   │   └── SearchForm.tsx
│   │
│   ├── 🚂 trains/             # Train components
│   │   ├── BackgroundTrains/  # Background animation
│   │   │   └── BackgroundTrains.tsx
│   │   │
│   │   ├── TrainCheduleTable/ # Schedule table (alternative)
│   │   │   ├── components/    # Table subcomponents
│   │   │   │   ├── RowRenderer.tsx
│   │   │   │   ├── TableHeader.tsx
│   │   │   │   ├── TableRow.tsx
│   │   │   │   └── SortIcon.tsx
│   │   │   ├── constants/     # Table constants
│   │   │   └── TrainScheduleTable.tsx
│   │   │
│   │   ├── TrainSheduleTable/ # Main schedule table
│   │   │   ├── components/    # Table subcomponents
│   │   │   ├── constants/     # Constants and configuration
│   │   │   └── interfaces/    # Component types
│   │   │
│   │   ├── TrainSheduleModal/ # Train modal window
│   │   │   ├── components/    # Modal subcomponents
│   │   │   ├── constants/     # Modal constants
│   │   │   └── TrainScheduleModal.tsx
│   │   │
│   │   ├── TrainTable/        # Table component
│   │   │
│   │   └── TrainTrack/        # Train track component
│   │       └── TrainTrack.tsx
│   │
│   └── NavBar.tsx             # Navigation component
│
├── 🌐 contexts/               # React contexts
│   └── auth/                  # Authentication contexts
│       ├── AuthContext.ts     # Auth context
│       ├── AuthProvider.tsx   # Auth provider
│       └── useAuth.ts         # Auth hook
│
├── 🪝 hooks/                  # Custom React hooks
│   └── useTrainSearch.ts      # Search and sorting logic
│
├── 🛠️ libs/                   # Utilities and helpers
│   ├── api.ts                 # API functions
│   ├── axios.ts               # Axios configuration
│   └── validation/            # Validation schemas
│       ├── authSchema.ts      # Auth schema
│       └── trainSheduleSchema.ts # Schedule schema
│
├── 🎭 styles/                 # Styles and themes
│   ├── auth/                  # Authentication styles
│   │   └── inputStyles.ts
│   └── tables/                # Table styles
│       └── buttonStyles.ts
│
└── 📋 types/                  # TypeScript types
    ├── train.ts               # Train data interfaces
    └── api.ts                 # API response types
```

## 🚀 Implementation Features

### Form Management and Validation

Forms use a combination of `React Hook Form` and `Zod` for validation:

```typescript
// Example validation schema with Zod
const trainScheduleSchema = z.object({
  trainNumber: z.string().min(3, "Train number must have at least 3 characters"),
  departure: z.date(),
  arrival: z.date(),
  origin: z.string().min(2, "Enter a valid departure station"),
  destination: z.string().min(2, "Enter a valid arrival station"),
  // Additional fields...
}).refine(data => data.arrival > data.departure, {
  message: "Arrival time must be later than departure time",
  path: ["arrival"]
});
```

### Performance Optimization

- List virtualization for efficient rendering of large data sets
- Caching and optimistic updates with React Query
- Efficient state management using hooks and contexts
- Code splitting and lazy loading for faster startup

### Code Quality and Development Tools

- **ESLint** with extended rules for TypeScript and React
- **Prettier** for unified code formatting
- **CI/CD pipeline** based on GitHub Actions:
  - Automatic build and testing
  - Code checking with linters
  - Automatic deployment to hosting

### Responsive Design

- Partially responsive interface using Chakra UI
- Partially added mobile navigation and touch-optimized elements
- Optimized images and animations

### Animations and Transitions

- Smooth page transitions with Framer Motion
- Micro-animations to improve UX
- Animated backgrounds and interface elements

## 🔧 Running the Project

1. Clone the repository:
   ```bash
   git clone https://github.com/username/train-schedule-app.git
   cd train-schedule-app
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Start the local server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser
