# One Beauty Space – AI Coding Agent Instructions

## Overview
This is a Next.js 14 (App Router) project for health, beauty, and wellness. It uses TypeScript (strict), Tailwind CSS, Prisma (SQLite dev, PostgreSQL prod), Zustand, NextAuth.js, React Hook Form, Zod, Lucide React, and Radix UI.

## Essential Architecture
- **Pages:** `src/app/` (Next.js App Router)
- **Components:** `src/components/` (modular, with subfolders for `ui`, `auth`, `health`, `studio`, `store`)
- **State:** `src/stores/` (Zustand, one store per module, always typed)
- **Types:** `src/types/` (all interfaces/types live here)
- **Database:** Prisma schema in `prisma/schema.prisma`, access via `src/lib/db.ts`
- **Utilities:** `src/lib/utils.ts` (use `cn()` for conditional Tailwind classes)

## Key Conventions
- **Language:** All code comments, error messages, and documentation must be in Russian. Variable/function/class names use English (camelCase/PascalCase).
- **Component Props:** Always typed, interface named with `Props` suffix.
- **Exports:** Default for main components, named for helpers.
- **File Naming:**
  - Components: PascalCase (`UserProfile.tsx`)
  - Pages: kebab-case (`health-dashboard.tsx`)
  - Utilities: camelCase (`healthCalculations.ts`)
- **Tailwind:** Mobile-first (`sm:`, `md:`, `lg:`), use project palette (`primary`, `beauty-pink`, etc.), consistent spacing (`gap-4`, `p-4`).
- **Validation:** All user data validated with Zod schemas.
- **Error Handling:** Always use try-catch for async/DB/API code. Use React Error Boundaries for UI.
- **Health Module:** Never encourage unhealthy habits. Block extreme values, always provide positive, motivational feedback.

## Developer Workflows
- **Start Dev Server:** `npm run dev`
- **Type Check:** `npm run type-check`
- **Lint:** `npm run lint`
- **Build:** `npm run build`
- **Status Tracking:** Always read/update `PROJECT_STATUS.md` in root before/after major changes.
- **Progress Comments:** Use `// PROGRESS: [COMPONENT_NAME] - [STATUS] - [DATE]` in code.
- **Dependencies:** List in new files as comments (see examples in `.cursorrules`).
- **Testing:** Components must render without errors, validate forms, and be mobile responsive.

## Integration Points
- **Prisma:** Use only via `src/lib/db.ts`, always typed, handle errors, use transactions for related ops.
- **NextAuth.js:** Email/password, Google, Apple ID; protected routes via middleware; user/admin roles.
- **Forms:** React Hook Form + Zod, validate on client/server, optimistic UI updates.
- **External APIs:** Always use retry logic and timeouts.
- **Context7 MCP:** Use for up-to-date docs on libraries (see `.cursorrules`).

## Project-Specific Patterns
- **No inline styles.**
- **No `any` types.**
- **No logic in UI components.**
- **No duplicate components/types/functions.**
- **Always check for existing components before creating new ones.**
- **Update `PROJECT_STATUS.md` and use checkpoints for major features.**
- **Track testing status in components.**

## Example: Health Component
```typescript
interface HealthEntryProps {
  userId: string
  onSave: (data: HealthEntry) => void
}
export default function HealthEntry({ userId, onSave }: HealthEntryProps) {
  // Zod схема для валидации
  // React Hook Form для обработки
  // Позитивные сообщения обратной связи
}
```

## Before You Start
- Read `PROJECT_STATUS.md` for current progress and priorities.
- Review existing files in `src/app/`, `src/components/`, `src/stores/`, `src/types/`.
- Check `package.json` for dependencies.
- Study `prisma/schema.prisma` for DB structure.

---

_If any section is unclear or missing, please request clarification or provide feedback for improvement._
