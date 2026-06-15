# DevOps Basics with Dali - Students Portal

Simple full-stack application used in the Kubernetes EP13 episode.

## Architecture

Frontend (React)
↓
Backend (Node.js + Express)
↓
PostgreSQL

## Features

- Create Users
- List Users
- Delete Users
- PostgreSQL Persistence
- REST API
- React Frontend

## API Endpoints

### Get Users

GET /api/users

### Create User

POST /api/users

Example:

```json
{
  "name": "Harry Potter",
  "email": "harry@hogwarts.com"
}
```

### Delete User

DELETE /api/users/:id

## Database

Example table:

```sql
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255),
    email VARCHAR(255)
);
```

## Technology Stack

- React
- Vite
- Node.js
- Express
- PostgreSQL

## Purpose

This application is used in the DevOps Basics with Dali Kubernetes series to demonstrate:

- Deployments
- Services
- ConfigMaps
- Secrets
- Persistent Volumes
- Ingress
- Real-world Kubernetes architecture