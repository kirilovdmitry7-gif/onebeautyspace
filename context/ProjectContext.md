# Project Context

## Current State (After Rollback - 2025-09-05)

Проект успешно откачен к стабильному состоянию "Health_Module_Reactive_Complete". Все компоненты, связанные с модулем Health, полностью функциональны.

**Удаленные компоненты и зависимости, связанные с NextAuth:**

- Директории: `app/api/auth`, `app/auth`
- Файлы: `lib/auth.ts`, `app/api/test/route.ts`, `app/api/auth-test/route.ts`, `app/api/hello/route.ts`, `vercel.json`
- Код NextAuth: Удален из `app/page.tsx` и `app/layout.tsx`.
- Зависимости `npm`: `@auth/prisma-adapter`, `@next-auth/prisma-adapter`, `@types/next-auth`, `next-auth` были удалены из `package.json`.

**Текущий фокус:** Проект находится в чистом состоянии, готовом для новой, поэтапной реализации функционала авторизации.

## Key Technical Concepts:

- Next.js 14 (App Router)
- React
- TypeScript (строгая типизация)
- Tailwind CSS (utility classes only)
- Prisma (ORM)
- PostgreSQL (database - assumed)
- Vercel (deployment)

## Relevant Files and Code:

- `app/layout.tsx`: Основной макет приложения.
- `app/page.tsx`: Главная страница.
- `app/health/page.tsx`: Страница модуля Health.
- `components/health/`: Директория с компонентами модуля Health.
- `package.json`: Управление зависимостями.
- `.cursorrules`: Правила разработки.

## Problem Solving:

- **Проблема:** Неработоспособность API routes на Vercel и проблемы с NextAuth.
- **Решение:** Полный откат к последней стабильной точке восстановления, где модуль Health работал без проблем с авторизацией. Удаление всех следов NextAuth для обеспечения чистого старта.

## Pending Tasks and Next Steps:

- Реализация функционала авторизации пользователя (User Authentication) с пошаговым тестированием.
