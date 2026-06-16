# DevOps Basics Students Portal

Real-world Kubernetes application used in EP13 of DevOps Basics with Dali.

## Architecture

Frontend
- React

Backend
- Node.js + Express

Database
- PostgreSQL

Kubernetes Resources
- Deployments
- Services
- ConfigMaps
- Secrets
- Persistent Volumes
- Ingress

## Deploy

### PostgreSQL

kubectl apply -f k8s/secret/postgres-secret.yaml
kubectl apply -f k8s/postgres/

### Backend

kubectl apply -f k8s/configmap/
kubectl apply -f k8s/secret/backend-secret.yaml
kubectl apply -f k8s/backend/

### Frontend

kubectl apply -f k8s/frontend/

### Ingress

kubectl apply -f k8s/ingress/

## Episode

EP13 - Real World Application on Kubernetes

## License

MIT