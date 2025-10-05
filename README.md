

# Resume-matcher

This is a NextJS application for resume matching using AI, built with Firebase and Genkit.

## Getting Started

To get started, take a look at `src/app/page.tsx`.

### Prerequisites

- Node.js 18+
- npm or yarn
- Firebase CLI (for deployment)
- Docker (optional, for containerized development)

### Installation

1. Clone the repository
2. Copy `.env.example` to `.env.local` and fill in your environment variables
3. Run `npm install`

### Local Development

#### Using npm
```bash
npm run dev
```

#### Using Docker
```bash
docker-compose up
```

### Building and Running

```bash
npm run build
npm start
```

### Linting and Type Checking

```bash
npm run lint
npm run typecheck
```

## DevOps Setup

### CI/CD

This project uses GitHub Actions for continuous integration and deployment.

- **CI**: On pull requests to `main`, the code is linted, type-checked, and built.
- **CD**: On pushes to `main`, the app is deployed to Firebase App Hosting.

### Deployment

#### Manual Deployment

1. Install Firebase CLI: `npm install -g firebase-tools`
2. Login: `firebase login`
3. Deploy: `npm run deploy`

#### Automated Deployment

Pushes to the `main` branch trigger automatic deployment via GitHub Actions. Ensure the following secrets are set in your GitHub repository:

- `FIREBASE_SERVICE_ACCOUNT`: Your Firebase service account JSON

Update the `projectId` in `.github/workflows/deploy.yml` with your Firebase project ID.

### Containerization

- **Dockerfile**: For production builds
- **docker-compose.yml**: For local development with hot reload

To build and run the Docker container:

```bash
docker build -t resume-matcher .
docker run -p 3000:3000 resume-matcher
```

## Environment Variables

Copy `.env.example` to `.env.local` and set the following variables:

- Firebase configuration (API key, auth domain, etc.)
- Google API key for Genkit

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run tests and linting
5. Submit a pull request

Pull requests will trigger CI checks.
