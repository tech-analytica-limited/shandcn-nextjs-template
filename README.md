## Starter Code Structure with Shadcn, Next.js 14, TypeScript

### Table of Contents

- Project Setup
- Core Libraries and Tools
- Component Structure
- API Handling
- State Management
- Encryption/Decryption
- Linting and Formatting
- Staging and Deployment
- Example Structure

### Project Setup

1. Project Initialization:

```
npm install
npm run dev
```

2. Project Structure:

```
root/
├── components/
│   ├── Button.tsx
│   ├── Input.tsx
│   └── ...
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   ├── example/
│   │   ├── ExampleComponent1.tsx
│   │   └── ...
├── public/
├── .env.local
├── .eslintrc.json
├── tsconfig.json
├── package.json
├── ...

```

### Core Libraries and Tools

- Shadcn UI
- React Hook Forms
- Zustand
- React Query
- Axios
- Axios Interceptor
- Encryption/Decryption (e.g., crypto-js, react-native-crypto)
- ESLint
- Husky
- Docker
- GitHub Actions

### Component Structure

- Global Components: components folder
- Local Components: Respective route folders
- Naming Convention: PascalCase for components, kebab-case for others

### API Handling

- Common API handler in lib/api/handlers.ts
- Axios interceptors for global request/response handling

### State Management

- Zustand for global state
- React Query for data fetching and caching

### Encryption/Decryption

- Implement based on project requirements
- Store sensitive data encrypted

### Linting and Formatting

- ESLint configuration
- Husky pre-commit hooks

### Staging and deployment

- Dockerfile for containerization
- GitHub Actions workflows for build, deploy

### Example Structure

```
//TypeScript
import { Button } from '@/components'; // Import global component

function ExampleComponent1() {
  return (
    <div>
      <Button>Click me</Button>
    </div>
  );
}

export default ExampleComponent1;
```
