# DevOps Basics with Dali - Students Portal Frontend

React frontend for the Students Portal application used in Episode 13 of the Kubernetes for Beginners series.

## Features

- Display registered students
- Create new students
- Delete existing students
- Connect to a Node.js REST API
- Demonstrate frontend-to-backend communication

## Technology Stack

- React
- Vite
- Axios

## Application Flow

```text
Browser
    ↓
React Frontend
    ↓
Node.js API
    ↓
PostgreSQL Database
```

## Development

Install dependencies:

```bash
npm install
```

Start development server:

```bash
npm run dev
```

The application will be available at:

```text
http://localhost:5173
```

## API Requirements

The frontend expects a backend API running on:

```text
http://localhost:5001
```

Available endpoints:

```http
GET    /api/users
POST   /api/users
DELETE /api/users/:id
```

## Purpose

This frontend is used to demonstrate:

- React Components
- API Integration
- CRUD Operations
- Kubernetes Deployments
- Services and Networking
- Ingress Routing

## YouTube Series

DevOps Basics with Dali

Episode 13 - Real World Application on Kubernetes