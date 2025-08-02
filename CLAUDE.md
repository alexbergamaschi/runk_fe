# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build production application  
- `npm run start` - Start production server
- `npm run lint` - Run ESLint checks

## Architecture Overview

This is a Next.js 15 application for **Runk**, a territory conquest running app that integrates with Strava. The app gamifies running by allowing users to "conquer territories" through completed running routes.

### Key Technologies
- **Next.js 15** with App Router and React 19
- **TanStack Query** for server state management and API caching
- **shadcn/ui** components with Tailwind CSS
- **TypeScript** for type safety
- **Strava API** integration for activity synchronization

### Core Architecture Patterns

#### API Layer (`src/api/`)
- `client.ts` - Generic HTTP client with credential management
- `strava.ts` - Strava-specific API endpoints and authentication flow
- Backend server: `https://runk.onrender.com` (configurable via `NEXT_PUBLIC_BACKEND_SERVER`)

#### Authentication Flow
The app uses a popup-based OAuth flow with Strava:
1. User clicks "Connect Strava" → opens popup window
2. Popup redirects to `/auth/strava/callback` after OAuth
3. Callback page posts message back to parent window
4. Parent window updates auth state and reloads

#### State Management
- **TanStack Query** handles all server state (user info, auth status)
- Auth state is managed through `useStravaAuth` hook
- 5-minute stale time for user data queries

#### UI Components (`src/components/ui/`)
- Uses shadcn/ui component library
- Custom `AnimatedSection` component for scroll animations
- Apple-inspired design system with custom CSS classes

### Important Implementation Details

#### API Client Credentials
- GET requests: credentials only when `withCredentials=true`
- POST requests: credentials by default (`withCredentials=true`)
- Auth check: `/user` endpoint with credentials
- Auth URL: `/auth/strava` endpoint without credentials

#### Error Handling
- 401 errors are treated as "not authenticated" (not logged as errors)
- Network errors and other HTTP errors are logged with emoji prefixes
- Popup timeout: 2 minutes for Strava auth

#### Italian Localization
The app is fully localized in Italian - maintain this language for all user-facing text.

### File Structure Notes
- `src/app/` - Next.js App Router pages
- `src/hooks/` - Custom React hooks  
- `src/providers/` - React context providers
- `src/types/` - TypeScript type definitions
- Path alias: `@/*` maps to `src/*`