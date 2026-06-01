# Michael

A modern web application built with Next.js, TypeScript, and PostgreSQL.

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 15 (App Router) |
| Language | TypeScript |
| Database | PostgreSQL via Prisma ORM |
| Styling | Tailwind CSS v4 |
| Testing | Vitest + React Testing Library |
| CI/CD | GitHub Actions |
| Hosting | Vercel + Supabase |

## Prerequisites

- Node.js 22+
- pnpm 11+
- PostgreSQL (local or Supabase account)

## Local Development Setup

### 1. Clone the repository

```bash
git clone <repo-url>
cd michael
```

### 2. Install dependencies

```bash
pnpm install
```

### 3. Configure environment

Copy the example env file and fill in your values:

```bash
cp .env.example .env
```

Required variables:

```env
DATABASE_URL=postgresql://user:password@localhost:5432/michael
```

For local PostgreSQL, you can use Docker:

```bash
docker run --name michael-db -e POSTGRES_PASSWORD=postgres -e POSTGRES_DB=michael -p 5432:5432 -d postgres:16
```

Then set:
```env
DATABASE_URL=postgresql://postgres:postgres@localhost:5432/michael
```

### 4. Set up the database

```bash
pnpm prisma migrate dev
pnpm prisma generate
```

### 5. Run the development server

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) to view the app.

## Scripts

| Command | Description |
|---|---|
| `pnpm dev` | Start development server |
| `pnpm build` | Build for production |
| `pnpm start` | Start production server |
| `pnpm lint` | Run ESLint |
| `pnpm typecheck` | Run TypeScript type checking |
| `pnpm test` | Run tests (single pass) |
| `pnpm test:watch` | Run tests in watch mode |
| `pnpm prisma migrate dev` | Run pending migrations |
| `pnpm prisma studio` | Open Prisma Studio (DB browser) |

## Project Structure

```
src/
├── app/            # Next.js App Router (pages, layouts, API routes)
├── components/     # Shared React components
├── lib/            # Utilities and database client
└── __tests__/      # Unit and integration tests
prisma/
└── schema.prisma   # Database schema
.github/workflows/
└── ci.yml          # GitHub Actions CI pipeline
```

## Deployment

### Vercel (recommended)

1. Push to GitHub
2. Import the repo in [Vercel](https://vercel.com)
3. Add `DATABASE_URL` in Vercel environment variables
4. Deploy

### Environment Variables (Production)

| Variable | Description |
|---|---|
| `DATABASE_URL` | PostgreSQL connection string (from Supabase) |

## CI/CD

GitHub Actions runs on every push to `main` and `dev`, and on all pull requests to `main`:

1. Install dependencies
2. Lint
3. Typecheck
4. Test
5. Build

All steps must pass before merging.
