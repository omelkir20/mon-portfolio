# mon-portfolio

Portfolio Next.js de **Omelkhir Rebei** (Ingénieur DevOps & Cloud), généré par Backstage avec le template `portfolio-nextjs-template`.

## Contenu du dépôt

| Fichier | Rôle |
|---|---|
| `app/` | Code Next.js (App Router) |
| `next.config.js` | Build en mode `standalone` (image Docker légère) |
| `Dockerfile` | Build multi-étapes de l'image |
| `.dockerignore` | Fichiers exclus du contexte Docker |
| `docker-compose.yml` | Lancement du conteneur sur le port 3000 |
| `.github/workflows/ci-cd.yml` | Pipeline : build, push Docker Hub, déploiement local |
| `catalog-info.yaml` | Métadonnées du composant dans le Backstage Catalog |

## Exécution locale

```bash
npm install
npm run dev          # http://localhost:3000
```

## Avec Docker

```bash
docker compose up -d     # http://localhost:3000
docker compose down
```

## Pipeline CI/CD

Le workflow `ci-cd.yml` se déclenche à chaque push sur `main` ou manuellement depuis Backstage (`workflow_dispatch`) :

1. **build-and-push** (GitHub-hosted) : `npm run build`, construction de l'image, push sur Docker Hub.
2. **deploy** (runner self-hosted) : `docker compose pull`, `docker compose up -d`, health check sur `http://localhost:3000`.

### Versionnement des images

`omelkir/portfolio-nextjs:v<numéro de run>` (ou la version saisie au déclenchement, par exemple `v2`), ainsi que `latest`.

### Secrets et variables du dépôt

| Nom | Type | Valeur |
|---|---|---|
| `DOCKERHUB_USERNAME` | Variable | `omelkir` |
| `DOCKERHUB_TOKEN` | Secret | Access Token Docker Hub (injecté par Backstage) |

## Liens

- Image Docker Hub : https://hub.docker.com/r/omelkir/portfolio-nextjs
- Dépôt : https://github.com/omelkir20/mon-portfolio
- Application déployée : http://localhost:3000
