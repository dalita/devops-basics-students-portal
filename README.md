DevOps Basics Students Portal
⭐ If you came from the YouTube channel "DevOps Basics with Dali", leave a star on the repository.

A real-world Kubernetes application built during EP13 - Real World Application on Kubernetes from the DevOps Basics with Dali series.

This project demonstrates how to deploy a complete full-stack application on Kubernetes using industry-standard building blocks.

Architecture

Frontend

* React
* Nginx

Backend

* Node.js
* Express

Database

* PostgreSQL

Kubernetes Resources

* Deployments
* Services
* ConfigMaps
* Secrets
* Persistent Volume Claims (PVC)
* Ingress

⸻

Application Flow

Browser
   │
   ▼
Ingress
   │
   ▼
Frontend Service
   │
   ▼
Frontend Pod (React)
   │
   ▼
Backend Service
   │
   ▼
Backend Pod (Node.js)
   │
   ▼
PostgreSQL Service
   │
   ▼
PostgreSQL Pod
   │
   ▼
Persistent Volume Claim


⸻

Deploy PostgreSQL

kubectl apply -f k8s/secret/postgres-secret.yaml
kubectl apply -f k8s/postgres/pvc.yaml
kubectl apply -f k8s/postgres/postgres-deployment.yaml
kubectl apply -f k8s/postgres/postgres-service.yaml

⸻

Deploy Backend

kubectl apply -f k8s/configmap/backend-configmap.yaml
kubectl apply -f k8s/secret/backend-secret.yaml
kubectl apply -f k8s/backend/backend-deployment.yaml
kubectl apply -f k8s/backend/backend-service.yaml

⸻

Deploy Frontend

kubectl apply -f k8s/frontend/frontend-deployment.yaml
kubectl apply -f k8s/frontend/frontend-service.yaml

⸻

Deploy Ingress

kubectl apply -f k8s/ingress/ingress.yaml

⸻

Verify Resources

kubectl get pods
kubectl get svc
kubectl get ingress
kubectl get pvc

⸻

Database Access

kubectl exec -it deployment/postgres -- psql -U postgres

Create the users table:

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255),
    email VARCHAR(255)
);

⸻

Episode Reference

This project was built step-by-step in:

EP13 — Real World Application on Kubernetes

Topics covered:

* Deployments
* Services
* ConfigMaps
* Secrets
* Persistent Storage
* Ingress
* Troubleshooting
* Helm Introduction

⸻

Next Episode

EP14 — Kubernetes Best Practices

We’ll cover:

* Resource Limits
* Health Checks
* Security
* Labels
* Liveness Probes
* Readiness Probes
* Startup Probes

⸻

License

MIT
