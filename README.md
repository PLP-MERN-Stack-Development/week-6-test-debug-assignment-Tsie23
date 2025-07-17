# MERN Testing & Debugging Assignment

## Overview
This project demonstrates comprehensive testing and debugging strategies for a MERN stack application. It includes unit, integration, and end-to-end (E2E) tests, as well as server and client-side debugging techniques.

---

## Table of Contents
- [Project Structure](#project-structure)
- [Setup & Installation](#setup--installation)
- [Running the App](#running-the-app)
- [Testing](#testing)
  - [Unit Tests](#unit-tests)
  - [Integration Tests](#integration-tests)
  - [End-to-End (E2E) Tests](#end-to-end-e2e-tests)
  - [Test Coverage](#test-coverage)
- [Testing Strategy](#testing-strategy)
- [Debugging Techniques](#debugging-techniques)
- [Screenshots of Coverage](#screenshots-of-coverage)
- [Resources](#resources)

---

## Project Structure
```
week-6-test-debug-assignment-Tsie23/
  client/
    src/
      components/
      pages/
      tests/
        unit/
        integration/
    cypress/
      e2e/
  server/
    src/
      controllers/
      middleware/
      models/
      routes/
      utils/
    tests/
      unit/
      integration/
    scripts/
  jest.config.js
  README.md
  Week6-Assignment.md
```

---

## Setup & Installation
1. **Clone the repository**
2. **Install dependencies**
   - In the project root, run:
     ```sh
     pnpm install
     cd week-6-test-debug-assignment-Tsie23/server && pnpm install
     cd ../client && pnpm install
     ```
3. **Set up the test database**
   - In the `server` directory, run:
     ```sh
     pnpm run setup-test-db
     ```
4. **Environment Variables**
   - Ensure MongoDB is running locally or set `MONGO_URI` and `TEST_DB_URI` as needed.

---

## Running the App
- **Server:**
  ```sh
  cd week-6-test-debug-assignment-Tsie23/server
  pnpm run dev
  ```
- **Client:**
  ```sh
  cd week-6-test-debug-assignment-Tsie23/client
  pnpm start
  ```

---

## Testing
### Unit Tests
- **Client:**
  ```sh
  cd client
  pnpm run test:unit
  ```
- **Server:**
  ```sh
  cd server
  pnpm run test:unit
  ```

### Integration Tests
- **Client:**
  ```sh
  cd client
  pnpm run test:integration
  ```
- **Server:**
  ```sh
  cd server
  pnpm run test:integration
  ```

### End-to-End (E2E) Tests
- **Client (Cypress):**
  ```sh
  cd client
  pnpm cypress open
  # or
  pnpm cypress run
  ```
  - E2E tests are in `client/cypress/e2e/`

### Test Coverage
- **Generate coverage reports:**
  ```sh
  # Client
  cd client
  pnpm run test:unit
  # Server
  cd server
  pnpm run test:unit
  ```
- **Coverage reports** will be in the `coverage/` directory of each package. Open `coverage/lcov-report/index.html` in your browser for a visual report.

---

## Testing Strategy
- **Unit Testing:**
  - Test utility functions, React components, and Express middleware in isolation.
  - Use mocks for dependencies.
  - Achieve at least 70% code coverage (enforced by Jest config).
- **Integration Testing:**
  - Test API endpoints with Supertest and an in-memory MongoDB.
  - Test React components that interact with APIs.
  - Validate authentication, form submissions, and data validation.
- **End-to-End Testing:**
  - Use Cypress to test user flows (registration, navigation, error handling).
  - Simulate real user interactions and check UI responses.
- **Continuous Integration:**
  - Scripts are provided for running all test types.

---

## Debugging Techniques
- **Server-side Logging:**
  - Custom logger middleware logs requests.
  - Performance logger middleware logs request durations.
- **Global Error Handling:**
  - Express global error handler catches and responds to errors.
- **Client-side Error Boundaries:**
  - React ErrorBoundary component catches UI errors and displays fallback UI.
- **Browser Dev Tools:**
  - Use Chrome/Firefox DevTools for inspecting React components and network requests.
- **Performance Monitoring:**
  - Request durations are logged in the server console.

---

## Screenshots of Coverage
1. Run the unit tests with coverage enabled (see above).
2. Open the generated HTML report in your browser.
3. Take a screenshot of the summary page.
4. Save the screenshot in the root of your repo as `coverage-screenshot.png` (or similar).
5. Reference the screenshot in your submission.

---

## Resources
- [Jest Documentation](https://jestjs.io/docs/getting-started)
- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)
- [Supertest](https://github.com/visionmedia/supertest)
- [Cypress](https://docs.cypress.io/)
- [MongoDB Memory Server](https://github.com/nodkz/mongodb-memory-server)
- [Express Error Handling](https://expressjs.com/en/guide/error-handling.html)

---

## Notes
- Commit and push your code regularly.
- Ensure all tests pass before submission.
- Achieve at least 70% code coverage for unit tests.
- Document any additional debugging or testing strategies you implement. 