# DevOps Basics with Dali - Students Portal

A simple full-stack application used in Episode 13 of the Kubernetes for Beginners series.

## Application Architecture

```text
Browser
    ↓
React Frontend
    ↓
Node.js + Express API
    ↓
PostgreSQL Database
    ↓
Persistent Storage
```

## Features

- Create Users
- List Users
- Delete Users
- REST API
- PostgreSQL Persistence
- React Frontend
- Kubernetes Ready

## API Endpoints

### Health Check

```http
GET /api/health
```

### Get Users

```http
GET /api/users
```

### Create User

```http
POST /api/users
```

Example:

```json
{
  "name": "Harry Potter",
  "email": "harry@hogwarts.com"
}
```

### Delete User

```http
DELETE /api/users/:id
```

## Database

Example table used in the application:

```sql
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255),
    email VARCHAR(255)
);
```

## Technology Stack

### Frontend

- React
- Vite
- Axios

### Backend

- Node.js
- Express
- PostgreSQL Driver (pg)

### Database

- PostgreSQL

### Infrastructure

- Docker
- Kubernetes
- Minikube

## Project Structure

```text
frontend/
├── React Application

backend/
├── Express API
├── PostgreSQL Integration
└── REST Endpoints

k8s/
├── ConfigMap
├── Secret
├── Deployment
├── Service
├── Persistent Volume Claim
└── Ingress
```

## Kubernetes Concepts Demonstrated

This project is used to demonstrate:

- Deployments
- Services
- ConfigMaps
- Secrets
- Persistent Volumes
- Persistent Volume Claims
- Ingress
- Application Networking
- Real-World Kubernetes Architecture

## Local Development

### Backend

```bash
cd backend
npm install
npm run dev
```

### Frontend

```bash
cd frontend
npm install
npm run dev
```

### PostgreSQL

```bash
docker run --name postgres-test \
-e POSTGRES_USER=postgres \
-e POSTGRES_PASSWORD=postgres \
-e POSTGRES_DB=postgres \
-p 5432:5432 \
-d postgres:16-alpine
```

## YouTube Series

DevOps Basics with Dali

Episode 13 - Real World Application on Kubernetes