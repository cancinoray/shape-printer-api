# Shape Printer API (TypeScript & Koa)

## Description
A TypeScript-based Koa API that prints various shapes to the console and returns their area.

## Prerequisites
- Node.js (v16 or higher)
- npm

## Installation
1. Clone the repository
2. Install dependencies:
   ```
   npm install
   ```

## Configuration
Create a `.env` file in the root directory with:
```
API_USERNAME=admin
API_PASSWORD=password
PORT=3000
```

## Running the API
- Development: `npm run dev`
- Build and Start:
  ```
  npm run build
  npm start
  ```

## Testing
- Run all tests: `npm test`
- Run unit tests: `npm run test:unit`
- Run integration tests: `npm run test:integration`

## API Endpoints
- `GET /shape/{shape}?times={number}`
    - Shapes: rectangle, triangle, diamond
    - Query param `times`: Number of times to print the shape
    - Authentication: Basic Auth required

## Example Curl Commands
```bash
# Rectangle with default size, printed once
curl -u admin:password 'http://localhost:3000/shape/rectangle'

# Triangle printed 3 times
curl -u admin:password 'http://localhost:3000/shape/triangle?times=3'
```

## Authentication
- Username: admin
- Password: password (configurable in .env)